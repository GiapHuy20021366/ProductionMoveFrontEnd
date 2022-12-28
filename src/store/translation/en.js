const langOfTruckBtn = {
    login: 'Login',
    system: 'System'
}

const langOfLogin = {
    welcome: 'Welcome',
    userName: 'Username',
    password: 'Password',
    login: 'LOGIN'
}

const langOfSystemTopBar = {
    account: 'Account',
    logout: 'Logout'
}

const langOfSystemHome = {
    home: 'Home'
}

const langOfAccountInfo = {
    account_info: 'Account Infomation',
    name: 'Name',
    userName: 'Username',
    password: 'Password',
    admin: 'Admin',
    factory: 'Factory',
    agency: 'Agency',
    maintain_center: 'Maintenance Center',
    unknown: 'Unknown',
    role: 'Role',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    birth: 'Birthday',
    status: 'Status',
    status_enable: 'Enable',
    status_disable: 'Disable',
}

const langOfLanguageChooser = {
    _NAME_: 'EN',
    language: 'Language',
    vietnamese: 'Vietnamese',
    english: 'English',
}

const langOfSystemNavigator = {
    system: 'GENERAL',
    home: 'Home',
    account: 'Account Info',
    display: 'Display'
}

const langOfAdminNavigator = {
    admin: 'ADMIN',
    manage_accounts: 'Manage Accounts',
    manage_models: 'Manage Models',
    manage_products: 'Manage Products',
}

const langOfFactoryNavigator = {
    factory: 'FACTORY',
    factory_models: 'Manage Models',
    factory_products: 'Manage Products',
}

const langOfAgencyNavigator = {
    agency: 'AGENCY',
    agency_products: 'Manage Products',
}

const langOfMaintenanceNavigator = {
    maintenance: 'MAINTENANCE CENTER',
    maintenance_products: 'Manage Maintained Products'
}

const langOfAdminAddAccount = {
    ...langOfAccountInfo,
    create_success: 'Create Account Successfully!',
    add_new_account: 'Add new account',
    cancel: 'Cancel',
    submit: 'Submit',
}

const langOfAdminAccounts = {
    ...langOfAccountInfo,
    manage_accounts: 'Manage Accounts',
    add_new_account: 'Add new account',
    sumary_re: count => `Total of ${count} ${count <= 1 ? 'account' : 'accounts'}`
}

const langOfAdminModels = {
    manage_models: 'Manage Models',
    name: 'Model Name',
    sign_name: 'Sign Name',
    generation: 'Generation',
    produced_factory: 'Produced Factory',
    birth: 'Launch Date',
    series: 'Series',
    trim: 'Trim',
    length: 'Length (mm)',
    width: 'Width (mm)',
    height: 'Height (mm)',
    body_type: 'Body Type',
    engine_type: 'Engine Type',
    max_speed: 'Max Speed (km/h)',
    acceleration: 'Acceleration',
    city_fuel: 'City Fuel (l/100km)',
    sumary_re: count => `Total of ${count} ${count <= 1 ? 'model' : 'models'}`,
}

const langOfAdminProducts = {
    manage_products: 'Manage Products',
    model: 'Model',
    produced_factory: 'Produced Factory',
    birth: 'Birthday',
    state: 'State',
    location: 'Location',
    sumary_re: count => `Total of ${count} ${count <= 1 ? 'product' : 'products'}`,
    moving_to: (partner) => {
        const prefix = 'Being shipped to '
        switch (partner.role) {
            case 2:
                return prefix + partner.name + ' Factory'
            case 3:
                return prefix + partner.name + ' Agency'
            case 4:
                return prefix + partner.name + ' Maintain Center'
        }
        return 'Unkown'
    },
    staying_at: (name, role) => {
        return name + ' ' + role
    },
    by_customer: (name) => {
        return name + ' Customer'
    },
    factory: 'Factory',
    agency: 'Agency',
    maintain_center: 'Maintain Center',
    customer: 'Customer'
}

const langOfFactoryModels = {
    ...langOfAdminModels,
    add_model_btn: 'Add New Model',
}

