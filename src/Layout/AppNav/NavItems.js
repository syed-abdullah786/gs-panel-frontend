export const MainNav = [
    {
        icon: 'pe-7s-home',
        label: 'Dashboard',
        to: '#/dashboard',
    },
    {
        icon: 'lnr-users',
        label: 'Team',
        to: '#/team',
    },
    {
        icon: 'lnr-layers',
        label: 'Tasks',
        content: [
            {
                label: 'Add New Task',
                to: '#/add-new-task',
            },
            {
                label: 'Active Tasks',
                to: '#/active-tasks',
            },
            {
                label: 'Upcoming Tasks',
                to: '#/upcoming-tasks',

            },
            {
                label: 'Previous Tasks',
                to: '#/previous-tasks',
            }
        ],
    },
];
export const AccountNav = [
        {
            icon: 'pe-7s-user',
            label: 'Profile',
            to: '#/profile',
        },
        {
            icon: 'pe-7s-back',
            label: 'Logout',
            to: '#/forms/validation',
        }]

        export const ToolboxNav = [
            {
                icon: 'pe-7s-user',
                label: 'Employees',
                to: '#/employee',
            },
            {
                icon: 'lnr-users',
                label: 'Teams',
                to: '#/forms/validation',
            }]


export const ComponentsNav = [
    {
        icon: 'pe-7s-diamond',
        label: 'Elements',
        content: [
            {
                label: 'Standard Buttons',
                to: '#/elements/buttons-standard',
            },
            {
                label: 'Dropdowns',
                to: '#/elements/dropdowns',

            },
            {
                label: 'Icons',
                to: '#/elements/icons',
            },
            {
                label: 'Badges',
                to: '#/elements/badges-labels',
            },
            {
                label: 'Cards',
                to: '#/elements/cards',
            },
            {
                label: 'List Groups',
                to: '#/elements/list-group',
            },
            {
                label: 'Navigation Menus',
                to: '#/elements/navigation',
            },
            {
                label: 'Utilities',
                to: '#/elements/utilities',
            },
        ],
    },
    {
        icon: 'pe-7s-car',
        label: 'Components',
        content: [
            {
                label: 'Tabs',
                to: '#/components/tabs',
            },
            {
                label: 'Notifications',
                to: '#/components/notifications',
            },
            {
                label: 'Modals',
                to: '#/components/modals',
            },
            {
                label: 'Progress Bar',
                to: '#/components/progress-bar',
            },
            {
                label: 'Tooltips & Popovers',
                to: '#/components/tooltips-popovers',
            },
            {
                label: 'Carousel',
                to: '#/components/carousel',
            },
            {
                label: 'Maps',
                to: '#/components/maps',
            },
        ],
    },
    {
        icon: 'pe-7s-display2',
        label: 'Regular Tables',
        to: '#/tables/regular-tables',
    },
];
export const FormsNav = [
    {
        icon: 'pe-7s-light',
        label: 'Controls',
        to: '#/forms/controls',
    },
    {
        icon: 'pe-7s-eyedropper',
        label: 'Layouts',
        to: '#/forms/layouts',
    },
    {
        icon: 'pe-7s-pendrive',
        label: 'Validation',
        to: '#/forms/validation',
    },
];
export const WidgetsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Dashboard Boxes',
        to: '#/widgets/dashboard-boxes',
    },
];
export const ChartsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'ChartJS',
        to: '#/charts/chartjs',
    },
];