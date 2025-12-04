# SchoolBell - Automated School Bell & Announcement System

A comprehensive, modern web-based school automation system for managing bell schedules, announcements, student calls, and Islamic prayer times with AI-powered voice generation.

![GitHub Pages](https://github.com/Harun-Tech28/SAR-SCHOOL-BELL/actions/workflows/deploy.yml/badge.svg)

## 🎯 Overview

SchoolBell is a complete school automation platform designed to streamline daily operations in educational institutions. It combines traditional bell scheduling with modern AI voice technology to deliver professional, multilingual announcements and automated prayer calls.

## ✨ Key Features

### 📅 Smart Timetable Management
- **Flexible Scheduling**: Create bell schedules for specific days or daily recurring events
- **Multiple Bell Types**: Choose from 13 different bell sounds including traditional bells, chimes, and Islamic prayer calls
- **Custom Messages**: Auto-generate or customize voice announcements for each bell
- **Voice Selection**: Pick from multiple AI voices (OpenAI, Azure, ElevenLabs) for different occasions
- **Real-time Preview**: Test bell sounds and voice combinations before scheduling

### 🔔 Bell System Features

**🇬🇭 NEW: Authentic Ghanaian School Bells!** 🎉
- **Ghana Hand Bell**: Traditional manual ring - CLANG-CLANG-CLANG (6 rings)
- **Ghana Assembly Bell**: Long continuous ringing for assembly (15 rings)
- **Ghana Break Bell**: Quick burst for break time (4 rings)
- **Authentic Sound**: Realistic metallic CLANG with human-like timing
- **Cultural Heritage**: Preserves traditional Ghanaian school bell culture

**Natural School Bell Sounds:**
- **Classic Hand Bell**: Bright, high-pitched traditional teacher's bell
- **Brass School Bell**: Deep, resonant authoritative tone
- **Vintage Bell**: Warm 1950s-60s nostalgic sound
- **Mechanical Bell**: Rapid continuous ringing
- **Recess Bell**: Cheerful triple ring for break time
- **Fire Alarm Bell**: Urgent emergency bell

**Other Bell Types:**
- Traditional school bells
- Electronic bells
- Westminster chimes
- Double/Triple ring patterns
- Long ring bells
- Soft chimes
- Announcement tones
- Emergency alerts
- Dismissal bells
- Islamic prayer bells (Adhan, Islamic chimes)

📖 **See [GHANA_SCHOOL_BELLS_GUIDE.md](GHANA_SCHOOL_BELLS_GUIDE.md) for Ghanaian bells**
📖 **See [BELL_SOUNDS_GUIDE.md](BELL_SOUNDS_GUIDE.md) for all bell sounds**

### 🎙️ AI-Powered Voice Announcements
- **Multiple Voice Providers**: OpenAI TTS, Azure Cognitive Services, ElevenLabs
- **Voice Options**: Professional, authoritative, friendly, and Islamic voices
- **Multilingual Support**: English, Hausa, Twi, Arabic
- **Smart Recommendations**: System suggests appropriate voices for different bell types
- **High-Quality Audio**: Professional-grade voice synthesis
- **Audio Caching**: Efficient caching system for faster playback

### 🕌 Islamic Prayer Integration
- **Automated Azan Calls**: Schedule and play Islamic call to prayer
- **Five Daily Prayers**: Fajr, Dhuhr, Asr, Maghrib, Isha
- **Customizable Times**: Set prayer times according to your location
- **Islamic Voice**: Dedicated authentic Islamic voice for prayer calls
- **Prayer Scheduler**: Automatic daily prayer time management

### 👨‍🎓 Student Management
- **Student Database**: Comprehensive student information management
- **Class Organization**: Organize students by classes (JHS 1-3, custom classes)
- **Quick Search**: Fast student lookup by name
- **Student Calling**: Call individual students to the office with voice announcements

### 📢 Announcement System
- **Public Announcements**: Broadcast messages to the entire school
- **Custom Messages**: Create tailored announcements for any occasion
- **Voice Variety**: Choose different voices for different types of announcements
- **Scheduled Announcements**: Plan announcements in advance

### 📊 Dashboard & Monitoring
- **System Overview**: Real-time status of all system components
- **Next Event Display**: See upcoming timetable events and prayer times
- **Statistics**: Track active timetables, students, and connected devices
- **System Status**: Monitor TTS engine, schedulers, and database connectivity
- **Activity Logs**: Comprehensive logging and reporting

### 📱 Mobile-Responsive Design
- **Full-Screen Mobile Menu**: Clean grid layout showing all pages clearly
- **Touch-Optimized**: Large touch targets for easy mobile navigation
- **Responsive Dashboard**: Adapts beautifully to any screen size
- **Mobile-First**: Designed for both desktop and mobile devices

### 🔌 Device Management
- **Multi-Device Support**: Connect and manage multiple speaker systems
- **Device Status**: Monitor online/offline status of connected devices
- **Centralized Control**: Manage all devices from one dashboard

## 🛠️ Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Modern, responsive styling
- **Shadcn/ui**: Beautiful, accessible UI components
- **Zustand**: Lightweight state management

### Voice & Audio
- **OpenAI TTS**: High-quality text-to-speech
- **Azure Cognitive Services**: Enterprise-grade voice synthesis
- **ElevenLabs**: Premium AI voice generation
- **Web Audio API**: Browser-based audio playback
- **Audio Caching**: Efficient audio file management

### Features
- **Real-time Scheduling**: Minute-by-minute event checking
- **Local Storage**: Persistent data storage
- **Responsive Design**: Mobile-first approach
- **Dark Mode Support**: Theme customization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/school-bell-system.git
cd school-bell-system
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📖 Usage Guide

### Setting Up Timetables

1. Navigate to **Timetables** page
2. Click **Add New Bell**
3. Fill in:
   - Bell name (e.g., "Morning Assembly")
   - Day (specific day or "Daily")
   - Time (24-hour format)
   - Bell type (choose from 13 options)
   - Voice (AI voice for announcement)
   - Custom message (optional)
4. Click **Save Bell**

### Configuring Prayer Times

1. Go to **Settings** page
2. Enable **Azan (Islamic Call to Prayer)**
3. Set times for five daily prayers:
   - Fajr (Dawn)
   - Dhuhr (Noon)
   - Asr (Afternoon)
   - Maghrib (Sunset)
   - Isha (Night)
4. Click **Save Settings**

### Adding Students

1. Navigate to **Students** page
2. Click **Add Student**
3. Enter student details:
   - First name
   - Last name
   - Class (select from list or custom)
4. Click **Add Student**

### Calling a Student

1. Go to **Call Student** page
2. Search for the student
3. Select the student
4. Choose voice and language
5. Click **Call Student**

## 🎨 Customization

### Voice Configuration

Edit `lib/ai-voice-config.ts` to configure voice providers:

```typescript
export const AI_VOICE_CONFIG = {
  provider: 'openai', // 'openai', 'azure', or 'elevenlabs'
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: 'tts-1-hd'
  }
}
```

### Bell Sounds

Add custom bell sounds in `lib/bell-sounds.ts`:

```typescript
export const BELL_SOUNDS = {
  'custom-bell': {
    name: 'Custom Bell',
    frequency: 800,
    duration: 2000
  }
}
```

## 📱 Mobile Features

- **Full-screen mobile menu** with grid layout
- **Responsive dashboard** with optimized spacing
- **Touch-friendly** buttons and controls
- **Mobile header** with hamburger menu
- **Adaptive layouts** for all screen sizes

## 🔐 Security Features

- Client-side data storage
- No external data transmission (except AI voice APIs)
- Secure API key management
- Rate limiting for API calls

## 🌍 Multilingual Support

Supported languages:
- English
- Hausa
- Twi
- Arabic

## 📊 System Requirements

### Minimum Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for AI voice generation)
- 2GB RAM
- 100MB storage space

### Recommended
- Chrome/Edge browser (best audio support)
- Stable internet connection
- 4GB RAM
- 500MB storage space

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Harun Tech**
- GitHub: [@Harun-Tech28](https://github.com/Harun-Tech28)

## 🙏 Acknowledgments

- OpenAI for TTS technology
- Shadcn for UI components
- Vercel for hosting platform
- Next.js team for the amazing framework

## 📞 Support

For support, email support@schoolbell.com or open an issue on GitHub.

## 🗺️ Roadmap

- [ ] SMS notifications for parents
- [ ] Email integration
- [ ] Mobile app (iOS/Android)
- [ ] Multi-school support
- [ ] Advanced analytics
- [ ] Cloud synchronization
- [ ] Offline mode
- [ ] Custom bell sound uploads
- [ ] Video announcements
- [ ] Integration with school management systems

## 📸 Screenshots

### Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Timetable Management
![Timetables](docs/screenshots/timetables.png)

### Mobile View
![Mobile Menu](docs/screenshots/mobile-menu.png)

---

**Made with ❤️ for educational institutions worldwide**
