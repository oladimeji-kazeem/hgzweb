
import React from 'react';
import { ServiceTime, Sermon } from './types';

export const COLORS = {
  primary: '#003399', // RCCG Royal Blue
  secondary: '#CC0000', // RCCG Bright Red
  accent: '#FFD700', // Gold
  success: '#10B981', // Emerald for some variety
  white: '#FFFFFF',
  dark: '#0F172A'
};

export const CHURCH_INFO = {
  address: "12-16, Holy Ghost Zone Street, Off Ijede Road, Cele Bus Stop, Ikorodu, Lagos, Nigeria",
  phone: "+234 802 312 9445",
  email: "info@rccghgz.org",
  pastor: "Pastor-in-Charge",
  themeYear: "Year of Divine Manifestation",
  themeMonth: "Our Month of Supernatural Breakthrough"
};

export const BELIEFS = [
  { title: "The Bible", content: "We believe that the entire Bible is the inspired Word of God and that men were moved by the Spirit of God to write the very words of Scripture." },
  { title: "The Trinity", content: "We believe that God exists in three persons: the Father, the Son and the Holy Spirit." },
  { title: "Salvation", content: "We believe that the blood of Jesus Christ, shed on the cross, provides the sole basis for the forgiveness of sin." },
  { title: "The Holy Spirit", content: "We believe that the Holy Spirit is the third person of the Trinity who convicts the world of sin." }
];

export const MINISTRIES = [
  { name: "Men of Valor", icon: "fa-male", desc: "Building men to be spiritual leaders in their homes and society." },
  { name: "Women of Grace", icon: "fa-female", desc: "Empowering women to fulfill their God-given destiny through prayer and fellowship." },
  { name: "Youth Excellence", icon: "fa-rocket", desc: "Nurturing the next generation to be giants in spirit and excellence." },
  { name: "Children of Glory", icon: "fa-child", desc: "Teaching our little ones the ways of the Lord with love and fun." }
];

export const SERVICE_TIMES: ServiceTime[] = [
  {
    day: 'Sunday',
    title: 'Glorious Worship Service',
    time: '7:30 AM (1st) | 9:30 AM (2nd)',
    description: 'Join us for a supernatural encounter in His presence through worship and the word.',
    icon: 'fa-church'
  },
  {
    day: 'Tuesday',
    title: 'Digging Deep',
    time: '6:00 PM - 8:00 PM',
    description: 'Systematic study of the scriptures to grow deeper in our walk with Christ.',
    icon: 'fa-book-open'
  },
  {
    day: 'Thursday',
    title: 'Faith Clinic',
    time: '6:00 PM - 8:00 PM',
    description: 'A dedicated time for prayer, intercession, and spiritual breakthrough.',
    icon: 'fa-fire'
  }
];

export const FEATURED_SERMONS: Sermon[] = [
  {
    id: '1',
    title: 'Possessing Your Possession',
    speaker: 'Pastor in Charge',
    date: 'Jan 14, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1510563339316-43b9c025078a?auto=format&fit=crop&q=80&w=800',
    category: 'Breakthrough'
  },
  {
    id: '2',
    title: 'The Secret of Kingdom Wealth',
    speaker: 'Ministering Pastor',
    date: 'Feb 04, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800',
    category: 'Prosperity'
  },
  {
    id: '3',
    title: 'Divine Acceleration',
    speaker: 'Guest Minister',
    date: 'Feb 18, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    category: 'Testimony'
  }
];
