import { MessageAttachment } from "@slack/types";
import { IncomingWebhookDefaultArguments, IncomingWebhookSendArguments } from "@slack/webhook";
export interface SlackRunnerOptions {
    ciProvider: string;
    vcsRoot: string;
    reportDir: string;
    videoDir: string;
    screenshotDir: string;
    customUrl?: string;
    onlyFailed?: boolean;
}
export declare function slackRunner({ ciProvider, vcsRoot, reportDir, videoDir, screenshotDir, customUrl, onlyFailed, }: SlackRunnerOptions): string | Promise<import("@slack/webhook").IncomingWebhookResult>;
export declare function sendMessage({ ciProvider: _ciProvider, vcsRoot: _vcsRoot, reportDir: _reportDir, videoDir: _videoDir, screenshotDir: _screenshotDir, customUrl, onlyFailed, }: SlackRunnerOptions): string | Promise<import("@slack/webhook").IncomingWebhookResult>;
export declare function constructMessage(_status: string): Promise<import("@slack/webhook").IncomingWebhookResult>;
export declare function webhookInitialArgs(initialArgs: IncomingWebhookDefaultArguments, _status: string): {
    text: string;
};
export declare function webhookSendArgs(argsWebhookSend: IncomingWebhookSendArguments, messageAttachments: MessageAttachment[]): IncomingWebhookSendArguments;
export declare function attachmentReports(attachmentsReports: MessageAttachment, _status: string): MessageAttachment;
export declare function attachmentsVideoAndScreenshots(attachmentsVideosScreenshots: MessageAttachment, _status: string): MessageAttachment;
export declare function getFiles(dir: string, ext: string, fileList: string[]): string[];
export declare function getHTMLReportFilename(reportDir: string): string;
export declare function getTestReportStatus(reportDir: string): {
    totalSuites: number;
    totalTests: number;
    totalPasses: number;
    totalFailures: number;
    totalDuration: number;
    reportFile: string[];
    status: string;
};
export declare function prChecker(_CI_PULL_REQUEST: string): string | undefined;
export declare function getVideoLinks(_artefactUrl: string, _videosDir: string): string;
export declare function getScreenshotLinks(_artefactUrl: string, _screenshotDir: string): string;
export declare function buildHTMLReportURL(_reportDir: string, _artefactUrl: string, _ciProvider: string): string;
export declare function getArtefactUrl(_vcsRoot: string, ciProvider: string, customUrl: string): string;
export declare function getCommitUrl(_vcsRoot: string): string;
export declare function resolveCIProvider(ciProvider?: string): void;
