import SourceCodeMap from "./SourceCodeMap";
import MultiSourceCodeMap from "./MultiSourceCodeMap";

export default interface SourceCodeResponse {
    status: number
    sourceCode?: SourceCodeMap;
    multiSourceCode?: MultiSourceCodeMap;
}