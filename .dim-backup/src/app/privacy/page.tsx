import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to DIM Internal Studio
                </Link>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Internal Privacy Policy</h1>

                <div className="prose prose-slate max-w-none">
                    <p className="lead text-lg text-slate-600 mb-6">
                        Privacy guidelines for the DIM Internal Application.
                    </p>
                    <p className="mb-4">
                        <strong>1. Scope:</strong> This privacy policy applies solely to the DIM Internal Studio application. As an internal tool, standard employee monitoring policies apply.
                    </p>
                    <p className="mb-4">
                        <strong>2. Data Collection:</strong> We collect usage data, generated images, and uploaded text inputs to improve our internal tools and audit system usage. This data is stored securely in our internal Supabase database.
                    </p>
                    <p className="mb-4">
                        <strong>3. Third-Party API Usage:</strong> Data entered into the Image Studio (images and text) may be securely transmitted to third-party AI providers (Kie.ai) exclusively for the purpose of generating the requested output in real-time. Do not input PII (Personally Identifiable Information) or sensitive customer data into these tools.
                    </p>
                    <p className="mb-4">
                        <strong>4. Security:</strong> DIM maintains technical and organizational measures to ensure a level of security appropriate to the risk of internal systems. Only authorized personnel have access to the dashboard.
                    </p>
                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <p className="text-sm text-slate-500">Contact IT Support for any privacy-related queries.</p>
                        <p className="text-sm text-slate-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
