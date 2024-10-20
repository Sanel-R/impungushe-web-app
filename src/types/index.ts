// =====================================================Enums============================================================
export enum PROVINCE 
{
    EASTERN_CAPE,
    FREE_STATE,
    GAUTENG,
    KWAZULU_NATAL,
    LIMPOPO,
    MPUMALANGA,
    NORTHERN_CAPE,
    NORTH_WEST,
    WESTERN_CAPE,
}

export enum BusinessType 
{
    SoleProprietorShip,
    Partnership,
    Corporation,
    LimitedLiabilityCompany,
    Cooperative,
}

export enum NumberOfEmployees 
{
    Small,
    Medium,
    High,
}

export enum Gender 
{
    Female,
    Male,
    Other,
}

export enum EmploymentType 
{
    FullTime,
    PartTime,
    Contract,
}

export enum SalaryRange 
{
    EntryLevel,
    MidLevel,
    SeniorLevel,
    LeadPrincipal,
    ManagerDirector,
    Executive,
}

export enum Status 
{
    Submitted,
    UnderReview,
    Shortlisted,
    InterviewScheduled,
    Interviewed,
    BackgroundCheck,
    OfferExtended,
    OfferAccepted,
    OfferDeclined,
    Rejected,
    Withdrawn,
    Onboarding,
}
// =====================================================Enums============================================================

// =====================================================Instances========================================================
export type Address = 
{
    address_id: number,
    street: string,
    city: string,
    province: PROVINCE, // Enum type.
    postal_code: string,
    country: string,
}

export type Applications = 
{
    application_id: number,
    job_post_id: JobPost, // Foreign key.
    driver_id: Driver, // Foreign key.
    resume_link_url: string,
    cover_letter_url: string,
    status: Status, // Enum type.
    application_date: Date,
}

export type BusinessOwner = 
{
    business_owner_id: number,
    address_id: Address, // Foreign key.
    email_address: string,
    phone_number: string,
    website_url: string,
    user_date_created: Date,
    last_login_time: Date, 
}

export type BusinessUser = 
{
    business_user_id: number,
    business_owner_id: BusinessOwner, // Foreign key.
    business_registration_number: string,
    company_description: string,
    representative_name: string,
    representative_position: string,
    representative_phone_number: string,
    representative_email_address: string,
    year_established: Date,
    business_type: BusinessType, // Enum type.
    annual_revenue: number,
    number_of_employees: NumberOfEmployees, // Enum type.
}

export type Driver = 
{
    driver_id: number,
    address_id: Address, // Foreign key.
    full_name: string,
    surname: string,
    gender: Gender, // Enum type.
    drivers_license: string,
    profile_picture_url: string,
    phone_number: string,
    user_date_created: Date,
    last_login_time: Date,
}

export type ForeignDriver = 
{
    foreign_driver_id: number,
    driver_id: Driver, // Foreign key.
    refugee_identity_document_url: string,
    refugee_identity_number: string,
}

export type LocalDriver = 
{
    local_driver_id: number,
    driver_id: Driver, // Foreign key.
    identity_document_upload_url: string,
    identity_document_number: string,
}

export type Vehicle = 
{
    vehicle_id: number,
    business_owner_id: BusinessOwner, // Foreign key.
    driver_id: Driver,
    vehicle_make: string,
    model: string,
    year: Date,
    license_plate_number: string,
    is_taken: boolean,
}

export type JobPost = 
{
    job_post_id: number,
    business_owner_id: BusinessOwner, // Foreign key.
    job_title: string,
    job_description: string,
    job_requirements: string,
    job_location: string,
    employment_type: EmploymentType, // Enum type.
    salary_range: SalaryRange,
    posting_date: Date,
    application_deadline: Date,
}

export type IndividualUser = 
{
    individual_user_id: number,
    business_owner_id: BusinessOwner, // Foreign key.
    full_name: string,
    surname: string,
    gender: Gender, // Enum type.
    identity_document: string,
}
// =====================================================Instances========================================================

// =====================================================Data transfer object=============================================
export type DriverApplicationsDTO = 
{
    // application table properties.
    resume_link_url: string,
    cover_letter_url: string,
    status: Status,
    application_date: Date,

    // driver property details properties.
    full_name: string,
    surname: string,
    gender: Gender,
    drivers_license: string,
    profile_picture_url: string,
    phone_number: string,
}

export type VehicleOwnerDTO = 
{
    email_address: string,
    phone_number: string,
    website_url: string,
    vehicle_make: string,
    model: string,
    is_taken: boolean,
}
// =====================================================Data transfer object=============================================

// =====================================================Utility expressions==============================================
export const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const passwordRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);

export const urlRegex = new RegExp(
    /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?$)/
);

// =====================================================Utility expressions==============================================