import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Diagram } from '@syncfusion/ej2-diagrams';
import { LayersDirective, LayerDirective, LayersPlugin, LayerPlugin } from './layers.directive'
import { ConnectorAnnotationsDirective, ConnectorAnnotationDirective, ConnectorAnnotationsPlugin, ConnectorAnnotationPlugin } from './connector-annotation.directive'
import { ConnectorsDirective, ConnectorDirective, ConnectorsPlugin, ConnectorPlugin } from './connectors.directive'
import { NodeAnnotationsDirective, NodeAnnotationDirective, NodeAnnotationsPlugin, NodeAnnotationPlugin } from './node-annotation.directive'
import { PortsDirective, PortDirective, PortsPlugin, PortPlugin } from './ports.directive'
import { NodesDirective, NodeDirective, NodesPlugin, NodePlugin } from './nodes.directive'


export const properties: string[] = ['addInfo', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectors', 'constraints', 'contextMenuSettings', 'dataSourceSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'width', 'animationComplete', 'click', 'collectionChange', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'expandStateChange', 'historyChange', 'mouseEnter', 'mouseLeave', 'mouseOver', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit'];
export const modelProps: string[] = [];

/**
 * Represents vue Diagram Component
 * ```html
 * <ejs-diagram></ejs-diagram>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class DiagramComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-layers":"e-layer","e-connectors":{"e-connector":{"e-connector-annotations":"e-connector-annotation"}},"e-nodes":{"e-node":{"e-node-annotations":"e-node-annotation","e-node-ports":"e-node-port"}}};
    public tagNameMapper: Object = {"e-connector-annotations":"e-annotations","e-node-annotations":"e-annotations","e-node-ports":"e-ports"};
    
    constructor() {
        super();
        this.ej2Instances = new Diagram({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public add(obj: Object | Object, group?: boolean): Object | Object {
        return this.ej2Instances.add(obj, group);
    }

    public addConstraints(constraintsType: number, constraintsValue: number): number {
        return this.ej2Instances.addConstraints(constraintsType, constraintsValue);
    }

    public addHistoryEntry(entry: Object): void {
        return this.ej2Instances.addHistoryEntry(entry);
    }

    public addLabels(obj: Object | Object, labels: Object[] | Object[] | Object[]): void {
        return this.ej2Instances.addLabels(obj, labels);
    }

    public addLanes(node: Object, lane: Object[], index?: number): void {
        return this.ej2Instances.addLanes(node, lane, index);
    }

    public addLayer(layer: Object, layerObject?: Object[]): void {
        return this.ej2Instances.addLayer(layer, layerObject);
    }

    public addNodeToLane(node: Object, swimLane: string, lane: string): void {
        return this.ej2Instances.addNodeToLane(node, swimLane, lane);
    }

    public addPhases(node: Object, phases: Object[]): void {
        return this.ej2Instances.addPhases(node, phases);
    }

    public addPorts(obj: Object, ports: Object[]): void {
        return this.ej2Instances.addPorts(obj, ports);
    }

    public addProcess(process: Object, parentId: string): void {
        return this.ej2Instances.addProcess(process, parentId);
    }

    public addTextAnnotation(annotation: Object, node: Object): void {
        return this.ej2Instances.addTextAnnotation(annotation, node);
    }

    public align(option: Object, objects?: undefined[], type?: Object): void {
        return this.ej2Instances.align(option, objects, type);
    }

    public bringIntoView(bound: Object): void {
        return this.ej2Instances.bringIntoView(bound);
    }

    public bringLayerForward(layerName: string): void {
        return this.ej2Instances.bringLayerForward(layerName);
    }

    public bringToCenter(bound: Object): void {
        return this.ej2Instances.bringToCenter(bound);
    }

    public bringToFront(): void {
        return this.ej2Instances.bringToFront();
    }

    public clear(): void {
        return this.ej2Instances.clear();
    }

    public clearHistory(): void {
        return this.ej2Instances.clearHistory();
    }

    public clearSelection(): void {
        return this.ej2Instances.clearSelection();
    }

    public cloneLayer(layerName: string): void {
        return this.ej2Instances.cloneLayer(layerName);
    }

    public copy(): Object {
        return this.ej2Instances.copy();
    }

    public cut(): void {
        return this.ej2Instances.cut();
    }

    public distribute(option: Object, objects?: undefined[]): void {
        return this.ej2Instances.distribute(option, objects);
    }

    public doLayout(): Object {
        return this.ej2Instances.doLayout();
    }

    public drag(obj: Object | Object | Object, tx: number, ty: number): void {
        return this.ej2Instances.drag(obj, tx, ty);
    }

    public dragSourceEnd(obj: Object, tx: number, ty: number): void {
        return this.ej2Instances.dragSourceEnd(obj, tx, ty);
    }

    public dragTargetEnd(obj: Object, tx: number, ty: number): void {
        return this.ej2Instances.dragTargetEnd(obj, tx, ty);
    }

    public endGroupAction(): void {
        return this.ej2Instances.endGroupAction();
    }

    public exportDiagram(options: Object): string | Object {
        return this.ej2Instances.exportDiagram(options);
    }

    public exportImage(image: string, options: Object): void {
        return this.ej2Instances.exportImage(image, options);
    }

    public findElementUnderMouse(obj: Object, position: Object): Object {
        return this.ej2Instances.findElementUnderMouse(obj, position);
    }

    public findObjectUnderMouse(objects: undefined[], action: Object, inAction: boolean): Object {
        return this.ej2Instances.findObjectUnderMouse(objects, action, inAction);
    }

    public findObjectsUnderMouse(position: Object, source?: Object): Object[] {
        return this.ej2Instances.findObjectsUnderMouse(position, source);
    }

    public findTargetObjectUnderMouse(objects: undefined[], action: Object, inAction: boolean, position: Object, source?: Object): Object {
        return this.ej2Instances.findTargetObjectUnderMouse(objects, action, inAction, position, source);
    }

    public fitToPage(options?: Object): void {
        return this.ej2Instances.fitToPage(options);
    }

    public getActiveLayer(): Object {
        return this.ej2Instances.getActiveLayer();
    }

    public getCursor(action: string, active: boolean): string {
        return this.ej2Instances.getCursor(action, active);
    }

    public getDiagramBounds(): Object {
        return this.ej2Instances.getDiagramBounds();
    }

    public getDiagramContent(styleSheets?: Object): string {
        return this.ej2Instances.getDiagramContent(styleSheets);
    }

    public getObject(name: string): Object {
        return this.ej2Instances.getObject(name);
    }

    public getTool(action: string): Object {
        return this.ej2Instances.getTool(action);
    }

    public group(): void {
        return this.ej2Instances.group();
    }

    public hideTooltip(obj: Object | Object): void {
        return this.ej2Instances.hideTooltip(obj);
    }

    public insertData(node?: Object | Object): object {
        return this.ej2Instances.insertData(node);
    }

    public loadDiagram(data: string): Object {
        return this.ej2Instances.loadDiagram(data);
    }

    public moveForward(): void {
        return this.ej2Instances.moveForward();
    }

    public moveObjects(objects: string[], targetLayer?: string): void {
        return this.ej2Instances.moveObjects(objects, targetLayer);
    }

    public moveObjectsUp(node: Object | Object, currentLayer: Object): void {
        return this.ej2Instances.moveObjectsUp(node, currentLayer);
    }

    public nudge(direction: Object, x?: number, y?: number): void {
        return this.ej2Instances.nudge(direction, x, y);
    }

    public pan(horizontalOffset: number, verticalOffset: number, focusedPoint?: Object): void {
        return this.ej2Instances.pan(horizontalOffset, verticalOffset, focusedPoint);
    }

    public paste(obj?: undefined[]): void {
        return this.ej2Instances.paste(obj);
    }

    public print(options: Object): void {
        return this.ej2Instances.print(options);
    }

    public printImage(image: string, options: Object): void {
        return this.ej2Instances.printImage(image, options);
    }

    public redo(): void {
        return this.ej2Instances.redo();
    }

    public remove(obj?: Object | Object): void {
        return this.ej2Instances.remove(obj);
    }

    public removeConstraints(constraintsType: number, constraintsValue: number): number {
        return this.ej2Instances.removeConstraints(constraintsType, constraintsValue);
    }

    public removeData(node?: Object | Object): object {
        return this.ej2Instances.removeData(node);
    }

    public removeLabels(obj: Object | Object, labels: Object[] | Object[]): void {
        return this.ej2Instances.removeLabels(obj, labels);
    }

    public removeLane(node: Object, lane: Object): void {
        return this.ej2Instances.removeLane(node, lane);
    }

    public removeLayer(layerId: string): void {
        return this.ej2Instances.removeLayer(layerId);
    }

    public removePhase(node: Object, phase: Object): void {
        return this.ej2Instances.removePhase(node, phase);
    }

    public removePorts(obj: Object, ports: Object[]): void {
        return this.ej2Instances.removePorts(obj, ports);
    }

    public removeProcess(id: string): void {
        return this.ej2Instances.removeProcess(id);
    }

    public reset(): void {
        return this.ej2Instances.reset();
    }

    public rotate(obj: Object | Object | Object, angle: number, pivot?: Object): boolean {
        return this.ej2Instances.rotate(obj, angle, pivot);
    }

    public sameSize(option: Object, objects?: undefined[]): void {
        return this.ej2Instances.sameSize(option, objects);
    }

    public saveDiagram(): string {
        return this.ej2Instances.saveDiagram();
    }

    public scale(obj: Object | Object | Object, sx: number, sy: number, pivot: Object): boolean {
        return this.ej2Instances.scale(obj, sx, sy, pivot);
    }

    public select(objects: undefined[], multipleSelection?: boolean): void {
        return this.ej2Instances.select(objects, multipleSelection);
    }

    public selectAll(): void {
        return this.ej2Instances.selectAll();
    }

    public sendBackward(): void {
        return this.ej2Instances.sendBackward();
    }

    public sendLayerBackward(layerName: string): void {
        return this.ej2Instances.sendLayerBackward(layerName);
    }

    public sendToBack(): void {
        return this.ej2Instances.sendToBack();
    }

    public setActiveLayer(layerName: string): void {
        return this.ej2Instances.setActiveLayer(layerName);
    }

    public setStackLimit(stackLimit: number): void {
        return this.ej2Instances.setStackLimit(stackLimit);
    }

    public showTooltip(obj: Object | Object): void {
        return this.ej2Instances.showTooltip(obj);
    }

    public startGroupAction(): void {
        return this.ej2Instances.startGroupAction();
    }

    public startTextEdit(node?: Object | Object, id?: string): void {
        return this.ej2Instances.startTextEdit(node, id);
    }

    public unGroup(): void {
        return this.ej2Instances.unGroup();
    }

    public unSelect(obj: Object | Object): void {
        return this.ej2Instances.unSelect(obj);
    }

    public undo(): void {
        return this.ej2Instances.undo();
    }

    public updateData(node?: Object | Object): object {
        return this.ej2Instances.updateData(node);
    }

    public updateViewPort(): void {
        return this.ej2Instances.updateViewPort();
    }

    public zoom(factor: number, focusedPoint?: Object): void {
        return this.ej2Instances.zoom(factor, focusedPoint);
    }

    public zoomTo(options: Object): void {
        return this.ej2Instances.zoomTo(options);
    }
}

export const DiagramPlugin = {
    name: 'ejs-diagram',
    install(Vue: any) {
        Vue.component(DiagramPlugin.name, DiagramComponent);
        Vue.component(LayerPlugin.name, LayerDirective);
        Vue.component(LayersPlugin.name, LayersDirective);
        Vue.component(ConnectorPlugin.name, ConnectorDirective);
        Vue.component(ConnectorsPlugin.name, ConnectorsDirective);
        Vue.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
        Vue.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
        Vue.component(NodePlugin.name, NodeDirective);
        Vue.component(NodesPlugin.name, NodesDirective);
        Vue.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
        Vue.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
        Vue.component(PortPlugin.name, PortDirective);
        Vue.component(PortsPlugin.name, PortsDirective);

    }
}
