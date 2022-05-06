# GroupedCombobox
GroupedCombobox is a most neat and clean implementation for [lightning grouped combobox](https://www.lightningdesignsystem.com/components/combobox/#Grouped-options).

## Get Started
GroupedCombobox is fairly easy to use. The codebase contains one lwc file for grouped combobox and another aura component for testing purpose. To get started, checkout out this repo and import groupedCombobox lwc component.

Here is the sample code to use this lwc component in aura component:
```xml
<aura:component implements="lightning:isUrlAddressable" access="global">
    <aura:attribute name="items" type="Object"/>

    <aura:handler name="init" value="{! this }" action="{! c.doInit }" />

    <div class="panel">
        <c:groupedCombobox
            name="groupedCombobox"
            label="Grouped Combobox"
            options="{! v.items }"
        >
        </c:groupedCombobox>
    </div>
</aura:component>
```

And the data source is simple:
```javascript
({
    doInit: function(component, event, helper) {
        const items = [
            {
                label: 'Group 1',
                items: [
                    {
                        label: 'Option 1',
                        value: 'option1',
                    },
                    {
                        label: 'Option 2',
                        value: 'option2',
                    },
                ],
            },
            {
                label: 'Group 2',
                items: [
                    {
                        label: 'Option 3',
                        value: 'option3',
                    },
                    {
                        label: 'Option 4',
                        value: 'option4',
                    },
                ],
            },
        ];

        component.set('v.items', items);
    },
})
```

Here is the screen snapshot:
![GroupedCombobox](/docs/groupedCombobox.png "GroupedCombobox")

## Pros and Cons

### Pros
This implementation extends the standard lightning combobox and expose the builtin support for grouped combobox. Therefore, all OOTB features of the lightning combobox will be inherited.

### Cons
This implementation relies on the knowledge of the lightning combobox base class, so in case lightning combobox base class internal implementation changes, this grouped combobox will also have to be modified accordingly.
