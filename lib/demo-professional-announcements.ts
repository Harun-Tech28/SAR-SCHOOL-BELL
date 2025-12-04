import { playTaskAudio } from "./combined-audio"

/**
 * Demonstration of Professional School Announcements
 * Shows the exact format: "Attention all students, it is time for [TIMETABLE NAME]"
 */

export const demoClosingAnnouncement = async () => {
  console.log("🏫 DEMONSTRATION: School Closing Announcement")
  console.log("=" .repeat(50))
  console.log("🔔 Step 1: Playing dismissal bell tone...")
  console.log("🗣️ Step 2: Playing voice announcement...")
  console.log("📢 Message: 'Attention all students, it is time for School Closing. Please collect your belongings and proceed to the exit.'")
  console.log("=" .repeat(50))
  
  await playTaskAudio("School Closing", "dismissal", "dismissal-bell", {
    repeatCount: 1
  })
  
  console.log("✅ Demonstration completed!")
}

export const demoAllAnnouncementTypes = async () => {
  console.log("🎓 DEMONSTRATION: All Professional Announcement Types")
  console.log("=" .repeat(60))
  console.log("Format: 'Attention all students, it is time for [TIMETABLE NAME]'")
  console.log("=" .repeat(60))
  
  const demonstrations = [
    {
      name: "Mathematics Period",
      type: "class",
      bell: "bell",
      description: "Class announcement with school bell"
    },
    {
      name: "Morning Break", 
      type: "break",
      bell: "chime",
      description: "Break announcement with soft chime"
    },
    {
      name: "Lunch Time",
      type: "lunch", 
      bell: "chime",
      description: "Lunch announcement with chime"
    },
    {
      name: "School Assembly",
      type: "assembly",
      bell: "announcement", 
      description: "Assembly announcement with attention tone"
    },
    {
      name: "School Closing",
      type: "dismissal",
      bell: "dismissal-bell",
      description: "Dismissal announcement with dismissal bell"
    }
  ]
  
  for (const demo of demonstrations) {
    console.log(`\n🔔 ${demo.name}`)
    console.log(`   Type: ${demo.type}`)
    console.log(`   Bell: ${demo.bell}`)
    console.log(`   Description: ${demo.description}`)
    console.log(`   Playing: Tone first → Voice announcement`)
    
    await playTaskAudio(demo.name, demo.type, demo.bell as any, {
      repeatCount: 1
    })
    
    // Wait between demonstrations
    await new Promise(resolve => setTimeout(resolve, 7000))
  }
  
  console.log("\n✅ All demonstrations completed!")
  console.log("🎯 Each announcement follows the professional format with tone first, then voice.")
}

export const showAnnouncementFormat = () => {
  console.log("📋 PROFESSIONAL ANNOUNCEMENT FORMAT")
  console.log("=" .repeat(50))
  console.log("🔔 STEP 1: Play appropriate tone (bell/chime/announcement)")
  console.log("⏱️ STEP 2: Wait for tone to finish")
  console.log("🗣️ STEP 3: Play voice announcement")
  console.log("")
  console.log("📢 VOICE FORMAT:")
  console.log("   Classes: 'Attention all students, it is time for [NAME]. Please proceed to your classrooms.'")
  console.log("   Breaks: 'Attention all students, it is time for [NAME]. You may now leave your classrooms.'")
  console.log("   Lunch: 'Attention all students, it is time for [NAME]. Please proceed to the dining hall.'")
  console.log("   Assembly: 'Attention all students and staff, it is time for [NAME]. Please proceed to the assembly hall.'")
  console.log("   Dismissal: 'Attention all students, it is time for [NAME]. Please collect your belongings and proceed to the exit.'")
  console.log("   Emergency: 'Emergency alert. [NAME]. All students and staff must follow emergency procedures immediately.'")
  console.log("=" .repeat(50))
}

// Make functions available globally for console testing
if (typeof window !== "undefined") {
  (window as any).demoClosingAnnouncement = demoClosingAnnouncement;
  (window as any).demoAllAnnouncementTypes = demoAllAnnouncementTypes;
  (window as any).showAnnouncementFormat = showAnnouncementFormat;
}