import SourceCodeMap from "./SourceCodeMap";

export default interface SourceCodeResponse {
    status: number
    sourceCode: SourceCodeMap;
}