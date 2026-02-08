import type {StaticImageData} from "next/image";

import adobe from "@/public/assets/svg/company/adobe.svg";
import amazon from "@/public/assets/svg/company/amazon.svg";
import apple from "@/public/assets/svg/company/apple.svg";
import aws from "@/public/assets/svg/company/aws.svg";
import google from "@/public/assets/svg/company/google.svg";
import ibm from "@/public/assets/svg/company/ibm.svg";
import meta from "@/public/assets/svg/company/meta.svg";
import microsoft from "@/public/assets/svg/company/microsoft.svg";
import netflix from "@/public/assets/svg/company/netflix.svg";
import oracle from "@/public/assets/svg/company/oracle.svg";
import salesforce from "@/public/assets/svg/company/salesforce.svg";
import tesla from "@/public/assets/svg/company/tesla.svg";
import isn from "@/public/assets/svg/company/isn.png";
import university_of_texas_at_arlington from "@/public/assets/svg/company/university_of_texas_at_arlington.svg";
import hughes_systique_corporation from "@/public/assets/svg/company/hughes_systique_corporation.png";
import hoc from "@/public/assets/svg/company/hoc.png";
import accenture from "@/public/assets/svg/company/accenture.svg";
import capgemini from "@/public/assets/svg/company/capgemini.svg";

/**
 * Map company name (as in COMPANY_NAMES) → StaticImageData for logos in public/assets/svg/company.
 * Add new imports above and new entries below when you add SVGs to that directory.
 */
export const companyLogos: Record<string, StaticImageData> = {
    Google: google,
    Amazon: amazon,
    Meta: meta,
    Microsoft: microsoft,
    Apple: apple,
    Netflix: netflix,
    Tesla: tesla,
    IBM: ibm,
    Oracle: oracle,
    Salesforce: salesforce,
    Adobe: adobe,
    "Amazon Web Services": aws,
    "University of Texas at Arlington": university_of_texas_at_arlington,
    "Hughes Systique Corporation": hughes_systique_corporation,
    "ISN Software": isn,
    HOC: hoc,
    capgemini: capgemini,
    accenture: accenture,
};
