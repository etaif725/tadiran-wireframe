import 'server-only';
import { validHttps } from './inquiry-schema';
export function inquiryConfiguration(){return {available:Boolean(validHttps(process.env.INQUIRY_WEBHOOK_URL)&&process.env.INQUIRY_WEBHOOK_TOKEN&&process.env.TURNSTILE_SECRET_KEY&&process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY&&validHttps(process.env.PRIVACY_POLICY_URL)&&validHttps(process.env.SITE_URL)),privacyUrl:validHttps(process.env.PRIVACY_POLICY_URL)?process.env.PRIVACY_POLICY_URL:'',siteKey:process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY||''}}
