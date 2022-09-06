import {supabase} from './supabaseClient'

export const channel = supabase.channel('poem')

channel.on("presence", {event: 'sync'}, () => {console.log("Current logged in users: " + channel.presenceState())})