const langOfFactoryAddModel = {
    ...langOfAdminModels,
    add_new_model: "Add New Model",
    birth: 'Launch Date',
    length: 'Length',
    width: 'Width',
    height: 'Height',
    max_speed: 'Max Speed',
    city_fuel: 'City Fuel',
    cancel: 'Cancel',
    submit: 'Add',
    add_success: 'Add New Model Successfully!',
}

const langOfFactoryProducts = {
    ...langOfAdminProducts,
    import_products_btn: 'Import Products',
}

const langOfFactoryImportProducts = {
    ...langOfAdminProducts,
    import_products: "Batch Import Products",
    quantity: 'Quantity',
    cancel: 'Cancel',
    submit: 'Import',
}

const langOfAgencyProducts = {
    ...langOfAdminProducts
}

const langOfMaintenanceProducts = {
    ...langOfAdminProducts
}

const langOfModelDisplay = {
    ...langOfAdminModels,
    model_details: 'Model details'
}

const langOfAccountDisplay = {
    ...langOfAccountInfo,
    created_at: 'Created At',
    updated_at: 'Last Update',
    account_details: 'Account Details'
}

const langOfProductDisplay = {
    ...langOfAdminProducts,
    product_details: 'Product Details',
    history: 'History',
    produced_at: factoryName => `Produced at ${factoryName} factory`,
    begin_maintain: agencyName => `Warranty at ${agencyName} agency `,
    export_out: (from, to, roles) => {
        return `Transport from ${from.name} ${roles[from.role].toLowerCase()} to ${to.name} ${roles[to.role].toLowerCase()}`
    },
    purchase_to: customerName => `Product was sold to customer ${customerName}`,
    recall_start: (agency, customer) => {
        return `Agency ${agency?.name} recalls product from customer ${customer?.name}`
    },
    maintain_fail: (maintainCenter, factory) => {
        return `Products are transported to factory ${factory?.name} by  ${maintainCenter?.name} warranty center due to detecting errors during warranty`
    },
    maintain_moving: (sender, reciever, isFromAgency) => {
        if (isFromAgency) {
            return `Agency ${sender?.name} transport product to ${reciever?.name} warranty center for warranty`
        }
        return `The product has completed its warranty at the ${sender?.name} and shipped to the dealer  ${reciever?.name}`
    },
    return_customer: (agency, customer) => {
        return `Agency ${agency?.name} return product to customer ${customer?.name} after warranty`
    },
    recall_moving: (sender, reciever, isFromAgency) => {
        if (isFromAgency) {
            return `Agency ${sender?.name} transport product to ${reciever?.name} warranty center to recall`
        }
        return `Warranty center ${sender?.name} transport product to ${reciever?.name} factory to recall`
    }

}

const en = {
    _NAME_: 'EN',
    TruckBtn: langOfTruckBtn,
    Login: langOfLogin,

    SystemTopBar: langOfSystemTopBar,
    SystemHome: langOfSystemHome,
    AccountInfo: langOfAccountInfo,
    LanguageChooser: langOfLanguageChooser,

    SystemNagivator: langOfSystemNavigator,
    AdminNavigator: langOfAdminNavigator,
    FactoryNavigator: langOfFactoryNavigator,
    AgencyNavigator: langOfAgencyNavigator,
    MaintenanceNavigator: langOfMaintenanceNavigator,

    ModelDisplay: langOfModelDisplay,
    AccountDisplay: langOfAccountDisplay,
    ProductDisplay: langOfProductDisplay,

    AdminAddAccount: langOfAdminAddAccount,
    AdminAccounts: langOfAdminAccounts,
    AdminModels: langOfAdminModels,
    AdminProducts: langOfAdminProducts,

    FactoryModels: langOfFactoryModels,
    FactoryAddModel: langOfFactoryAddModel,
    FactoryProducts: langOfFactoryProducts,
    FactoryImportProducts: langOfFactoryImportProducts,
    AgencyProducts: langOfAgencyProducts,
    MaintenanceProducts: langOfMaintenanceProducts,
}

export default en