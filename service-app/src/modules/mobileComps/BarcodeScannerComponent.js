"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const library_1 = require("@zxing/library");
const react_webcam_1 = __importDefault(require("react-webcam"));
const BarcodeScannerComponent = ({ width, height, onUpdate }) => {
    const webcamRef = react_1.default.useRef(null);
    const codeReader = new library_1.BrowserMultiFormatReader();
    const capture = react_1.default.useCallback(() => {
        var _a;
        const imageSrc = (_a = webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current) === null || _a === void 0 ? void 0 : _a.getScreenshot();
        if (imageSrc) {
            codeReader.decodeFromImage(undefined, imageSrc).then(result => {
                onUpdate(null, result);
            }).catch((err) => {
                onUpdate(err);
            });
        }
    }, [codeReader, onUpdate]);
    react_1.default.useEffect(() => {
        setInterval(capture, 100);
    }, []);
    return (react_1.default.createElement(react_webcam_1.default, { width: width, height: height, ref: webcamRef, screenshotFormat: "image/png", videoConstraints: {
            facingMode: 'environment'
        } }));
};
exports.default = BarcodeScannerComponent;
