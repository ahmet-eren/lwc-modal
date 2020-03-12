import { LightningElement, track, api } from 'lwc';

export default class Modal extends LightningElement {
    @api title = '';
    @api cancelLabel = 'Cancel';
    @api submitLabel = 'OK';
    @api size = 'medium';
    @api hideCancelButton = false;
    @api hideSubmitButton = false;
    @api customHeader = false;
    @api hideHeader = false;
    @api customFooter = false;
    @api hideFooter = false;

    get backDropClass(){
        return 'slds-backdrop slds-backdrop_open ';
    }
    get sizeClass(){
        return 'slds-modal slds-fade-in-open ' + (this.size ? 'slds-modal_' + this.size : '');
    }
    get displayHeader(){
        return !this.hideHeader && !this.customHeader;
    }
    get displayFooter(){
        return !this.hideFooter && !this.customFooter;
    }
    handleCancelButtonClick(event){
        this.dispatchEvent(new CustomEvent('cancel'));
    }
    handleSubmitButtonClick(){
        this.dispatchEvent(new CustomEvent('submit'));
    }
}
