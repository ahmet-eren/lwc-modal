# LWC Modal

This lightning web component is created to display content inside SLDS modal.

https://www.lightningdesignsystem.com/components/modals/

![Alt text](/Modal.gif?raw=true "Title")

## Playground Live Demo

https://developer.salesforce.com/docs/component-library/tools/playground/O7Jrx2mVJ/19/edit

## Installation

#### Unmanaged Package
(replace the domain)

`https://YOUR_DOMAIN.lightning.force.com/packaging/installPackage.apexp?p0=04t3h000000id1v`

## Usage
#### Basic
```html
<c-modal>
    <!-- Modal Content Goes Here-->
</c-modal>
``` 

#### With Title
```html
<c-modal title="modal title">
    <!-- Modal Content Goes Here-->
</c-modal>
``` 

#### Hidden Header
```html
<c-modal hide-header>
    <!-- Modal Content Goes Here-->
</c-modal>
``` 

#### Hidden Footer
```html
<c-modal hide-footer>
    <!-- Modal Content Goes Here -->
</c-modal>
``` 

#### Hidden Footer And Header
```html
<c-modal hide-header hide-footer>
    <!-- Modal Content Goes Here -->
</c-modal>
``` 

#### Custom Footer And Header
```html
<c-modal custom-header custom-footer>
    <span slot="header">
        <!-- Custom Header Goes Here -->
    </span>
    <span slot="content">
        <!-- Modal Content Goes Here -->
    </span>
    <span slot="footer">
        <!-- Custom Footer Goes Here -->
    </span>
</c-modal>
``` 

#### Custom Size
```html
<c-modal size="small">
    <!-- Modal Content Goes Here -->
</c-modal>
```

#### Renamed Buttons
```html
<c-modal cancel-label="Back" submit-label="Next">
    <!-- Modal Content Goes Here -->
</c-modal>
```

#### Handling Modal Events
```html
<c-modal oncancel={onModalClose} onsubmit={onModalSubmission}>
    <!-- Modal Content Goes Here -->
</c-modal>
```
## Reference
#### @api

```
String title
String size = small, medium, large

String cancel-label
String submit-label

Boolean hide-header
Boolean custom-header

Boolean hide-footer
Boolean custom-footer

Event onsubmit
Event oncancel

```
