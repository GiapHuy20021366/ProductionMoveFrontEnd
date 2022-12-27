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
    manage_accounts: 'Quản lý các tài khoản',
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
    name: 'Tên',
    sign_name: 'Dòng',
    generation: 'Thế hệ',
    produced_factory: 'Nhà máy sản xuất',
    birth: 'Ngày sản xuất',
    series: 'Series',
    trim: 'Trim',
    length: 'Chiều dài',
    width: 'Chiều rộng',
    height: 'Chiều cao',
    body_type: 'Loại thân xe',
    engine_type: 'Loại động cơ',
    max_speed: 'Tối độ tối đa',
    acceleration: 'Gia tốc',
    city_fuel: 'Tiêu thụ nhiên liệu',
    sumary_re: count => `Tổng số ${count} dòng sản phẩm`,
    manage_models: 'Quản lý các dòng sản phẩm'
}

const langOfAdminProducts = {
    model: 'Dòng sản phẩm',
    manage_products: 'Quản lý các sản phẩm',
    produced_factory: 'Nhà máy sản xuất',
    birth: 'Ngày sản xuất',
    location: 'Vị trí',
    sumary_re: count => `Tổng số ${count} sản phẩm`,
}

const langOfModelDisplay = {
    ...langOfAdminModels,
    model_details: 'Thông tin dòng sản phẩm'
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
    AdminModels: langOfAdminModels,
    AdminProducts: langOfAdminProducts,
    ModelDisplay: langOfModelDisplay
}
export default vi