import { DocumentEditor, DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['acceptTab', 'currentUser', 'defaultPasteOption', 'documentName', 'enableBookmarkDialog', 'enableBordersAndShadingDialog', 'enableContextMenu', 'enableCursorOnReadOnly', 'enableEditor', 'enableEditorHistory', 'enableFontDialog', 'enableHyperlinkDialog', 'enableImageResizer', 'enableListDialog', 'enableLocalPaste', 'enableOptionsPane', 'enablePageSetupDialog', 'enableParagraphDialog', 'enablePersistence', 'enablePrint', 'enableRtl', 'enableSearch', 'enableSelection', 'enableSfdtExport', 'enableSpellCheck', 'enableStyleDialog', 'enableTableDialog', 'enableTableOfContentsDialog', 'enableTableOptionsDialog', 'enableTablePropertiesDialog', 'enableTextExport', 'enableWordExport', 'isReadOnly', 'locale', 'pageGap', 'pageOutline', 'serverActionSettings', 'serviceUrl', 'useCtrlClickToFollowHyperlink', 'userColor', 'zoomFactor', 'contentChange', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'keyDown', 'requestNavigate', 'searchResultsChange', 'selectionChange', 'viewChange', 'zoomFactorChange'];
const modelProps = [];
/**
 * Represents the Essential JS 2 VueJS Document Editor Component
 * ```html
 * <ejs-documenteditor id='container'></ejs-documenteditor>
 * ```
 */
let DocumentEditorComponent = class DocumentEditorComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new DocumentEditor({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    enableAllModules() {
        return this.ej2Instances.enableAllModules();
    }
    fitPage(pageFitType) {
        return this.ej2Instances.fitPage(pageFitType);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    getBookmarks() {
        return this.ej2Instances.getBookmarks();
    }
    getStyleNames(styleType) {
        return this.ej2Instances.getStyleNames(styleType);
    }
    getStyles(styleType) {
        return this.ej2Instances.getStyles(styleType);
    }
    open(sfdtText) {
        return this.ej2Instances.open(sfdtText);
    }
    openBlank() {
        return this.ej2Instances.openBlank();
    }
    print(printWindow) {
        return this.ej2Instances.print(printWindow);
    }
    resize(width, height) {
        return this.ej2Instances.resize(width, height);
    }
    save(fileName, formatType) {
        return this.ej2Instances.save(fileName, formatType);
    }
    saveAsBlob(formatType) {
        return this.ej2Instances.saveAsBlob(formatType);
    }
    scrollToPage(pageNumber) {
        return this.ej2Instances.scrollToPage(pageNumber);
    }
    serialize() {
        return this.ej2Instances.serialize();
    }
    setDefaultCharacterFormat(characterFormat) {
        return this.ej2Instances.setDefaultCharacterFormat(characterFormat);
    }
    setDefaultParagraphFormat(paragraphFormat) {
        return this.ej2Instances.setDefaultParagraphFormat(paragraphFormat);
    }
    showDialog(dialogType) {
        return this.ej2Instances.showDialog(dialogType);
    }
    showOptionsPane() {
        return this.ej2Instances.showOptionsPane();
    }
};
DocumentEditorComponent = __decorate([
    EJComponentDecorator({
        props: properties
    })
], DocumentEditorComponent);
const DocumentEditorPlugin = {
    name: 'ejs-documenteditor',
    install(Vue) {
        Vue.component(DocumentEditorPlugin.name, DocumentEditorComponent);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['enableLocalPaste', 'enablePersistence', 'enableRtl', 'enableSpellCheck', 'enableToolbar', 'locale', 'restrictEditing', 'serverActionSettings', 'serviceUrl', 'showPropertiesPane', 'contentChange', 'created', 'customContextMenuBeforeOpen', 'customContextMenuSelect', 'destroyed', 'documentChange', 'selectionChange'];
const modelProps$1 = [];
/**
 * Represents the Essential JS 2 VueJS Document Editor Container
 * ```html
 * <ejs-documenteditor-container id='container'></ejs-documenteditor-container>
 * ```
 */
let DocumentEditorContainerComponent = class DocumentEditorContainerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new DocumentEditorContainer({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
};
DocumentEditorContainerComponent = __decorate$1([
    EJComponentDecorator({
        props: properties$1
    })
], DocumentEditorContainerComponent);
const DocumentEditorContainerPlugin = {
    name: 'ejs-documenteditorcontainer',
    install(Vue) {
        Vue.component(DocumentEditorContainerPlugin.name, DocumentEditorContainerComponent);
    }
};

export { DocumentEditorComponent, DocumentEditorPlugin, DocumentEditorContainerComponent, DocumentEditorContainerPlugin };
export * from '@syncfusion/ej2-documenteditor';
//# sourceMappingURL=ej2-vue-documenteditor.es2015.js.map
