import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to DIM Internal Studio
                </Link>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Internal Terms of Service</h1>

                <div className="prose prose-slate max-w-none">
                    <p className="lead text-lg text-slate-600 mb-6">
                        Welcome to the DIM Internal Application.
                    </p>
                    <p className="mb-4">
                        <strong>1. Internal Use Only:</strong> This application and its related services (such as the Image Studio) are strictly for the internal use of DIM employees and authorized contractors. Unauthorized access, sharing of login credentials, or external distribution of internal tools is strictly prohibited.
                    </p>
                    <p className="mb-4">
                        <strong>2. Data and Content:</strong> All content generated, modified, or uploaded to this application remains the property of DIM. Do not upload sensitive personal data or classified materials unless explicitly authorized by your project requirements.
                    </p>
                    <p className="mb-4">
                        <strong>3. Artificial Intelligence:</strong> Some tools (e.g., text extraction and image enhancements) utilize third-party AI models (Kie.ai, Nano Banana). You must review all AI-generated content for accuracy and brand compliance before publishing it externally.
                    </p>
                    <p className="mb-4">
                        <strong>4. Account Access:</strong> Access to this system is managed via DIM's internal identity provider. Access may be revoked at any time without prior notice at management's discretion.
                    </p>
                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
