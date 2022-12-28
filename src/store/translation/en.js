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
    create_success: 'Create Account Successful!',
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
    name: 'Name',
    sign_name: 'Sign Name',
    generation: 'Generation',
    produced_factory: 'Produced Factory',
    birth: 'Launch Date',
    series: 'Series',
    trim: 'Trim',
    length: 'Length',
    width: 'Width',
    height: 'Height',
    body_type: 'Body Type',
    engine_type: 'Engine Type',
    max_speed: 'Max Speed',
    acceleration: 'Acceleration',
    city_fuel: 'City Fuel',
    sumary_re: count => `Total of ${count} ${count <= 1 ? 'model' : 'models'}`,
    manage_models: 'Manage Models'
}

const langOfAdminProducts = {
    model: 'Model',
    produced_factory: 'Produced Factory',
    manage_products: 'Manage Products',
    birth: 'Birth',
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

const langOfFactoryProducts = {
    ...langOfAdminProducts
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
    product_details: 'Product Details'
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

    FactoryProducts: langOfFactoryProducts,
    AgencyProducts: langOfAgencyProducts,
    MaintenanceProducts: langOfMaintenanceProducts,
}

export default en