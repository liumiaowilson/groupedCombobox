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
