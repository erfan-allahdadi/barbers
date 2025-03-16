import SmartBarberField from "@/components/SmartBarberField";

export const SYSTEM_FEATURES = Object.freeze({
  FULLNAME: "FULLNAME",
  AVATAR: "AVATAR",
  ADDRESS: "ADDRESS",
  RATE: "RATE",
  REVIEWS_COUNT: "REVIEWS_COUNT",
  SERVICES: "SERVICES",
});

export const STATUSES = Object.freeze({
  همه: {
    text: "همه",
    value: "all",
    color: "bg-blue-500",
  },
  "فقط فروشگاه": {
    text: "فقط فروشگاه",
    value: "shop",
    color: "bg-green-500",
  },
  "آرایشگران فردی": {
    text: "آرایشگران فردی",
    value: "individual",
    color: "bg-red-500",
  },
});

export const LIST_FIELDS = Object.freeze({
  FULLNAME: {
    name: SYSTEM_FEATURES.FULLNAME,
    title: "نام",
    order: 10,
    component: SmartBarberField,
  },
  AVATAR: {
    name: SYSTEM_FEATURES.AVATAR,
    title: "آواتار",
    order: 20,
    component: SmartBarberField,
  },
  ADDRESS: {
    name: SYSTEM_FEATURES.ADDRESS,
    title: "آدرس",
    order: 30,
    component: SmartBarberField,
  },
  RATE: {
    name: SYSTEM_FEATURES.RATE,
    title: "امتیاز",
    order: 40,
    component: SmartBarberField,
  },
  REVIEWS_COUNT: {
    name: SYSTEM_FEATURES.REVIEWS_COUNT,
    title: "تعداد بازدید",
    order: 50,
    component: SmartBarberField,
  },
  SERVICES: {
    name: SYSTEM_FEATURES.SERVICES,
    title: "خدمات",
    order: 60,
    component: SmartBarberField,
  },
});
