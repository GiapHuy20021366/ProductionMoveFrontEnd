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

const langOfSystemTopBar = {
    account: 'Tài khoản',
    logout: 'Đăng xuất'
}

const langOfSystemHome = {
    home: 'Trang chủ'
}

const langOfAccountInfo = {
    account_info: 'Thông tin tài khoản',
    name: 'Tên',
    userName: 'Tài khoản',
    password: 'Mật khẩu',
    admin: 'Quản trị viên',
    factory: 'Nhà máy',
    agency: 'Đại lý',
    maintain_center: 'Trung tâm bảo hành',
    unknown: 'Chưa xác định',
    role: 'Vai trò',
    email: 'Email',
    phone: 'Điện thoại',
    address: 'Địa chỉ',
    birth: 'Ngày sinh',
    status: 'Trạng thái',
    status_enable: 'Kích hoạt',
    status_disable: 'Vô hiệu',
}

const langOfLanguageChooser = {
    _NAME_: 'VI',
    language: 'Ngôn ngữ',
    vietnamese: 'Tiếng Việt',
    english: 'Tiếng Anh',
}

const langOfSystemNavigator = {
    system: 'Tổng quan',
    home: 'Trang chủ',
    account: 'Tài khoản',
    display: 'Hiển thị'
}

const langOfAdminNavigator = {
    admin: 'Quản trị viên',
    manage_accounts: 'Quản lý tài khoản',
    manage_models: 'Quản lý dòng sản phẩm',
    manage_products: 'Quản lý sản phẩm'
}

const langOfFactoryNavigator = {
    factory: 'Cơ sở sản xuất',
    factory_products: 'Quản lý sản phẩm',
}

const langOfAgencyNavigator = {
    agency: 'Đại lý phân phối',
    agency_products: 'Quản lý sản phẩm',
}

const langOfMaintenanceNavigator = {
    maintenance: 'Trung tâm bảo hành',
    maintenance_products: 'Quản lý sản phẩm bảo hành'
}

const langOfModelDisplay = {
    ...langOfAdminModels,
    model_details: 'Thông tin dòng sản phẩm'
}

const langOfAdminAddAccount = {
    ...langOfAccountInfo,
    create_success: 'Tạo Tài Khoản Mới Thành Công',
    add_new_account: 'Thêm tài khoản mới',
    cancel: 'Hủy',
    submit: 'Nộp',
}

const langOfAdminAccounts = {
    ...langOfAccountInfo,
    manage_accounts: 'Quản lý các tài khoản',
    add_new_account: 'Thêm tài khoản mới',
    sumary_re: count => `Tổng số ${count} tài khoản`
}

const langOfAdminModels = {
    name: 'Tên dòng sản phẩm',
    sign_name: 'Mã dòng sản phẩm',
    generation: 'Thế hệ',
    produced_factory: 'Nhà máy sản xuất',
    birth: 'Ngày ra mắt',
    series: 'Phiên bản',
    trim: 'Trim',
    length: 'Chiều dài',
    width: 'Chiều rộng',
    height: 'Chiều cao',
    body_type: 'Loại thân xe',
    engine_type: 'Loại động cơ',
    max_speed: 'Tốc độ tối đa',
    acceleration: 'Gia tốc',
    city_fuel: 'Nhiên liệu tiêu thụ',
    sumary_re: count => `Tổng số ${count} dòng sản phẩm`,
    manage_models: 'Quản lý các dòng sản phẩm'
}

const langOfAdminProducts = {
    manage_products: 'Quản lý các sản phẩm',
    model: 'Tên & Mã dòng sản phẩm',
    produced_factory: 'Nhà máy sản xuất',
    birth: 'Ngày sản xuất',
    location: 'Vị trí',
    sumary_re: count => `Tổng số ${count} sản phẩm`,
}

const langOfFactoryProducts = {
    ...langOfAdminProducts
}

const vi = {
    _NAME_: 'VI',
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
    
    AdminAddAccount: langOfAdminAddAccount,
    AdminAccounts: langOfAdminAccounts,
    AdminModels: langOfAdminModels,
    AdminProducts: langOfAdminProducts,
    
    FactoryProducts: langOfFactoryProducts,
}

export default vi