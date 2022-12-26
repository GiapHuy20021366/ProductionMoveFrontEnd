const langOfTruckBtn = {
    login: 'Đăng nhập',
    system: 'Hệ thống'
}

const langOfLogin = {
    welcome: 'Chào mừng',
    userName: 'Tài khoản',
    password: 'Mật khẩu',
    login: 'ĐĂNG NHẬP'
}

const langOfHomeSystem = {
    home: 'Nhà'
}

const langOfAccount = {
    name: 'Tên',
    userName: 'Tài khoản',
    password: 'Mật khẩu',
    admin: 'Quản trị viên',
    dealer: 'Đại lý',
    factory: 'Nhà máy',
    maintain_center: 'TTBH',
    role: 'Vai trò',
    email: 'Email',
    phone: 'Điện thoại',
    address: 'Địa chỉ',
    birth: 'Ngày sinh',
    status: 'Trạng thái',
    status_enable: 'Kích hoạt',
    status_disable: 'Vô hiệu',
}

const langOfAdminAccounts = {
    ...langOfAccount,
    accounts: 'Các tài khoản người dùng',
    add_new_account: 'Thêm tài khoản mới',
    sumary_re: count => `Tổng số ${count} tài khoản`
}

const langOfAccountCreater = {
    ...langOfAccount,
    create_success: 'Tạo Tài Khoản Mới Thành Công',
    add_account: 'Thêm tài khoản',

}

const langOfSystemTopBar = {
    account: 'Tài khoản',
    logout: 'Đăng xuất'
}

const langOfLanguageChooser = {
    _NAME_: 'VI',
    language: 'Ngôn ngữ',
    vietnamese: 'Tiếng Việt',
    english: 'Tiếng Anh',
}

const langOfAdminNavigator = {
    admin: 'Quản trị viên',
    manage_accounts: 'Quản lý tài khoản',
    manage_models: 'Quản lý dòng sản phẩm',
    manage_products: 'Quản lý sản phẩm'
}

const langOfSystemNavigator = {
    home: 'Nhà',
    account: 'Tài khoản',
    display: 'Hiển thị'
}

const langOfAdminModels = {
    name: 'Name',
    sign_name: 'Sign Name',
    generation: 'Generation',
    produced_factory: 'Produced Factory',
    birth: 'Birthday',
    series: 'Series',
    trim: 'Trim',
    length: 'Length',
    width: 'Width',
    height: 'Height',
    body_type: 'Body Type',
    engine_type: 'Engine Type',
    max_speed: 'Max Speed',
    acceleration: 'Acceleration',
    city_fuel: 'City Fuel'
}

const vi = {
    _NAME_: 'VI',
    TruckBtn: langOfTruckBtn,
    Login: langOfLogin,
    Account: langOfAccount,
    HomeSystem: langOfHomeSystem,
    AdminAccounts: langOfAdminAccounts,
    AccountCreater: langOfAccountCreater,
    SystemTopBar: langOfSystemTopBar,
    LanguageChooser: langOfLanguageChooser,
    AdminNavigator: langOfAdminNavigator,
    SystemNagivator: langOfSystemNavigator,
    AdminModels: langOfAdminModels
}
export default vi