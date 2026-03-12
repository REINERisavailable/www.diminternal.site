import Link from "next/link";
import { ArrowLeft, Webhook } from "lucide-react";

export default function WebhooksPage() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <div className="text-center space-y-6 max-w-lg">
                <Webhook className="mx-auto h-16 w-16 text-blue-500" />
                <h1 className="text-4xl font-bold tracking-tight">Webhooks</h1>
                <p className="text-xl text-slate-500 dark:text-slate-400">
                    Coming soon.
                </p>
                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
