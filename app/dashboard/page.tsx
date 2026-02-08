"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Testimony, TestimonyStatus, TestimonyRelation } from "@/lib/types/Testimony";
import { TestimonialContent } from "@/app/components/Testimonials/TestimonialContent";
import { TestimonialRichEditor } from "@/app/components/TestimonialEditor/TestimonialRichEditor";

const RELATION_OPTIONS: TestimonyRelation[] = ["FRIEND", "FAMILY", "COLLEAGUE", "OTHER"];
const STATUS_OPTIONS: TestimonyStatus[] = ["pending", "approved", "rejected"];

const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const labelClass = "block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300";

export default function DashboardPage() {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);
    const [testimonies, setTestimonies] = useState<Testimony[]>([]);
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [editingTestimony, setEditingTestimony] = useState<Testimony | null>(null);
    const [editForm, setEditForm] = useState<{
        name: string;
        relation: TestimonyRelation;
        comment: string;
        whereWeFirstMet: string;
        professionalRelation: string;
        company: string;
        position: string;
        status: TestimonyStatus;
    } | null>(null);
    const [editSaving, setEditSaving] = useState(false);
    const [editError, setEditError] = useState<string | null>(null);

    const fetchTestimonies = useCallback(async () => {
        const res = await fetch("/api/dashboard/testimonies");
        if (res.status === 401) {
            setAuthenticated(false);
            setTestimonies([]);
            return;
        }
        if (!res.ok) {
            setAuthenticated(false);
            return;
        }
        const data = await res.json();
        setTestimonies(data.testimonies ?? []);
        setAuthenticated(true);
    }, []);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const res = await fetch("/api/dashboard/testimonies");
            if (cancelled) return;
            setLoading(false);
            if (res.status === 401) {
                setAuthenticated(false);
                return;
            }
            if (!res.ok) {
                setAuthenticated(false);
                return;
            }
            const data = await res.json();
            setTestimonies(data.testimonies ?? []);
            setAuthenticated(true);
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError("");
        const res = await fetch("/api/dashboard/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });
        const data = await res.json();
        if (res.status === 401) {
            setLoginError(data.error || "Invalid password");
            return;
        }
        if (!res.ok) {
            setLoginError(data.error || "Login failed");
            return;
        }
        setAuthenticated(true);
        setPassword("");
        await fetchTestimonies();
    };

    const handleLogout = async () => {
        await fetch("/api/dashboard/logout", { method: "POST" });
        setAuthenticated(false);
        setTestimonies([]);
    };

    const updateStatus = async (id: string, status: TestimonyStatus) => {
        setUpdatingId(id);
        try {
            const res = await fetch(`/api/dashboard/testimonies/${id}/status`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            });
            if (res.ok) await fetchTestimonies();
        } finally {
            setUpdatingId(null);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Delete this testimony? The image will be removed from storage as well.")) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/dashboard/testimonies/${id}`, { method: "DELETE" });
            if (res.ok) await fetchTestimonies();
        } finally {
            setDeletingId(null);
        }
    };

    const openEdit = (t: Testimony) => {
        setEditingTestimony(t);
        setEditForm({
            name: t.name ?? "",
            relation: t.relation ?? "COLLEAGUE",
            comment: t.comment ?? "",
            whereWeFirstMet: t.whereWeFirstMet ?? "",
            professionalRelation: t.professionalRelation ?? "",
            company: t.company ?? "",
            position: t.position ?? "",
            status: (t.status as TestimonyStatus) ?? "pending",
        });
        setEditError(null);
    };

    const closeEdit = () => {
        setEditingTestimony(null);
        setEditForm(null);
        setEditError(null);
    };

    const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!editingTestimony?._id || !editForm) return;
        setEditSaving(true);
        setEditError(null);
        try {
            const res = await fetch(`/api/dashboard/testimonies/${editingTestimony._id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: editForm.name.trim(),
                    relation: editForm.relation,
                    comment: editForm.comment.trim(),
                    whereWeFirstMet: editForm.whereWeFirstMet.trim(),
                    professionalRelation: editForm.professionalRelation.trim(),
                    company: editForm.company.trim() || undefined,
                    position: editForm.position.trim() || undefined,
                    status: editForm.status,
                }),
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok) {
                setEditError(json.error || (json.errors ? JSON.stringify(json.errors) : "Failed to update"));
                return;
            }
            closeEdit();
            await fetchTestimonies();
        } finally {
            setEditSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                <p className="text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
        );
    }

    if (authenticated === false) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
                <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                    <h1 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                        Dashboard login
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                placeholder="Enter password"
                                required
                                autoFocus
                            />
                        </div>
                        {loginError && (
                            <p className="text-sm text-red-600 dark:text-red-400">{loginError}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Testimonies
                    </h1>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                        Log out
                    </button>
                </div>

                {testimonies.length === 0 ? (
                    <p className="rounded-lg border border-gray-200 bg-white p-6 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                        No testimonies to review.
                    </p>
                ) : (
                    <ul className="space-y-4">
                        {testimonies.map((t) => (
                            <li
                                key={t._id}
                                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                            >
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        {t.name}
                                    </span>
                                    <span
                                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                            t.status === "approved"
                                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                                : t.status === "rejected"
                                                  ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                                        }`}
                                    >
                                        {t.status ?? "pending"}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {t.relation}
                                    </span>
                                </div>
                                {t.whereWeFirstMet && (
                                    <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">
                                        <span className="font-medium">Where we met:</span>{" "}
                                        {t.whereWeFirstMet}
                                    </p>
                                )}
                                {t.professionalRelation && (
                                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                                        <span className="font-medium">Professional relation:</span>{" "}
                                        {t.professionalRelation}
                                    </p>
                                )}
                                <div className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                                    <TestimonialContent html={t.comment ?? ""} />
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => openEdit(t)}
                                        className="rounded-lg border border-blue-500 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-800 hover:bg-blue-100 dark:border-blue-600 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        disabled={updatingId === t._id || (t.status ?? "pending") === "pending"}
                                        onClick={() => t._id && updateStatus(t._id, "pending")}
                                        className="rounded-lg border border-amber-500 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-800 hover:bg-amber-100 disabled:opacity-50 disabled:cursor-default dark:border-amber-600 dark:bg-amber-900/20 dark:text-amber-400 dark:hover:bg-amber-900/30"
                                    >
                                        Pending
                                    </button>
                                    <button
                                        type="button"
                                        disabled={updatingId === t._id || (t.status ?? "pending") === "approved"}
                                        onClick={() => t._id && updateStatus(t._id, "approved")}
                                        className="rounded-lg border border-green-500 bg-green-50 px-3 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 disabled:opacity-50 disabled:cursor-default dark:border-green-600 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        type="button"
                                        disabled={updatingId === t._id || (t.status ?? "pending") === "rejected"}
                                        onClick={() => t._id && updateStatus(t._id, "rejected")}
                                        className="rounded-lg border border-red-500 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-800 hover:bg-red-100 disabled:opacity-50 disabled:cursor-default dark:border-red-600 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
                                    >
                                        Reject
                                    </button>
                                    <button
                                        type="button"
                                        disabled={deletingId === t._id}
                                        onClick={() => t._id && handleDelete(t._id)}
                                        className="ml-auto rounded-lg border border-gray-400 bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-default dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                                    >
                                        {deletingId === t._id ? "Deleting…" : "Delete"}
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {editingTestimony && editForm && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="edit-testimony-title"
                    >
                        <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
                            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
                                <h2 id="edit-testimony-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Edit testimony
                                </h2>
                                <button
                                    type="button"
                                    onClick={closeEdit}
                                    className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    aria-label="Close"
                                >
                                    ×
                                </button>
                            </div>
                            <form onSubmit={handleEditSubmit} className="p-4 space-y-3">
                                <div>
                                    <label htmlFor="edit-name" className={labelClass}>Name</label>
                                    <input
                                        id="edit-name"
                                        name="edit-name"
                                        type="text"
                                        value={editForm.name}
                                        onChange={(e) => setEditForm((f) => f ? { ...f, name: e.target.value } : null)}
                                        className={inputClass}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="edit-relation" className={labelClass}>Relation</label>
                                    <select
                                        id="edit-relation"
                                        name="edit-relation"
                                        value={editForm.relation}
                                        onChange={(e) => setEditForm((f) => f ? { ...f, relation: e.target.value as TestimonyRelation } : null)}
                                        className={inputClass}
                                    >
                                        {RELATION_OPTIONS.map((r) => (
                                            <option key={r} value={r}>{r}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="edit-whereWeFirstMet" className={labelClass}>Where we first met</label>
                                    <input
                                        id="edit-whereWeFirstMet"
                                        name="edit-whereWeFirstMet"
                                        type="text"
                                        value={editForm.whereWeFirstMet}
                                        onChange={(e) => setEditForm((f) => f ? { ...f, whereWeFirstMet: e.target.value } : null)}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="edit-professionalRelation" className={labelClass}>Professional relation</label>
                                    <input
                                        id="edit-professionalRelation"
                                        name="edit-professionalRelation"
                                        type="text"
                                        value={editForm.professionalRelation}
                                        onChange={(e) => setEditForm((f) => f ? { ...f, professionalRelation: e.target.value } : null)}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="edit-company" className={labelClass}>Company</label>
                                    <input
                                        id="edit-company"
                                        name="edit-company"
                                        type="text"
                                        value={editForm.company}
                                        onChange={(e) => setEditForm((f) => f ? { ...f, company: e.target.value } : null)}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="edit-position" className={labelClass}>Position</label>
                                    <input
                                        id="edit-position"
                                        name="edit-position"
                                        type="text"
                                        value={editForm.position}
                                        onChange={(e) => setEditForm((f) => f ? { ...f, position: e.target.value } : null)}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="edit-status" className={labelClass}>Status</label>
                                    <select
                                        id="edit-status"
                                        name="edit-status"
                                        value={editForm.status}
                                        onChange={(e) => setEditForm((f) => f ? { ...f, status: e.target.value as TestimonyStatus } : null)}
                                        className={inputClass}
                                    >
                                        {STATUS_OPTIONS.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="edit-comment" className={labelClass}>Comment</label>
                                    <TestimonialRichEditor
                                        value={editForm.comment}
                                        onChange={(html) => setEditForm((f) => f ? { ...f, comment: html } : null)}
                                        placeholder="Testimonial message"
                                        required
                                        aria-label="Comment"
                                    />
                                </div>
                                {editError && (
                                    <p className="text-sm text-red-600 dark:text-red-400">{editError}</p>
                                )}
                                <div className="flex gap-2 pt-2">
                                    <button
                                        type="submit"
                                        disabled={editSaving}
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
                                    >
                                        {editSaving ? "Saving…" : "Save"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeEdit}
                                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
