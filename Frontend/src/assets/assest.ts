import BannerLight from './BannerLight.png'
import BannerDark from './BannerDark.png'
import Logo from './Logo.png'
import welcomback from './Welcomeback.png'


export {
  BannerLight,
  BannerDark,
  Logo,
  welcomback
}

import { BriefcaseBusinessIcon, CalendarCheck2, Combine, DollarSign, LayoutDashboard, NotepadText, Settings, Users, UsersRound } from "lucide-react";


export const items = {
  Dashboard: {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
    roles: ["user", "employee", "lead", "hr", "admin"],
  },
  Submissions: {
    title: "Submissions",
    url: "/submissions",
    icon: NotepadText,
    roles: ["user"],
  },
  AllEmployees: {
    title: "All Employees",
    url: "/AllEmployees",
    icon: Users,
    roles: ["lead", "hr", "admin"],
  },
  AllDepartments: {
    title: "All Departments",
    url: "/AllDepartments",
    icon: Combine,
    roles: ["hr", "admin"],
  },
  Attendance: {
    title: "Attendance",
    url: "/Attendance",
    icon: CalendarCheck2,
    roles: ["employee", "lead", "hr", "admin"],
  },
  Payroll: {
    title: "Payroll",
    url: "/Payroll",
    icon: DollarSign,
    roles: ["employee", "lead", "hr", "admin"],
  },
  Tasks: {
    title: "Tasks",
    url: "/Tasks",
    icon: BriefcaseBusinessIcon,
    roles: ["employee", "lead", "hr"],
  },
  CompletedTasks: {
    title: "Completed Tasks",
    url: "/CompletedTasks",
    icon: BriefcaseBusinessIcon,
    roles: ["employee", "lead", "hr"],
  },
  Leaves: {
    title: "Leaves",
    url: "/Leaves",
    icon: NotepadText,
    roles: ["employee", "lead", "hr", "admin"],
  },
  Jobs: {
    title: "Jobs",
    url: "/Jobs",
    icon: BriefcaseBusinessIcon,
    roles: ["hr", "admin", 'user'],
  },
  Candidates: {
    title: "Candidates",
    url: "/Candidates",
    icon: UsersRound,
    roles: ["hr", "admin"],
  },
  Holidays: {
    title: "Holidays",
    url: "/Holidays",
    icon: NotepadText,
    roles: ["employee", "lead", "hr", "admin"],
  },
  Chat: {
    title: "Chat",
    url: "/Chat",
    icon: UsersRound,
    roles: ["hr"],
  },
  Settings: {
    title: "Settings",
    url: "/setting",
    icon: Settings,
    roles: ["user", "employee", "lead", "hr", "admin"],
  },
};



export const CardData = [
  {
    icon: Users, title: "Total Employee", value: "526", updatedAt: "Update: July 16, 2023", percentage: "12%"
  },
  {
    icon: Users, title: "Total Employee", value: "526", updatedAt: "Update: July 16, 2023", percentage: "12%"
  },
  {
    icon: Users, title: "Total Employee", value: "526", updatedAt: "Update: July 16, 2023", percentage: "12%"
  },
  {
    icon: Users, title: "Total Employee", value: "526", updatedAt: "Update: July 16, 2023", percentage: "12%"
  },
]


export const AttendanceListData = [
  {
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Leasie Watson",
    designation: "Team Lead - Design",
    type: "Office",
    time: "09:27 AM",
    status: "On Time",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Darlene Robertson",
    designation: "Web Designer",
    type: "Office",
    time: "10:15 AM",
    status: "Late",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Jacob Jones",
    designation: "Medical Assistant",
    type: "Remote",
    time: "10:24 AM",
    status: "Late",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Kathryn Murphy",
    designation: "Marketing Coordinator",
    type: "Office",
    time: "09:10 AM",
    status: "On Time",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Leslie Alexander",
    designation: "Data Analyst",
    type: "Office",
    time: "09:15 AM",
    status: "On Time",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Ronald Richards",
    designation: "Phyton Developer",
    type: "Remote",
    time: "09:29 AM",
    status: "On Time",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Jenny Wilson",
    designation: "React JS Developer",
    type: "Remote",
    time: "11:30 AM",
    status: "Late",
  },
];

export const allEmployees = [
  {
    name: "Darlene Robertson",
    phone: "345321231",
    department: "Design",
    role: "UI/UX Designer",
    location: "Office",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Floyd Miles",
    phone: "987890345",
    department: "Developement",
    role: "PHP Developer",
    location: "Office",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Cody Fisher",
    phone: "453367122",
    department: "Sales",
    role: "Sales Manager",
    location: "Office",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Dianne Russell",
    phone: "345321231",
    department: "Sales",
    role: "BDM",
    location: "Remote",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Savannah Nguyen",
    phone: "453677881",
    department: "Design",
    role: "Design Lead",
    location: "Office",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Jacob Jones",
    phone: "009918765",
    department: "Developement",
    role: "Python Developer",
    location: "Remote",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Marvin McKinney",
    phone: "238870122",
    department: "Developement",
    role: "Sr. UI Developer",
    location: "Remote",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Brooklyn Simmons",
    phone: "124335111",
    department: "PM",
    role: "Project Manager",
    location: "Office",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Kristin Watson",
    phone: "435540099",
    department: "HR",
    role: "HR Executive",
    location: "Office",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    name: "Kathryn Murphy",
    phone: "009812890",
    department: "Developement",
    role: "React JS Developer",
    location: "Office",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Arlene McCoy",
    phone: "671109345",
    department: "Developement",
    role: "Node JS",
    location: "Office",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Devon Lane",
    phone: "091233412",
    department: "BA",
    role: "Business Analyst",
    location: "Remote",
    type: "Permanent",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];
