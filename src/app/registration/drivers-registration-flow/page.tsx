"use client";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormField, FormItem, FormMessage, FormLabel, FormControl} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Gender, PROVINCE} from "@/types/index";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {phoneRegex, passwordRegex} from "@/types/index";

const GenderEnum = z.enum([Gender.Male.toString(), Gender.Female.toString(), Gender.Other.toString()]);
type GenderEnum = z.infer<typeof GenderEnum>;

const provinceEnum = z.enum([PROVINCE.EASTERN_CAPE.toString(), PROVINCE.FREE_STATE.toString(), PROVINCE.GAUTENG.toString(),
                             PROVINCE.KWAZULU_NATAL.toString(), PROVINCE.LIMPOPO.toString(), PROVINCE.MPUMALANGA.toString(),
                             PROVINCE.NORTHERN_CAPE.toString(), PROVINCE.NORTH_WEST.toString(), PROVINCE.WESTERN_CAPE.toString()
                            ]);
type provinceEnum = z.infer<typeof provinceEnum>;

//  Define some regular expression verification

const formSchema = z.object(
    { 
       // Driver class properties.
       fullName: z.string().min(3, {message: "Full name must be at least 2 characters"}).max(30),
       surname: z.string().min(3, {message: "Surname must be at least 2 characters"}).max(30),
       gender: GenderEnum,

       // Address validations.
       street: z.string().min(5, {message: "Street must be at least 5 characters"}).max(30),
       city: z.string().min(5, {message: "City must be at least 5 characters"}).max(30),
       province: provinceEnum,
       country: z.string().min(5, {message: "Country must be at least 5 characters"}),

       // Add an address object in this section.    
       driversLicense: z.string().min(5, {message: "Drivers License must be at least 5 characters"}).max(30),
       profilePictureUrl: z.string().min(5),
       phoneNumber: z.string().regex(phoneRegex, {message: "Invalid phone provided"}),

       // userDateCreated: z.string().datetime(), --> Initialize implicitily 
       // lastLoginTime: z.string().datetime(), --> Initialize implicitily 

       // Authorizaton email address. 
       emailAddress: z.string().email({message: `Please enter valid email address.`}),    
       password: z.string().regex(passwordRegex, {message: "Invalid password"}),
       passwordConfirm: z.string().regex(passwordRegex, {message: "Invalid password"}),
    }
).refine((data) => {
    return data.password === data.passwordConfirm
}, {
    message: "Passwords do not match",
    path: ["passwordConfirm"]
});

export default function DriverRegistrationFlow()
{
    
    /**
     * Create a const form, and since the useForm is generic, we instintiate this into correct data type.
     */
    const form = useForm<z.infer<typeof formSchema>>(
       { 
            resolver: zodResolver(formSchema),
            defaultValues: {
                emailAddress: "",
                fullName: "",
                surname: "",
                gender: "",
                street: "",
                city: "",
                province: "",
                country: "",
                driversLicense: "",
                profilePictureUrl: "",
                phoneNumber: "", 
                password: "",
                passwordConfirm: "",
            },
       }
    );

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            <section>
                <h1 className="text-center mb-4"> Register as driver</h1>
            </section>
            <main className="flex flex-row justify-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex-col gap-5">
                        {/* General driver information form. */}
                        <div 
                        className="flex flex-row justify-between my-2"
                        >
                            <FormField control={form.control} 
                                name="fullName" 
                                render={
                                    ({field}) => {
                                        return <FormItem>
                                            <FormLabel>
                                                Full Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Full Name" 
                                                    type="text"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }
                            }/>

                            <FormField control={form.control} 
                                name="surname" 
                                render={
                                    ({field}) => {
                                        return <FormItem>
                                            <FormLabel>
                                                Surname
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Surname" 
                                                    type="text"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }
                            }/>
                        </div>

                        <div
                        className="my-2"
                        >
                            <FormField control={form.control}
                                name="gender"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                Gender
                                            </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a gender" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Male"> Male </SelectItem>
                                                    <SelectItem value="Female"> Female </SelectItem>
                                                    <SelectItem value="Other"> Other </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    );
                            }}/>
                        </div>

                        <div
                        className="flex flex-row justify-between my-2"
                        >
                            <FormField control={form.control} 
                                name="driversLicense" 
                                render={
                                    ({field}) => {
                                        return <FormItem>
                                            <FormLabel>
                                                Divers License
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder=" Divers License" 
                                                    type="text"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }
                            }/>

                            <FormField control={form.control} 
                                name="phoneNumber" 
                                render={
                                    ({field}) => {
                                        return <FormItem>
                                            <FormLabel>
                                                Phone Number
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Phone Number" 
                                                    type="text"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }
                            }/>
     
                        </div>

                        <div 
                        className="flex flex-row justify-between my-2"
                        >

                            <FormField control={form.control} 
                                name="street" 
                                render={
                                    ({field}) => {
                                        return <FormItem>
                                            <FormLabel>
                                                Street
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Street" 
                                                    type="text"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }
                            }/>
                            
                            <FormField control={form.control} 
                                name="city" 
                                render={
                                    ({field}) => {
                                        return <FormItem>
                                            <FormLabel>
                                                City
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="City" 
                                                    type="text"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }
                            }/>
                        </div>

                        <div 
                        className="my-2"
                        >
                            <FormField control={form.control}
                                name="province"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>
                                                Province
                                            </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a provice" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="EASTERN_CAPE"> EASTERN CAPE </SelectItem>
                                                    <SelectItem value="FREE_STATE"> FREE STATE </SelectItem>
                                                    <SelectItem value="GAUTENG"> GAUTENG </SelectItem>
                                                    <SelectItem value="KWAZULU_NATAL"> KWAZULU NATAL </SelectItem>
                                                    <SelectItem value="LIMPOPO"> LIMPOPO </SelectItem>
                                                    <SelectItem value="MPUMALANGA"> MPUMALANGA </SelectItem>
                                                    <SelectItem value="NORTHERN_CAPE"> NORTHERN CAPE </SelectItem>
                                                    <SelectItem value="NORTH_WEST"> NORTH WEST </SelectItem>
                                                    <SelectItem value="WESTERN_CAPE"> WESTERN CAPE </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    );
                            }}/>
                        </div>

                        <div className="my-2">
                            <FormField control={form.control} 
                                name="country" 
                                render={
                                    ({field}) => {
                                        return <FormItem>
                                            <FormLabel>
                                                Country
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Country" 
                                                    type="text"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }
                            }/>
                        </div>
                        {/* Address validation */}
                        {/* General driver information form. */}


                        {/* Some login validation - look into extracting this out */}
                        <div
                        className="my-2"
                        >
                            <FormField control={form.control} 
                                name="emailAddress" 
                                render={
                                    ({field}) => {
                                        return <FormItem>
                                            <FormLabel>
                                                Email Address
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Email Address" 
                                                    type="email"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }
                            }/>
                        </div>

                        <div
                        className="my-2"
                        >
                            <FormField control={form.control} 
                                    name="password" 
                                    render={
                                        ({field}) => {
                                            return <FormItem>
                                                <FormLabel>
                                                    Password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="Password" 
                                                        type="password"
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        }
                            }/>
                        </div>

                        <div
                        className="my-2"
                        >
                            <FormField control={form.control} 
                                    name="passwordConfirm" 
                                    render={
                                        ({field}) => {
                                            return <FormItem>
                                                <FormLabel>
                                                    Password confirm
                                                </FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="Password confirm" 
                                                        type="password"
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        }
                            }/>
                        </div>

                        <div 
                        className="my-2"
                        >
                            <Button type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </main>
        </div>
    )
}