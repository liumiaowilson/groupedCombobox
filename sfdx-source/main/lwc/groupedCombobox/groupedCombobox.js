import { LightningElement, api } from 'lwc';
import LightningCombobox from 'lightning/combobox';

export default class GroupedCombobox extends LightningCombobox {
    markOptionSelectedFromValue(value) {
        if(this._items) {
            const selectedItem = this._items.flatMap(item => {
                if(item.items) {
                    return item.items;
                }
                else {
                    return [item];
                }
            }).find(item => item.value === value);

            if(this._selectedItem) {
                this._selectedItem.iconName = undefined;
                this._selectedItem.highlight = false;
            }

            this._selectedItem = selectedItem;

            if(selectedItem) {
                selectedItem.iconName = 'utility:check';
                this._selectedItem.highlight = true;
            }

            this._items = this._items.slice();
        }
    }

    getOptionLabelByValue(value) {
        const foundOption = this.options.flatMap(option => {
            if(option.items) {
                return option.items;
            }
            else {
                return [option];
            }
        }).find(option => option.value === value);

        if(foundOption) {
            return foundOption.label;
        }

        return '';
    }

    convertOption(option) {
        const item = {
            type: 'option-inline',
            text: option.label,
            highlight: this.value === option.value,
            value: option.value,
        };

        if(option.items) {
            item.label = option.label;
            item.items = option.items.map(i => this.convertOption(i));
        }

        return item;
    }

    generateItems(options) {
        return options.map(option => {
            return this.convertOption(option);
        });
    }
}
