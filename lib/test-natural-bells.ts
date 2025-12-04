/**
 * Test file for new natural school bell sounds
 * Run this to hear all the new authentic bell sounds
 */

import { playBellSound, type BellType } from './bell-sounds'

/**
 * Test all natural bell sounds
 */
export const testAllNaturalBells = async (): Promise<void> => {
    console.log('🔔 Testing Natural School Bell Sounds')
    console.log('=====================================\n')

    const naturalBells: Array<{ type: BellType; name: string; description: string }> = [
        {
            type: 'classic-hand-bell',
            name: 'Classic Hand Bell',
            description: 'Traditional teacher\'s hand bell - bright, high-pitched metallic ring'
        },
        {
            type: 'brass-school-bell',
            name: 'Brass School Bell',
            description: 'Large brass bell with deep resonance - authoritative and clear'
        },
        {
            type: 'vintage-bell',
            name: 'Vintage Bell',
            description: 'Old-fashioned 1950s-60s bell - warm, slightly muffled tone'
        },
        {
            type: 'mechanical-bell',
            name: 'Mechanical Bell',
            description: 'Motorized electric bell - rapid continuous ringing'
        },
        {
            type: 'recess-bell',
            name: 'Recess Bell',
            description: 'Cheerful bell for break time - happy and energetic'
        },
        {
            type: 'fire-alarm-bell',
            name: 'Fire Alarm Bell',
            description: 'Urgent continuous ringing for emergencies'
        }
    ]

    for (const bell of naturalBells) {
        console.log(`\n🔔 Playing: ${bell.name}`)
        console.log(`   ${bell.description}`)
        
        playBellSound(bell.type)
        
        // Wait for bell to finish before playing next
        await new Promise(resolve => setTimeout(resolve, 5000))
    }

    console.log('\n✅ All natural bell sounds tested!')
}

/**
 * Test a specific bell sound
 */
export const testBell = (bellType: BellType): void => {
    console.log(`🔔 Testing: ${bellType}`)
    playBellSound(bellType)
}

/**
 * Compare traditional vs natural bells
 */
export const compareBells = async (): Promise<void> => {
    console.log('🔔 Comparing Traditional vs Natural Bells\n')

    console.log('1️⃣ Traditional Synthesized Bell:')
    playBellSound('bell')
    await new Promise(resolve => setTimeout(resolve, 3000))

    console.log('\n2️⃣ Classic Hand Bell (Natural):')
    playBellSound('classic-hand-bell')
    await new Promise(resolve => setTimeout(resolve, 4000))

    console.log('\n3️⃣ Brass School Bell (Natural):')
    playBellSound('brass-school-bell')
    await new Promise(resolve => setTimeout(resolve, 5000))

    console.log('\n✅ Comparison complete!')
}

// Export for use in browser console
if (typeof window !== 'undefined') {
    (window as any).testNaturalBells = testAllNaturalBells;
    (window as any).testBell = testBell;
    (window as any).compareBells = compareBells;
    
    console.log('🔔 Natural Bell Test Functions Available:')
    console.log('   - testNaturalBells() - Test all natural bells')
    console.log('   - testBell(type) - Test specific bell')
    console.log('   - compareBells() - Compare traditional vs natural')
}
