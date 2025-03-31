//=============================================================================
// VisuStella MZ - Enemy Encounter Effects
// VisuMZ_4_EncounterEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_EncounterEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EncounterEffects = VisuMZ.EncounterEffects || {};
VisuMZ.EncounterEffects.version = 1.10;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.10] [EncounterEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Encounter_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Both random encounters and on-screen encounters are pretty limited in what
 * they're able to do in RPG Maker MZ. This plugin expands their functionality
 * with some unique effects added through this plugin.
 * 
 * Both types of encounters can benefit from having more control over the
 * occurrence of Preemptive and Surprise Attacks. These can be enforced through
 * Plugin Commands and set up in a queue.
 * 
 * On-screen encounters can utilize alert functions that will cause events to
 * chase the player (or flee from them) once the player steps within their
 * visible detection range.
 * 
 * On-screen encounters can also utilize new functions added for use with the
 * Conditional Branch to determine which direction the player has approached
 * the on-screen encounter event from.
 * 
 * Random encounters can utilize repel and lure effects to nullify any random
 * encounters for a certain amount of steps or to increase their rate of
 * occurrence.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Take control of battle advantage. Enforce preemptive attacks, surprise
 *   attacks, neither, or chance it.
 * * Battle advantages can be set up in a queue for more interesting gameplay.
 * * Events can be given alert functionality to chase the player if the player
 *   steps within their vision range.
 * * Use Terrain Tags and Regions to set up tiles that will block detection
 *   range through line of sight usage.
 * * Events can trigger themselves upon touching followers instead of just
 *   players.
 * * Events can lock themselves in the direction they're facing when interacted
 *   with to make it easier to apply side attack and back attack effects.
 * * Random encounters can be bypassed through repel effects.
 * * Increase the rate of random encounters with lure effects.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Battle Advantage
 * 
 * Upon starting a battle with forced advantages, any calculations made by
 * other means will be overwritten in favor of the declared forced advantage.
 *
 * ---
 * 
 * Game_Player.encounterProgressValue
 * 
 * This function has been overwritten to allow for more flexibility over the
 * multipliers and effects applied through various effects and to allow for
 * the repel and lure effects to work as best as they can.
 * 
 * ---
 * 
 * Game_Event.updateSelfMovement
 * 
 * This function's original code will be ignored when the event is set to chase
 * or flee from the player after being alerted. After the alert and return
 * periods are over, self movement will resume as normal.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Battle Advantage-Related Tags ===
 * 
 * ---
 *
 * <Preemptive>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   the preemptive advantage (in favor of the player party).
 *
 * ---
 *
 * <Surprise>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   the surprise advantage (in favor of the enemy party).
 *
 * ---
 *
 * <No Advantage>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   no advantage at all.
 *
 * ---
 *
 * <Chance>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   a chance for preemptive, surprise, or no advantages (calculated normally).
 *
 * ---
 * 
 * === Event Encounter-Related Notetags ===
 * 
 * ---
 *
 * <Follower Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - This event can trigger by touching a follower instead of only the player.
 *
 * ---
 *
 * <Encounter Direction Lock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Normally when an event triggers without Direction Fix, it will face the
 *   player character. This tag prevents the event from facing the player, but
 *   still allows the event to freely turn directions.
 * - This is best used in conjunction with the Conditional Branch scripts.
 *
 * ---
 * 
 * === Alert-Related Notetags ===
 * 
 * ---
 *
 * <Alert>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This will use the default settings unless changed by other tags.
 *
 * ---
 *
 * <Alert Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Changes the event's alert detection range to 'x' tiles.
 * - Replace 'x' with a number value representing the number of tiles to use
 *   for its detection range.
 *
 * ---
 *
 * <Alert Dash>
 * <Alert Walk>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - If alerted, the event will dash/walk instead of whatever is set as a
 *   default setting within the Plugin Parameters.
 *
 * ---
 *
 * <Alert Time: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This determines the amount of time in frames for the event to chase the
 *   player continuously while the player is outside of the detection range.
 * - Replace 'x' with a number value representing the number of frames for the
 *   event to keep chasing the player with.
 * - If the player steps back into the alert detection range, the timer will be
 *   reset.
 *
 * ---
 * 
 * <Alert FoV Angle: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the Field of View angle to 'x' for the event.
 * - Replace 'x' with a number value representing the degrees of for the field
 *   of view angle used by the event to detect players.
 * - The angle will always be centered to the event's line of sight.
 * 
 * ---
 * 
 * <Alert Show FoV>
 * <Alert Hide FoV>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Shows/hides the field of view for the event.
 * - If an event's field of view is hidden, it can still chase players when
 *   entering the event's range.
 * 
 * ---
 *
 * <Alert Response: chase>
 * <Alert Response: rush>
 * <Alert Response: flee>
 * <Alert Response: random>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This determines how an alerted event will react.
 * - Chase: Use path finding to find a route to the player
 * - Rush: Rush directly at the player
 * - Flee: Run away from the player
 * - Random: Move in random directions
 *
 * ---
 *
 * <Response Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when initially alerted and responding.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 *
 * <Alert React Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - When initially alerted, there is a small window of waiting before starting
 *   the chase.
 * - Replace 'x' with a number representing the number of frames for the
 *   initial reaction delay.
 *
 * ---
 *
 * <Alert Common Event: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Runs a Common Event when initially alerted.
 * - Replace 'x' with a number representing the ID of the Common Event to run.
 * - Use 0 to run no Common Events.
 *
 * ---
 *
 * <Alert Sound Name: name>
 * <Alert Sound Volume: x>
 * <Alert Sound Pitch: y>
 * <Alert Sound Pan: z>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Play this sound effect when the event is initially alerted.
 * - Replace 'name' with the filename of the sound effect found in /audio/se/
 *   to play. Do NOT include the file extension.
 * - Replace 'x' with a number representing the volume of the sound effect.
 * - Replace 'y' with a number representing the pitch of the sound effect.
 * - Replace 'z' with a number representing the pan of the sound effect.
 *
 * ---
 *
 * <Return Position>
 * <Stay Position>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Decide if the event will return back to its initial position after an
 *   alert chase is over.
 * - Or if it will stay where it currently is.
 *
 * ---
 *
 * <Return Time: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This is the amount of time spent (in frames) after an alert chase is over
 *   but returning back to the event's original position.
 * - Replace 'x' with a number representing the number of frames for the
 *   duration between idling and returning.
 *
 * ---
 *
 * <Idle Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when beginning the idle phase after an
 *   alert chase is over but before returning back to the original position.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 *
 * <Returning Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when the event starts returning back to
 *   the event's original position.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 * 
 * === Alert Vision Blocking-Related Notetags ===
 * 
 * ---
 *
 * <Block Vision Tag: x>
 * <Block Vision Tags: x, x, x>
 *
 * - Used for: Tileset and Map Notetags
 * - When using a specific tileset or on a specific map, tiles marked with the
 *   terrain tag 'x' will obscure the line of sight from the event to the
 *   player character.
 * - Replace 'x' with a number value representing the terrain tag used.
 * - This does NOT change the Field of View Alert Detection Range graphic.
 *
 * ---
 *
 * <Block Vision Region: x>
 * <Block Vision Regions: x, x, x>
 *
 * - Used for: Tileset and Map Notetags
 * - When using a specific tileset or on a specific map, tiles marked with the
 *   region ID 'x' will obscure the line of sight from the event to the
 *   player character.
 * - Replace 'x' with a number value representing the region ID used.
 * - This does NOT change the Field of View Alert Detection Range graphic.
 *
 * ---
 *
 * ============================================================================
 * Conditional Branch Usage
 * ============================================================================
 * 
 * For those wanting to use Conditional Branch event commands with this plugin
 * the following functions into the "Script" input fields of the respective
 * event commands.
 * 
 * === Conditional Branch Script Functions ===
 * 
 * These are newly added JavaScript functions that return a true/false value.
 * The functions are best used with the Conditional Branch script input field.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerFront()
 * 
 * - Returns true if the event is facing the player's front.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerBack()
 * 
 * - Returns true if the event is facing the player's back.
 * - Best used with a Surprise attack.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerSide()
 * 
 * - Returns true if the event is facing the player's side.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventFront()
 * 
 * - Returns true if the player is facing the event's front.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventBack()
 * 
 * - Returns true if the player is facing the event's back.
 * - Best used with a Preemptive attack.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventSide()
 * 
 * - Returns true if the player is facing the event's side.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Advantage Plugin Commands ===
 * 
 * ---
 *
 * Advantage: Add to Queue
 * - Add (at the end) to the existing advantage queue the following encounter
 *  advantages for the upcoming battles.
 *
 *   Queue:
 *   - Add to the queue the following advantage options for the
 *     upcoming battles.
 *     - Preemptive (Player gains turn advantage)
 *     - Surprise (Enemies gain turn advantage)
 *     - No Advantage (Neither party has advantage)
 *     - Chance (Random encounter advantage chance)
 *
 * ---
 *
 * Advantage: Set Queue
 * - Declare the exact advantage queue for the upcoming battles.
 *
 *   Queue:
 *   - Add to the queue the following advantage options for the
 *     upcoming battles.
 *     - Preemptive (Player gains turn advantage)
 *     - Surprise (Enemies gain turn advantage)
 *     - No Advantage (Neither party has advantage)
 *     - Chance (Random encounter advantage chance)
 *
 * ---
 *
 * Advantage: Reset Queue
 * - Resets the advantage queue for battles.
 *
 * ---
 * 
 * === Alert Plugin Commands ===
 * 
 * ---
 *
 * Alert: Stealth Mode
 * - Changes the stealth mode setting for the player.
 *
 *   Stealth Mode:
 *   - If Stealth Mode is on, bypass unnoticed alerts.
 *   - Already alerted events will stay alert.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Advantage Settings
 * ============================================================================
 *
 * Advantage common event settings related to enemy encounters.
 *
 * ---
 *
 * Settings
 * 
 *   Preemptive Event:
 *   - Run this Common Event upon a preemptive advantage.
 *   - Use 0 to run no Common Events.
 * 
 *   Surprise Event:
 *   - Run this Common Event upon a surprise advantage.
 *   - Use 0 to run no Common Events.
 * 
 *   No Advantage Event:
 *   - Run this Common Event when no advantage is given.
 *   - Use 0 to run no Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Alert Settings
 * ============================================================================
 *
 * These are settings for alerting events. Used mainly for events chasing the
 * player.
 * 
 * How alert detection works is when the player steps with an event (who has
 * an alert notetag or comment tag), the event will enter alert mode. At the
 * very start, a response balloon will play along with an initialy delay. If
 * there is a common event set, the common event will play immediately.
 * 
 * After the initial delay is over, the event will begin its chasing phase.
 * Although it's called the chasing phase, it can react differently by using
 * path finding to find a way to the player, rushing directly in a straight
 * line at the player, running away from the player, or moving about randomly.
 * 
 * If the player stays out of the event's alert detection range for a specific
 * amount of time, the event will enter its idle phase. An idle balloon will
 * play and the event will wait a short duration.
 * 
 * After this short duration is over, the event will return back to its
 * original position (if desired). Upon starting its return to its original
 * position, it will play the returning balloon.
 * 
 * During the idle and return phases, if the player steps in range of the
 * event's alert range, it will begin the chase all over again.
 *
 * ---
 *
 * Alert
 * 
 *   Detection Range:
 *   - Default tile range for event to detect the player in.
 * 
 *   Alert Dash:
 *   - Alerted events use dashing speed.
 * 
 *   Alert Time:
 *   - Number of frames the alerted event will attempt to chase the player.
 *
 * ---
 *
 * Field of View
 * 
 *   Angle Range:
 *   - The angle range used to determine the event's field of view.
 * 
 *   Show Range:
 *   - Show the field of view of events?
 * 
 *   Color 1:
 *   Color 2:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Response
 * 
 *   Response Type:
 *   - What kind of default response behavior do you want?
 *     - Chase: Use path finding to find a route to the player
 *     - Rush: Rush directly at the player
 *     - Flee: Run away from the player
 *     - Random: Move in random directions
 * 
 *   Response Balloon:
 *   - What kind of balloon should the event play when detecting the player?
 * 
 *   Common Event:
 *   - Run this Common Event when the player is detected.
 *   - Use 0 for no Common Event.
 * 
 *   Reaction Delay:
 *   - Number of frames for the event to stand still before beginning
 *     the chase.
 *
 * ---
 *
 * Sound
 * 
 *   Filename:
 *   - Filename of the sound effect played when alerted.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Return
 * 
 *   Return Home:
 *   - After finishing a chase, return back to the home position?
 * 
 *   Idle Wait:
 *   - Number of frames to wait before returning home.
 * 
 *   Idle Balloon:
 *   - Play this balloon when an event is about to return.
 * 
 *   Returning Balloon:
 *   - Play this balloon when an event begins returning.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Encounter Multipliers
 * ============================================================================
 *
 * Encounter multiplier settings regarding enemy encounters.
 *
 * ---
 *
 * Bush Multiplier
 * 
 *   Parameter:
 *   - Multiplier for how fast encounters occur by when the player is walking
 *     through bushes.
 * 
 *   Boat Multiplier:
 *   - Multiplier for how fast encounters occur by when the player is
 *     traveling via boat.
 * 
 *   Ship Multiplier:
 *   - Multiplier for how fast encounters occur by when the player is
 *     traveling via ship.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Repel/Lure Settings
 * ============================================================================
 *
 * Repel/Lure settings regarding enemy encounters.
 *
 * ---
 *
 * Settings
 * 
 *   Repel Variable:
 *   - Select a variable where if the value is above 0, it will
 *     repel encounters.
 *   - Each step reduces variable value by 1.
 * 
 *   Wear Off Common Event:
 *   - Run this Common Event when Repel reaches 0.
 *   - Use 0 to run no Common Events.
 *
 * ---
 *
 * Settings
 * 
 *   Lure Variable:
 *   - Select a variable where if the value is above 0, it will
 *     lure encounters.
 *   - Each step reduces variable value by 1.
 * 
 *   Wear Off Common Event:
 *   - Run this Common Event when Lure reaches 0.
 *   - Use 0 to run no Common Events.
 * 
 *   Lure Multiplier:
 *   - Multiplier for how fast encounters occur by when the lure
 *     effect is active.
 * 
 *   Lure Increase:
 *   - Flat increase for how fast encounters occur by when the lure
 *     effect is active.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.10: January 20, 2023
 * * Feature Update!
 * ** When events with <Alert> and <Follower Trigger> are chasing the player,
 *    events will no longer factor in the position of followers while determing
 *    a path and go around them. Instead, they will charge at the player as if
 *    the followers aren't there. Update made by Arisu.
 * 
 * Version 1.09: September 15, 2022
 * * Compatibility Update!
 * ** This plugin now works better with the Events and Movement Core's stop
 *    event movement plugin parameters and commands. Update made by Arisu.
 * 
 * Version 1.08: February 17, 2022
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.07: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: August 20, 2021
 * * Compatibility Update!
 * ** Better compatibility with Event and Movement Core's spawn functions.
 *    Update made by Arisu.
 * 
 * Version 1.05: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for features that were left out by accident.
 * *** Notetag/Comment Tag: <Alert FoV Angle: x>
 * *** Notetag/Comment Tag: <Alert Hide FoV>
 * *** Notetag/Comment Tag: <Alert Show FoV>
 * 
 * Version 1.04: December 11, 2020
 * * Bug Fixes!
 * ** Without the Events and Movement Core, events returning home after a
 *    failed alert chase will no longer crash the game.
 *    Fix by Yanfly and Shiro.
 * 
 * Version 1.03: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: November 29, 2020
 * * Feature Update!
 * ** Initialization of the encounter effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu and Shaz.
 * 
 * Version 1.01: November 22, 2020
 * * Bug Fixes!
 * ** Certain notetags will no longer cause crashes. Fix made by Yanfly.
 * ** Erased events will have their alert sprite removed, too. Fix made by
 *    Yanfly.
 *
 * Version 1.00: December 11, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageAddQueue
 * @text Advantage: Add to Queue
 * @desc Add (at the end) to the existing advantage queue the following
 * encounter advantages for the upcoming battles.
 *
 * @arg Queue:arraystr
 * @text Queue
 * @type select[]
 * @option Preemptive (Player gains turn advantage)
 * @value preemptive
 * @option Surprise (Enemies gain turn advantage)
 * @value surprise
 * @option No Advantage (Neither party has advantage)
 * @value no advantage
 * @option Chance (Random encounter advantage chance)
 * @value chance
 * @desc Add to the queue the following advantage options for
 * the upcoming battles.
 * @default ["preemptive"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageSetQueue
 * @text Advantage: Set Queue
 * @desc Declare the exact advantage queue for the upcoming battles.
 *
 * @arg Queue:arraystr
 * @text Queue
 * @type select[]
 * @option Preemptive (Player gains turn advantage)
 * @value preemptive
 * @option Surprise (Enemies gain turn advantage)
 * @value surprise
 * @option No Advantage (Neither party has advantage)
 * @value no advantage
 * @option Chance (Random encounter advantage chance)
 * @value chance
 * @desc Change the queue to the following advantage options for
 * the upcoming battles.
 * @default ["preemptive"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageResetQueue
 * @text Advantage: Reset Queue
 * @desc Resets the advantage queue for battles.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AlertStealthMode
 * @text Alert: Stealth Mode
 * @desc Changes the stealth mode setting for the player.
 *
 * @arg StealthMode:eval
 * @text Stealth Mode
 * @type boolean
 * @on Stealth On
 * @off No Steath
 * @desc If Stealth Mode is on, bypass unnoticed alerts.
 * Already alerted events will stay alert.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EncounterEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Advantage:struct
 * @text Advantage Settings
 * @type struct<Advantage>
 * @desc Advantage common event settings related to enemy encounters.
 * @default {"Preemptive:num":"0","Surprise:num":"0","Normal:num":"0"}
 *
 * @param Alert:struct
 * @text Alert Settings
 * @type struct<Alert>
 * @desc Settings alerting events. Used mainly for events chasing the player.
 * @default {"Alert":"","AlertRange:num":"4","AlertDash:eval":"true","AlertLock:num":"600","FoV":"","FovAngle:num":"120","ShowFoV:eval":"true","FovColor1:str":"rgba(255, 0, 0, 0)","FovColor2:str":"rgba(255, 0, 0, 0.5)","Response":"","ResponseType:str":"chase","ResponseBalloon:str":"Exclamation","CommonEvent:num":"0","ReactDelay:num":"80","Sound":"","SoundName:str":"Attack1","SoundVolume:num":"90","SoundPitch:num":"120","SoundPan:num":"0","Return":"","ReturnHome:eval":"true","ReturnWait:num":"180","ReturnStartBalloon:str":"Silence","ReturnEndBalloon:str":"Frustration"}
 *
 * @param EncounterMultiplier:struct
 * @text Encounter Multipliers
 * @type struct<EncounterMultiplier>
 * @desc Encounter multiplier settings regarding enemy encounters.
 * @default {"BushMultiplier:num":"2.00","BoatMultiplier:num":"1.00","ShipMultiplier:num":"0.50"}
 *
 * @param RepelLure:struct
 * @text Repel/Lure Settings
 * @type struct<RepelLure>
 * @desc Repel/Lure settings regarding enemy encounters.
 * @default {"RepelVariable:num":"31","RepelEvent:num":"6","LureVariable:num":"32","LureEvent:num":"8","LureRate:num":"4.0","LureFlat:num":"1"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Advantage Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Advantage:
 *
 * @param Preemptive:num
 * @text Preemptive Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event upon a preemptive advantage.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param Surprise:num
 * @text Surprise Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event upon a surprise advantage.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param Normal:num
 * @text No Advantage Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event when no advantage is given.
 * Use 0 to run no Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Alert Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Alert:
 *
 * @param Alert
 * 
 * @param AlertRange:num
 * @text Detection Range
 * @parent Alert
 * @type number
 * @min 1
 * @desc Default tile range for event to detect the player in.
 * @default 4
 *
 * @param AlertDash:eval
 * @text Alert Dash
 * @parent Alert
 * @type boolean
 * @on Dash
 * @off Walk
 * @desc Alerted events use dashing speed.
 * @default true
 * 
 * @param AlertLock:num
 * @text Alert Time
 * @parent Alert
 * @type number
 * @min 1
 * @desc Number of frames the alerted event will attempt to chase the player.
 * @default 600
 *
 * @param FoV
 * @text Field of View
 * 
 * @param FovAngle:num
 * @text Angle Range
 * @parent FoV
 * @type number
 * @min 1
 * @max 360
 * @desc The angle range used to determine the event's field of view.
 * @default 120
 *
 * @param ShowFoV:eval
 * @text Show Range
 * @parent FoV
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the field of view of events?
 * @default true
 *
 * @param FovColor1:str
 * @text Color 1
 * @parent FoV
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(255, 0, 0, 0)
 *
 * @param FovColor2:str
 * @text Color 2
 * @parent FoV
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(255, 0, 0, 0.5)
 *
 * @param Response
 *
 * @param ResponseType:str
 * @text Response Type
 * @parent Response
 * @type select
 * @option Chase: Use path finding to find a route to the player
 * @value chase
 * @option Rush: Rush directly at the player
 * @value rush
 * @option Flee: Run away from the player
 * @value flee
 * @option Random: Move in random directions
 * @value random
 * @desc What kind of default response behavior do you want?
 * @default chase
 *
 * @param ResponseBalloon:str
 * @text Response Balloon
 * @parent Response
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc What kind of balloon should the event play when detecting the player?
 * @default Exclamation
 *
 * @param CommonEvent:num
 * @text Common Event
 * @parent Response
 * @type common_event
 * @desc Run this Common Event when the player is detected.
 * Use 0 for no Common Event.
 * @default 0
 * 
 * @param ReactDelay:num
 * @text Reaction Delay
 * @parent Response
 * @type number
 * @min 1
 * @desc Number of frames for the event to stand still before beginning the chase.
 * @default 80
 *
 * @param Sound
 *
 * @param SoundName:str
 * @text Filename
 * @type file
 * @parent Sound
 * @dir audio/se/
 * @desc Filename of the sound effect played when alerted.
 * @default Attack1
 *
 * @param SoundVolume:num
 * @text Volume
 * @type number
 * @parent Sound
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param SoundPitch:num
 * @text Pitch
 * @type number
 * @parent Sound
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param SoundPan:num
 * @text Pan
 * @parent Sound
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Return
 *
 * @param ReturnHome:eval
 * @text Return Home
 * @parent Return
 * @type boolean
 * @on Return
 * @off Stay
 * @desc After finishing a chase, return back to the home position?
 * @default true
 * 
 * @param ReturnWait:num
 * @text Idle Wait
 * @parent Return
 * @type number
 * @min 1
 * @desc Number of frames to wait before returning home.
 * @default 180
 *
 * @param ReturnStartBalloon:str
 * @text Idle Balloon
 * @parent Return
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc Play this balloon when an event is about to return.
 * @default Silence
 *
 * @param ReturnEndBalloon:str
 * @text Returning Balloon
 * @parent Return
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc Play this balloon when an event begins returning.
 * @default Frustration
 *
 */
/* ----------------------------------------------------------------------------
 * Encounter Multipliers Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EncounterMultiplier:
 *
 * @param BushMultiplier:num
 * @text Bush Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is walking through bushes.
 * @default 2.00
 *
 * @param BoatMultiplier:num
 * @text Boat Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is traveling via boat.
 * @default 1.00
 *
 * @param ShipMultiplier:num
 * @text Ship Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is traveling via ship.
 * @default 0.50
 *
 */
/* ----------------------------------------------------------------------------
 * Repel/Lure Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~RepelLure:
 *
 * @param RepelVariable:num
 * @text Repel Variable
 * @parent Repel/Lure
 * @type variable
 * @desc Select a variable where if the value is above 0, it will
 * repel encounters. Each step reduces variable value by 1.
 * @default 0
 *
 * @param RepelEvent:num
 * @text Wear Off Common Event
 * @parent RepelVariable:num
 * @type common_event
 * @desc Run this Common Event when Repel reaches 0.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param LureVariable:num
 * @text Lure Variable
 * @parent Repel/Lure
 * @type variable
 * @desc Select a variable where if the value is above 0, it will
 * lure encounters. Each step reduces variable value by 1.
 * @default 0
 *
 * @param LureEvent:num
 * @text Wear Off Common Event
 * @parent LureVariable:num
 * @type common_event
 * @desc Run this Common Event when Lure reaches 0.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param LureRate:num
 * @text Lure Multiplier
 * @parent LureVariable:num
 * @desc Multiplier for how fast encounters occur by when the
 * lure effect is active.
 * @default 4.0
 *
 * @param LureFlat:num
 * @text Lure Increase
 * @parent LureVariable:num
 * @desc Flat increase for how fast encounters occur by when the
 * lure effect is active.
 * @default 1
 *
 */
//=============================================================================

const _0x16ffc2=_0x39d2;(function(_0x528699,_0x211467){const _0x230650=_0x39d2,_0x21f45a=_0x528699();while(!![]){try{const _0x53cb7b=-parseInt(_0x230650(0x10d))/0x1+-parseInt(_0x230650(0x9d))/0x2+parseInt(_0x230650(0x1f6))/0x3*(parseInt(_0x230650(0x1c7))/0x4)+parseInt(_0x230650(0x14f))/0x5*(parseInt(_0x230650(0x187))/0x6)+parseInt(_0x230650(0xa4))/0x7+-parseInt(_0x230650(0xfc))/0x8+-parseInt(_0x230650(0x109))/0x9*(parseInt(_0x230650(0xd5))/0xa);if(_0x53cb7b===_0x211467)break;else _0x21f45a['push'](_0x21f45a['shift']());}catch(_0x450a2f){_0x21f45a['push'](_0x21f45a['shift']());}}}(_0x25a5,0x9e71c));var label=_0x16ffc2(0x220),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x16ffc2(0xe4)](function(_0x517795){const _0x283baa=_0x16ffc2;return _0x517795['status']&&_0x517795[_0x283baa(0x133)][_0x283baa(0x128)]('['+label+']');})[0x0];VisuMZ[label][_0x16ffc2(0x224)]=VisuMZ[label][_0x16ffc2(0x224)]||{},VisuMZ[_0x16ffc2(0x1f3)]=function(_0x2a06eb,_0x510072){const _0xcfa7c4=_0x16ffc2;for(const _0x5955c2 in _0x510072){if(_0x5955c2[_0xcfa7c4(0x136)](/(.*):(.*)/i)){if(_0xcfa7c4(0x119)===_0xcfa7c4(0x119)){const _0x5a8c08=String(RegExp['$1']),_0x803fed=String(RegExp['$2'])[_0xcfa7c4(0x1b4)]()['trim']();let _0x23e744,_0x3cedf7,_0x1243e4;switch(_0x803fed){case _0xcfa7c4(0xbc):_0x23e744=_0x510072[_0x5955c2]!==''?Number(_0x510072[_0x5955c2]):0x0;break;case _0xcfa7c4(0x1e5):_0x3cedf7=_0x510072[_0x5955c2]!==''?JSON['parse'](_0x510072[_0x5955c2]):[],_0x23e744=_0x3cedf7['map'](_0x1a0006=>Number(_0x1a0006));break;case _0xcfa7c4(0x19c):_0x23e744=_0x510072[_0x5955c2]!==''?eval(_0x510072[_0x5955c2]):null;break;case _0xcfa7c4(0x122):_0x3cedf7=_0x510072[_0x5955c2]!==''?JSON[_0xcfa7c4(0x146)](_0x510072[_0x5955c2]):[],_0x23e744=_0x3cedf7[_0xcfa7c4(0x166)](_0x54d89b=>eval(_0x54d89b));break;case _0xcfa7c4(0x1be):_0x23e744=_0x510072[_0x5955c2]!==''?JSON[_0xcfa7c4(0x146)](_0x510072[_0x5955c2]):'';break;case _0xcfa7c4(0x157):_0x3cedf7=_0x510072[_0x5955c2]!==''?JSON[_0xcfa7c4(0x146)](_0x510072[_0x5955c2]):[],_0x23e744=_0x3cedf7[_0xcfa7c4(0x166)](_0x2a125e=>JSON[_0xcfa7c4(0x146)](_0x2a125e));break;case _0xcfa7c4(0x217):_0x23e744=_0x510072[_0x5955c2]!==''?new Function(JSON['parse'](_0x510072[_0x5955c2])):new Function(_0xcfa7c4(0x168));break;case _0xcfa7c4(0x1e7):_0x3cedf7=_0x510072[_0x5955c2]!==''?JSON[_0xcfa7c4(0x146)](_0x510072[_0x5955c2]):[],_0x23e744=_0x3cedf7['map'](_0x5220c5=>new Function(JSON[_0xcfa7c4(0x146)](_0x5220c5)));break;case _0xcfa7c4(0x1cc):_0x23e744=_0x510072[_0x5955c2]!==''?String(_0x510072[_0x5955c2]):'';break;case'ARRAYSTR':_0x3cedf7=_0x510072[_0x5955c2]!==''?JSON[_0xcfa7c4(0x146)](_0x510072[_0x5955c2]):[],_0x23e744=_0x3cedf7[_0xcfa7c4(0x166)](_0x3c8577=>String(_0x3c8577));break;case _0xcfa7c4(0xd9):_0x1243e4=_0x510072[_0x5955c2]!==''?JSON[_0xcfa7c4(0x146)](_0x510072[_0x5955c2]):{},_0x23e744=VisuMZ[_0xcfa7c4(0x1f3)]({},_0x1243e4);break;case'ARRAYSTRUCT':_0x3cedf7=_0x510072[_0x5955c2]!==''?JSON[_0xcfa7c4(0x146)](_0x510072[_0x5955c2]):[],_0x23e744=_0x3cedf7[_0xcfa7c4(0x166)](_0xfd05fe=>VisuMZ[_0xcfa7c4(0x1f3)]({},JSON[_0xcfa7c4(0x146)](_0xfd05fe)));break;default:continue;}_0x2a06eb[_0x5a8c08]=_0x23e744;}else _0x202206[_0xcfa7c4(0x1e3)]=!![],_0x4acf98[_0xcfa7c4(0x1d3)]=_0x81d561(_0x35862b['$1'])||0x1;}}return _0x2a06eb;},(_0x2377a5=>{const _0x462d99=_0x16ffc2,_0x306ca8=_0x2377a5[_0x462d99(0x18e)];for(const _0x2d4175 of dependencies){if(!Imported[_0x2d4175]){alert(_0x462d99(0x1dd)[_0x462d99(0x191)](_0x306ca8,_0x2d4175)),SceneManager[_0x462d99(0x1bb)]();break;}}const _0x4f9c1f=_0x2377a5[_0x462d99(0x133)];if(_0x4f9c1f[_0x462d99(0x136)](/\[Version[ ](.*?)\]/i)){const _0x2dc0a9=Number(RegExp['$1']);_0x2dc0a9!==VisuMZ[label][_0x462d99(0xc2)]&&(alert(_0x462d99(0x208)[_0x462d99(0x191)](_0x306ca8,_0x2dc0a9)),SceneManager[_0x462d99(0x1bb)]());}if(_0x4f9c1f[_0x462d99(0x136)](/\[Tier[ ](\d+)\]/i)){const _0xcdfcbc=Number(RegExp['$1']);if(_0xcdfcbc<tier)alert(_0x462d99(0x123)[_0x462d99(0x191)](_0x306ca8,_0xcdfcbc,tier)),SceneManager[_0x462d99(0x1bb)]();else{if('PefKp'!==_0x462d99(0x111)){const _0x268247=this['x'],_0x4e5c58=this['y'],_0x5c5286=_0x1cbd0c['x'],_0x3c60b0=_0xc70f2['y'],_0x444b4d=_0x32adf1['pow'](_0x5c5286-_0x268247,0x2),_0x329183=_0x13b715[_0x462d99(0x20e)](_0x3c60b0-_0x4e5c58,0x2);return _0x4423c5['sqrt'](_0x444b4d+_0x329183);}else tier=Math['max'](_0xcdfcbc,tier);}}VisuMZ['ConvertParams'](VisuMZ[label][_0x462d99(0x224)],_0x2377a5[_0x462d99(0x10a)]);})(pluginData),PluginManager[_0x16ffc2(0xcc)](pluginData[_0x16ffc2(0x18e)],_0x16ffc2(0xd1),_0x488068=>{const _0x16ebe8=_0x16ffc2;VisuMZ[_0x16ebe8(0x1f3)](_0x488068,_0x488068);const _0x1f4b57=_0x488068['Queue'];$gameSystem['addForcedAdvantage'](_0x1f4b57);}),PluginManager[_0x16ffc2(0xcc)](pluginData[_0x16ffc2(0x18e)],_0x16ffc2(0xa9),_0x3975e2=>{const _0x150428=_0x16ffc2;VisuMZ[_0x150428(0x1f3)](_0x3975e2,_0x3975e2);const _0x4d49d1=_0x3975e2[_0x150428(0xa5)];$gameSystem[_0x150428(0xe8)](_0x4d49d1);}),PluginManager[_0x16ffc2(0xcc)](pluginData[_0x16ffc2(0x18e)],'AdvantageResetQueue',_0x4350ed=>{const _0x44d42c=_0x16ffc2;VisuMZ[_0x44d42c(0x1f3)](_0x4350ed,_0x4350ed),$gameSystem['setForcedAdvantage']([]);}),PluginManager['registerCommand'](pluginData[_0x16ffc2(0x18e)],_0x16ffc2(0xf2),_0x53316c=>{const _0x3430f0=_0x16ffc2;VisuMZ[_0x3430f0(0x1f3)](_0x53316c,_0x53316c);const _0x2b9777=_0x53316c[_0x3430f0(0x107)];$gamePlayer['setAlertStealthMode'](_0x2b9777);}),VisuMZ[_0x16ffc2(0x220)][_0x16ffc2(0x18f)]={'Preemptive':/<(?:PREEMPTIVE|PRE-EMPTIVE|PRE EMPTIVE)>/i,'Surprise':/<(?:SURPRISE|SURPRISED)>/i,'NoAdvantage':/<NO ADVANTAGE>/i,'Chance':/<CHANCE>/i,'FollowerTrigger':/<(?:FOLLOWER TRIGGER|FOLLOWERTRIGGER)>/i,'TouchDirectionLock':/<(?:ENCOUNTER LOCK|ENCOUNTER DIRECTION LOCK)>/i,'AlertDefault':/<ALERT>/i,'AlertRange':/<ALERT RANGE:[ ](\d+)>/i,'AlertDash':/<ALERT DASH>/i,'AlertWalk':/<ALERT WALK>/i,'AlertLock':/<ALERT TIME:[ ](\d+)>/i,'AlertFovAngle':/<ALERT FOV ANGLE:[ ](\d+)>/i,'AlertShowFov':/<ALERT SHOW FOV>/i,'AlertHideFov':/<ALERT HIDE FOV>/i,'AlertResponse':/<ALERT RESPONSE:[ ](.*)>/i,'AlertBalloon':/<(?:ALERT|RESPONSE) BALLOON:[ ](.*)>/i,'AlertReactDelay':/<ALERT REACT DELAY:[ ](\d+)>/i,'AlertCommonEvent':/<ALERT COMMON EVENT:[ ](\d+)>/i,'AlertSoundName':/<ALERT SOUND NAME:[ ](.*)>/i,'AlertSoundVolume':/<ALERT SOUND VOLUME:[ ](\d+)>/i,'AlertSoundPitch':/<ALERT SOUND PITCH:[ ](\d+)>/i,'AlertSoundPan':/<ALERT SOUND PAN:[ ](.*)>/i,'ReturnPosition':/<RETURN POSITION>/i,'StayPosition':/<STAY POSITION>/i,'ReturnStartBalloon':/<IDLE BALLOON:[ ](.*)>/i,'ReturnEndBalloon':/<RETURNING BALLOON:[ ](.*)>/i,'ReturnWait':/<RETURN TIME:[ ](\d+)>/i,'BlockVisionTag':/<(?:BLOCK|BLOCKED) VISION (?:TAG|TAGS):[ ](.*)>/i,'BlockVisionRegion':/<(?:BLOCK|BLOCKED) VISION (?:REGION|REGIONS):[ ](.*)>/i},VisuMZ[_0x16ffc2(0x220)][_0x16ffc2(0x145)]=BattleManager[_0x16ffc2(0xbd)],BattleManager['startBattle']=function(){const _0x17d4c6=_0x16ffc2;this['checkForcedAdvantage'](),VisuMZ[_0x17d4c6(0x220)]['BattleManager_startBattle'][_0x17d4c6(0x200)](this),this[_0x17d4c6(0x160)]();},BattleManager['checkForcedAdvantage']=function(){const _0x1f015f=_0x16ffc2,_0x50ba2b=$gameSystem[_0x1f015f(0x1ab)]();if(!_0x50ba2b)return;switch(_0x50ba2b[_0x1f015f(0x15c)]()[_0x1f015f(0x117)]()){case _0x1f015f(0xb5):this[_0x1f015f(0xaf)]=!![],this[_0x1f015f(0x180)]=![];break;case _0x1f015f(0x105):this[_0x1f015f(0xaf)]=![],this['_surprise']=!![];break;case'no\x20advantage':this[_0x1f015f(0xaf)]=![],this[_0x1f015f(0x180)]=![];break;case _0x1f015f(0x1fa):VisuMZ[_0x1f015f(0x116)][_0x1f015f(0xf3)][_0x1f015f(0x200)](this);break;}},BattleManager[_0x16ffc2(0x160)]=function(){const _0x1ae639=_0x16ffc2,_0x51d817=VisuMZ[_0x1ae639(0x220)][_0x1ae639(0x224)][_0x1ae639(0x195)];if(!_0x51d817)return;let _0x3340a5=0x0;if(this[_0x1ae639(0xaf)])_0x3340a5=_0x51d817[_0x1ae639(0xdc)]||0x0;else this[_0x1ae639(0x180)]?_0x3340a5=_0x51d817[_0x1ae639(0x1fb)]||0x0:_0x1ae639(0x185)===_0x1ae639(0x185)?_0x3340a5=_0x51d817[_0x1ae639(0x192)]||0x0:(this['_forcedAdvantage']===_0xbb236d&&this[_0x1ae639(0x202)](),this[_0x1ae639(0x171)]=_0x19850f);_0x3340a5>0x0&&$gameTemp['reserveCommonEvent'](_0x3340a5);},VisuMZ['EncounterEffects'][_0x16ffc2(0x155)]=Game_System[_0x16ffc2(0x112)][_0x16ffc2(0xe9)],Game_System[_0x16ffc2(0x112)][_0x16ffc2(0xe9)]=function(){const _0x47194d=_0x16ffc2;VisuMZ[_0x47194d(0x220)][_0x47194d(0x155)][_0x47194d(0x200)](this),this[_0x47194d(0x202)]();},Game_System[_0x16ffc2(0x112)]['initEncounterEffects_ForcedAdvantage']=function(){this['_forcedAdvantage']=[];},Game_System[_0x16ffc2(0x112)]['getForcedAdvantage']=function(){const _0x5d8b25=_0x16ffc2;return this[_0x5d8b25(0x171)]===undefined&&(_0x5d8b25(0x1d1)===_0x5d8b25(0x1d1)?this[_0x5d8b25(0x202)]():(_0x7e41fe[_0x5d8b25(0x220)][_0x5d8b25(0xd4)][_0x5d8b25(0x200)](this),this['initEncounterEffects']())),this['_forcedAdvantage'];},Game_System[_0x16ffc2(0x112)][_0x16ffc2(0x1ab)]=function(){const _0xa59d44=_0x16ffc2;if($gameTroop&&$gameTroop[_0xa59d44(0x11b)]()){if(_0xa59d44(0x1ae)!==_0xa59d44(0x1ae))_0x2de3d5=_0x1bac4e[_0xa59d44(0xdc)]||0x0;else{const _0x508482=VisuMZ[_0xa59d44(0x220)][_0xa59d44(0x18f)],_0x35bf4a=$gameTroop['troop']()[_0xa59d44(0x18e)];if(_0x35bf4a['match'](_0x508482[_0xa59d44(0xdc)]))return'preemptive';else{if(_0x35bf4a[_0xa59d44(0x136)](_0x508482[_0xa59d44(0x1fb)]))return _0xa59d44(0x105);else{if(_0x35bf4a[_0xa59d44(0x136)](_0x508482[_0xa59d44(0x150)])){if(_0xa59d44(0xed)===_0xa59d44(0x21b)){if(this[_0xa59d44(0x138)]())return![];this[_0xa59d44(0x1d9)]=this['_eventAlertChaseCache']||{};if(this[_0xa59d44(0x1d9)][_0xa59d44(0x1c6)]!==_0x492320['x'])return!![];if(this[_0xa59d44(0x1d9)]['playerY']!==_0x22e311['y'])return!![];if(this[_0xa59d44(0x1d9)][_0xa59d44(0x144)]!==this['x'])return!![];if(this[_0xa59d44(0x1d9)]['eventY']!==this['y'])return!![];return![];}else return _0xa59d44(0x9e);}else{if(_0x35bf4a[_0xa59d44(0x136)](_0x508482['Chance'])){if(_0xa59d44(0x113)!==_0xa59d44(0x113)){if(this[_0xa59d44(0x15d)]===_0x577fcc){if(this['isChaseReturning']()||this[_0xa59d44(0x211)]())return;}_0x2c0551[_0xa59d44(0x220)][_0xa59d44(0x206)][_0xa59d44(0x200)](this,_0x4aa7d0,_0x3a1d24);}else return _0xa59d44(0x1fa);}}}}}}return this[_0xa59d44(0x176)]()['shift']();},Game_System[_0x16ffc2(0x112)][_0x16ffc2(0xe8)]=function(_0x43a8cc){const _0x332209=_0x16ffc2;if(this[_0x332209(0x171)]===undefined){if(_0x332209(0x16c)!==_0x332209(0x16c))return _0x3bc429[_0x332209(0x19f)]&&_0x5c9af1['description']['includes']('['+_0x2b4778+']');else this[_0x332209(0x202)]();}this[_0x332209(0x171)]=_0x43a8cc;},Game_System[_0x16ffc2(0x112)][_0x16ffc2(0x1d2)]=function(_0x4e953b){const _0x5ec587=_0x16ffc2;this[_0x5ec587(0x171)]===undefined&&this[_0x5ec587(0x202)](),this[_0x5ec587(0x171)]=this['_forcedAdvantage'][_0x5ec587(0xe7)](_0x4e953b);},VisuMZ[_0x16ffc2(0x220)]['Game_Map_setup']=Game_Map[_0x16ffc2(0x112)][_0x16ffc2(0x154)],Game_Map[_0x16ffc2(0x112)]['setup']=function(_0x1e9a66){const _0x52b7e0=_0x16ffc2;VisuMZ[_0x52b7e0(0x220)][_0x52b7e0(0xab)][_0x52b7e0(0x200)](this,_0x1e9a66),this['initEncounterEffectsData'](),this['setupEncounterEffectsData']();},Game_Map[_0x16ffc2(0x112)][_0x16ffc2(0x137)]=function(){const _0x42d479=_0x16ffc2;this[_0x42d479(0xc4)]=[],this['_alertBlockVisionRegions']=[];},Game_Map['prototype'][_0x16ffc2(0x1b3)]=function(){const _0x5ed552=_0x16ffc2,_0x61d81a=this[_0x5ed552(0x19e)]();if(!_0x61d81a)return;const _0xd85e0c=VisuMZ[_0x5ed552(0x220)][_0x5ed552(0x18f)],_0x379a24=_0x61d81a['note'],_0x4908b3=$dataMap?$dataMap[_0x5ed552(0x1b0)]:'';if(_0x379a24[_0x5ed552(0x136)](_0xd85e0c['BlockVisionTag'])){if(_0x5ed552(0x1d6)!==_0x5ed552(0x1d6))this[_0x5ed552(0x12a)]=_0x27012b,this['_character']=_0x414064[_0x5ed552(0xe6)],_0x16cb8d['prototype'][_0x5ed552(0xe9)][_0x5ed552(0x200)](this),this['initMembers'](),this[_0x5ed552(0x139)]();else{const _0x4c9783=String(RegExp['$1'])[_0x5ed552(0x108)](',')[_0x5ed552(0x166)](_0x3899f2=>Number(_0x3899f2));this[_0x5ed552(0xc4)]=this[_0x5ed552(0xc4)][_0x5ed552(0xe7)](_0x4c9783);}}if(_0x379a24[_0x5ed552(0x136)](_0xd85e0c[_0x5ed552(0x9f)])){if(_0x5ed552(0xf7)!==_0x5ed552(0xf7)){if(this[_0x5ed552(0x118)])return;if(!this[_0x5ed552(0x189)])return;this[_0x5ed552(0x118)]=new _0x3ef15c(this),this[_0x5ed552(0x118)]['z']=0x6,this[_0x5ed552(0x189)][_0x5ed552(0x12d)](this[_0x5ed552(0x118)]),_0x3e6ebb[_0x5ed552(0xfe)][_0x5ed552(0xfd)][_0x5ed552(0xe2)]&&(this[_0x5ed552(0x18a)]=new _0x5b2e88(this),this[_0x5ed552(0x18a)]['z']=0x6,_0x4d4cda[_0x5ed552(0xfe)]['_spriteset'][_0x5ed552(0xe2)][_0x5ed552(0x12d)](this[_0x5ed552(0x18a)]));}else{const _0x2abb2b=String(RegExp['$1'])[_0x5ed552(0x108)](',')[_0x5ed552(0x166)](_0x568a88=>Number(_0x568a88));this[_0x5ed552(0x1bc)]=this[_0x5ed552(0x1bc)][_0x5ed552(0xe7)](_0x2abb2b);}}if(_0x4908b3[_0x5ed552(0x136)](_0xd85e0c[_0x5ed552(0xf6)])){const _0x3eb17f=String(RegExp['$1'])[_0x5ed552(0x108)](',')['map'](_0x5ec3ef=>Number(_0x5ec3ef));this[_0x5ed552(0xc4)]=this[_0x5ed552(0xc4)][_0x5ed552(0xe7)](_0x3eb17f);}if(_0x4908b3[_0x5ed552(0x136)](_0xd85e0c['BlockVisionRegion'])){const _0x29c8d8=String(RegExp['$1'])[_0x5ed552(0x108)](',')[_0x5ed552(0x166)](_0x26e13a=>Number(_0x26e13a));this[_0x5ed552(0x1bc)]=this[_0x5ed552(0x1bc)][_0x5ed552(0xe7)](_0x29c8d8);}},Game_Map[_0x16ffc2(0x112)][_0x16ffc2(0x16a)]=function(_0x390f9f,_0x2dbc67){const _0x48bcce=_0x16ffc2;if(this['_alertBlockVisionTags']===undefined)return![];if(this[_0x48bcce(0x1bc)]===undefined)return![];const _0x380233=this[_0x48bcce(0x226)](_0x390f9f,_0x2dbc67);if(this[_0x48bcce(0xc4)][_0x48bcce(0x128)](_0x380233))return!![];const _0x2065ea=this[_0x48bcce(0x1da)](_0x390f9f,_0x2dbc67);if(this[_0x48bcce(0x1bc)][_0x48bcce(0x128)](_0x2065ea))return!![];return![];},Game_CharacterBase['prototype'][_0x16ffc2(0x1ad)]=function(_0x4c843d){const _0x399ad9=_0x16ffc2;return;console[_0x399ad9(0x1ef)]('\x20This\x20X:\x20'+this['x']+_0x399ad9(0xdf)+this['y']),console[_0x399ad9(0x1ef)]('Event\x20X:\x20'+_0x4c843d['x']+_0x399ad9(0x101)+_0x4c843d['y']);},Game_CharacterBase[_0x16ffc2(0x112)][_0x16ffc2(0x203)]=function(_0x5df06e){const _0x66ef16=_0x16ffc2;switch(this[_0x66ef16(0x13d)]()){case 0x1:return[0x8,0x9,0x6][_0x66ef16(0x1b1)](_0x5df06e[_0x66ef16(0x13d)]());case 0x2:return[0x7,0x8,0x9][_0x66ef16(0x1b1)](_0x5df06e['direction']());case 0x3:return[0x4,0x7,0x8]['contains'](_0x5df06e[_0x66ef16(0x13d)]());case 0x4:return[0x9,0x6,0x3][_0x66ef16(0x1b1)](_0x5df06e[_0x66ef16(0x13d)]());case 0x6:return[0x7,0x4,0x1][_0x66ef16(0x1b1)](_0x5df06e[_0x66ef16(0x13d)]());case 0x7:return[0x2,0x3,0x6][_0x66ef16(0x1b1)](_0x5df06e[_0x66ef16(0x13d)]());case 0x8:return[0x1,0x2,0x3][_0x66ef16(0x1b1)](_0x5df06e[_0x66ef16(0x13d)]());case 0x9:return[0x4,0x1,0x2][_0x66ef16(0x1b1)](_0x5df06e['direction']());}return![];},Game_CharacterBase['prototype'][_0x16ffc2(0x163)]=function(_0x37669b){const _0x2a8019=_0x16ffc2;switch(this[_0x2a8019(0x13d)]()){case 0x1:return[0x4,0x1,0x2]['contains'](_0x37669b[_0x2a8019(0x13d)]());case 0x2:return[0x1,0x2,0x3][_0x2a8019(0x1b1)](_0x37669b[_0x2a8019(0x13d)]());case 0x3:return[0x2,0x3,0x6]['contains'](_0x37669b['direction']());case 0x4:return[0x7,0x4,0x1][_0x2a8019(0x1b1)](_0x37669b['direction']());case 0x6:return[0x9,0x6,0x3][_0x2a8019(0x1b1)](_0x37669b['direction']());case 0x7:return[0x4,0x7,0x8][_0x2a8019(0x1b1)](_0x37669b[_0x2a8019(0x13d)]());case 0x8:return[0x7,0x8,0x9][_0x2a8019(0x1b1)](_0x37669b[_0x2a8019(0x13d)]());case 0x9:return[0x8,0x9,0x6][_0x2a8019(0x1b1)](_0x37669b[_0x2a8019(0x13d)]());}return![];},Game_CharacterBase[_0x16ffc2(0x112)][_0x16ffc2(0x14d)]=function(_0x422b69){const _0x4e94c7=_0x16ffc2;switch(this['direction']()){case 0x1:return[0x4,0x7,0x8,0x2,0x3,0x6]['contains'](_0x422b69[_0x4e94c7(0x13d)]());case 0x2:return[0x7,0x4,0x1,0x9,0x6,0x3][_0x4e94c7(0x1b1)](_0x422b69[_0x4e94c7(0x13d)]());case 0x3:return[0x4,0x1,0x2,0x8,0x9,0x6]['contains'](_0x422b69['direction']());case 0x4:return[0x7,0x8,0x9,0x1,0x2,0x3][_0x4e94c7(0x1b1)](_0x422b69['direction']());case 0x6:return[0x7,0x8,0x9,0x1,0x2,0x3][_0x4e94c7(0x1b1)](_0x422b69['direction']());case 0x7:return[0x4,0x1,0x2,0x8,0x9,0x6][_0x4e94c7(0x1b1)](_0x422b69[_0x4e94c7(0x13d)]());case 0x8:return[0x7,0x4,0x1,0x9,0x6,0x3][_0x4e94c7(0x1b1)](_0x422b69[_0x4e94c7(0x13d)]());case 0x9:return[0x4,0x7,0x8,0x2,0x3,0x6][_0x4e94c7(0x1b1)](_0x422b69[_0x4e94c7(0x13d)]());}return![];},Game_CharacterBase['prototype'][_0x16ffc2(0x1f8)]=function(_0x4e5c26){const _0x161c07=_0x16ffc2;this[_0x161c07(0x1ad)](_0x4e5c26);switch(this['direction']()){case 0x1:return _0x4e5c26['y']>this['y'];case 0x2:return _0x4e5c26['y']>this['y'];case 0x3:return _0x4e5c26['y']>this['y'];case 0x4:return _0x4e5c26['x']<this['x'];case 0x6:return _0x4e5c26['x']>this['x'];case 0x7:return _0x4e5c26['y']<this['y'];case 0x8:return _0x4e5c26['y']<this['y'];case 0x9:return _0x4e5c26['y']<this['y'];}return![];},Game_CharacterBase['prototype'][_0x16ffc2(0x173)]=function(_0x3dd1b1){const _0x271a45=_0x16ffc2;this[_0x271a45(0x1ad)](_0x3dd1b1);switch(this[_0x271a45(0x13d)]()){case 0x1:return _0x3dd1b1['y']<this['y'];case 0x2:return _0x3dd1b1['y']<this['y'];case 0x3:return _0x3dd1b1['y']<this['y'];case 0x4:return _0x3dd1b1['x']>this['x'];case 0x6:return _0x3dd1b1['x']<this['x'];case 0x7:return _0x3dd1b1['y']>this['y'];case 0x8:return _0x3dd1b1['y']>this['y'];case 0x9:return _0x3dd1b1['y']>this['y'];}return![];},Game_CharacterBase[_0x16ffc2(0x112)][_0x16ffc2(0xf5)]=function(_0xa62b54){const _0x8b8ae1=_0x16ffc2;this[_0x8b8ae1(0x1ad)](_0xa62b54);switch(this[_0x8b8ae1(0x13d)]()){case 0x1:return this['x']<_0xa62b54['x']&&this['y']>_0xa62b54['y']||this['x']>_0xa62b54['x']&&this['y']<_0xa62b54['y'];case 0x2:return this['x']!==_0xa62b54['x'];case 0x3:return this['x']>_0xa62b54['x']&&this['y']>_0xa62b54['y']||this['x']<_0xa62b54['x']&&this['y']<_0xa62b54['y'];case 0x4:return this['y']!==_0xa62b54['y'];break;case 0x6:return this['y']!==_0xa62b54['y'];break;case 0x7:return this['x']>_0xa62b54['x']&&this['y']>_0xa62b54['y']||this['x']<_0xa62b54['x']&&this['y']<_0xa62b54['y'];case 0x8:return this['x']!==_0xa62b54['x'];case 0x9:return this['x']<_0xa62b54['x']&&this['y']>_0xa62b54['y']||this['x']>_0xa62b54['x']&&this['y']<_0xa62b54['y'];}return![];},VisuMZ[_0x16ffc2(0x220)][_0x16ffc2(0xd4)]=Game_Player[_0x16ffc2(0x112)][_0x16ffc2(0x11c)],Game_Player[_0x16ffc2(0x112)]['initMembers']=function(){const _0x2defa0=_0x16ffc2;VisuMZ[_0x2defa0(0x220)][_0x2defa0(0xd4)][_0x2defa0(0x200)](this),this[_0x2defa0(0xf9)]();},Game_Player[_0x16ffc2(0x112)]['initEncounterEffects']=function(){const _0x5c40d0=_0x16ffc2;this[_0x5c40d0(0xf4)]=![];},Game_Player[_0x16ffc2(0x112)]['getAlertStealthMode']=function(){const _0xb0449e=_0x16ffc2;return this['_alertStealthMode']===undefined&&this['initEncounterEffects'](),this[_0xb0449e(0xf4)];},Game_Player[_0x16ffc2(0x112)][_0x16ffc2(0xc3)]=function(_0x4073ec){const _0x53dccf=_0x16ffc2;this[_0x53dccf(0xf4)]===undefined&&this[_0x53dccf(0xf9)](),this[_0x53dccf(0xf4)]=_0x4073ec;},Game_Player['prototype'][_0x16ffc2(0x169)]=function(){const _0x518ddf=_0x16ffc2;if(this[_0x518ddf(0x12c)]())return this[_0x518ddf(0x193)](),0x0;const _0x4ee361=VisuMZ[_0x518ddf(0x220)]['Settings']['EncounterMultiplier'];if(!_0x4ee361)return 0x1;let _0x15c1e4=0x1;$gameMap['isBush'](this['x'],this['y'])&&(_0x15c1e4*=_0x4ee361['BushMultiplier']);$gameParty['hasEncounterHalf']()&&(_0x15c1e4*=0.5);if(this[_0x518ddf(0xa7)]()){if(_0x518ddf(0x20d)===_0x518ddf(0x1d7))return this['getAlertDistanceToTarget'](_0x576935);else _0x15c1e4*=_0x4ee361[_0x518ddf(0xec)];}return this[_0x518ddf(0xea)]()&&(_0x15c1e4*=_0x4ee361['ShipMultiplier']),this[_0x518ddf(0x19a)]()&&(_0x15c1e4=this['processLureEncounters'](_0x15c1e4)),_0x15c1e4;},Game_Player[_0x16ffc2(0x112)]['isRepelEncounters']=function(){const _0x232489=_0x16ffc2,_0x568b4f=VisuMZ['EncounterEffects'][_0x232489(0x224)]['RepelLure'];if(!_0x568b4f)return![];if(_0x568b4f[_0x232489(0xa3)]<=0x0)return![];const _0x33ca66=$gameVariables['value'](_0x568b4f[_0x232489(0xa3)])||0x0;return _0x33ca66>0x0;},Game_Player[_0x16ffc2(0x112)]['processRepelEncounters']=function(){const _0x548d1f=_0x16ffc2,_0xd06afa=VisuMZ[_0x548d1f(0x220)][_0x548d1f(0x224)][_0x548d1f(0x20f)];if(!_0xd06afa)return;if(_0xd06afa[_0x548d1f(0xa3)]<=0x0)return;let _0x359cc2=$gameVariables[_0x548d1f(0x13f)](_0xd06afa['RepelVariable'])||0x0;const _0x129671=_0x359cc2>0x0;_0x129671&&(_0x359cc2--,$gameVariables[_0x548d1f(0x1d5)](_0xd06afa['RepelVariable'],_0x359cc2),_0x359cc2<=0x0&&_0xd06afa[_0x548d1f(0xb4)]>0x0&&$gameTemp[_0x548d1f(0x1cd)](_0xd06afa[_0x548d1f(0xb4)]));},Game_Player[_0x16ffc2(0x112)]['isLureEncounters']=function(){const _0x47aa93=_0x16ffc2,_0x52f67a=VisuMZ['EncounterEffects'][_0x47aa93(0x224)][_0x47aa93(0x20f)];if(!_0x52f67a)return![];if(_0x52f67a[_0x47aa93(0xf8)]<=0x0)return![];const _0x545700=$gameVariables[_0x47aa93(0x13f)](_0x52f67a[_0x47aa93(0xf8)])||0x0;return _0x545700>0x0;},Game_Player[_0x16ffc2(0x112)][_0x16ffc2(0x182)]=function(_0xe6620a){const _0xd7d4fe=_0x16ffc2,_0x4a18c9=VisuMZ['EncounterEffects'][_0xd7d4fe(0x224)]['RepelLure'];if(!_0x4a18c9)return _0xe6620a;if(_0x4a18c9[_0xd7d4fe(0xf8)]<=0x0)return _0xe6620a;let _0x4e3185=$gameVariables[_0xd7d4fe(0x13f)](_0x4a18c9[_0xd7d4fe(0xf8)])||0x0;const _0x515612=_0x4e3185>0x0;return _0x515612&&(_0x4e3185--,$gameVariables['setValue'](_0x4a18c9[_0xd7d4fe(0xf8)],_0x4e3185),_0x4e3185<=0x0&&_0x4a18c9['LureEvent']>0x0&&$gameTemp['reserveCommonEvent'](_0x4a18c9[_0xd7d4fe(0x13c)])),_0xe6620a*=_0x4a18c9[_0xd7d4fe(0xbf)],_0xe6620a+=_0x4a18c9[_0xd7d4fe(0x143)],_0xe6620a;},VisuMZ[_0x16ffc2(0x220)][_0x16ffc2(0x174)]=Game_Follower['prototype'][_0x16ffc2(0xb8)],Game_Follower[_0x16ffc2(0x112)][_0x16ffc2(0xb8)]=function(){const _0x1084c4=_0x16ffc2;if($gameTemp[_0x1084c4(0x158)])return![];return VisuMZ[_0x1084c4(0x220)][_0x1084c4(0x174)][_0x1084c4(0x200)](this);},VisuMZ[_0x16ffc2(0x220)][_0x16ffc2(0x212)]=Game_Event[_0x16ffc2(0x112)]['clearPageSettings'],Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x162)]=function(){const _0x4b4c30=_0x16ffc2;VisuMZ[_0x4b4c30(0x220)][_0x4b4c30(0x212)]['call'](this),this['initEncounterEffectsEffects']();},VisuMZ[_0x16ffc2(0x220)][_0x16ffc2(0x216)]=Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x1c5)],Game_Event['prototype'][_0x16ffc2(0x1c5)]=function(){const _0x30404a=_0x16ffc2;VisuMZ[_0x30404a(0x220)][_0x30404a(0x216)][_0x30404a(0x200)](this),this[_0x30404a(0xeb)]();},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0xeb)]=function(){const _0x4ce46a=_0x16ffc2;this[_0x4ce46a(0x201)](),this[_0x4ce46a(0x221)](),this['setupEncounterEffectsCommentTags']();},Game_Event['prototype'][_0x16ffc2(0x221)]=function(_0x57cd2a){const _0x24be1a=_0x16ffc2;if(!this['event']())return;const _0x5a1efe=this[_0x24be1a(0xc9)]()[_0x24be1a(0x1b0)];if(_0x5a1efe==='')return;this[_0x24be1a(0x16e)](_0x5a1efe);},Game_Event['prototype']['setupEncounterEffectsCommentTags']=function(_0x2941f0){const _0x438f19=_0x16ffc2;if(!this[_0x438f19(0xc9)]())return;if(!this[_0x438f19(0x1b7)]())return;const _0x5d20e4=this[_0x438f19(0x207)]();let _0x16b9bc='';for(const _0x4cae94 of _0x5d20e4){if('ShHfu'!==_0x438f19(0x1ac))_0x5a10dd[_0x438f19(0x1e3)]=!![],_0x82652a[_0x438f19(0x1ec)]=_0x2f77e3(_0xdbdb89['$1']);else{if([0x6c,0x198][_0x438f19(0x128)](_0x4cae94['code'])){if(_0x16b9bc!=='')_0x16b9bc+='\x0a';_0x16b9bc+=_0x4cae94[_0x438f19(0x10a)][0x0];}}}this['checkEncounterEffectsStringTags'](_0x16b9bc);},Game_Event[_0x16ffc2(0x112)]['initEncounterEffectsEffects']=function(){const _0x450444=_0x16ffc2;this[_0x450444(0x21a)]=![],this[_0x450444(0x115)]=![],this[_0x450444(0x1c2)]();},Game_Event[_0x16ffc2(0x112)]['checkEncounterEffectsStringTags']=function(_0x3e52db){const _0x416f59=_0x16ffc2,_0x85f80b=VisuMZ[_0x416f59(0x220)][_0x416f59(0x18f)];_0x3e52db[_0x416f59(0x136)](_0x85f80b[_0x416f59(0x1c3)])&&('cNFtd'!==_0x416f59(0x10b)?(this[_0x416f59(0x21a)]=!![],this[_0x416f59(0x1df)]=0x2):(_0x2fd679[_0x416f59(0x1e3)]=!![],_0x30c903[_0x416f59(0x1e6)]=_0x1e28f3(_0x3b0674['$1'])||0x1)),_0x3e52db[_0x416f59(0x136)](_0x85f80b[_0x416f59(0x121)])&&(_0x416f59(0x1e0)==='mVkXu'?(_0x3bedcd['enabled']=!![],_0x1e5134[_0x416f59(0x210)]=![]):this[_0x416f59(0x115)]=!![]),this[_0x416f59(0xb1)](_0x3e52db);},VisuMZ[_0x16ffc2(0x220)]['Game_Event_checkEventTriggerTouch']=Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x1e8)],Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x1e8)]=function(_0x345a13,_0x53b718){const _0x391076=_0x16ffc2;VisuMZ[_0x391076(0x220)]['Game_Event_checkEventTriggerTouch'][_0x391076(0x200)](this,_0x345a13,_0x53b718),this['checkEventFollowerTriggerTouch'](_0x345a13,_0x53b718);},Game_Event['prototype'][_0x16ffc2(0x225)]=function(_0x345df8,_0xd5bcc9){const _0x2fcb17=_0x16ffc2;if(!this[_0x2fcb17(0x21a)])return;if($gameMap[_0x2fcb17(0x1ff)]())return;if(this[_0x2fcb17(0x1df)]!==0x2)return;if(this[_0x2fcb17(0xef)]())return;if(!this[_0x2fcb17(0x1a2)]())return;const _0x59fe95=$gamePlayer[_0x2fcb17(0x13e)]()[_0x2fcb17(0xcb)]();for(const _0x26b7b4 of _0x59fe95){if(!_0x26b7b4)continue;if(_0x26b7b4['pos'](_0x345df8,_0xd5bcc9)){this['start']();break;}}},VisuMZ[_0x16ffc2(0x220)][_0x16ffc2(0x219)]=Game_Event['prototype'][_0x16ffc2(0x21e)],Game_Event['prototype']['lock']=function(){const _0x48a8db=_0x16ffc2;this[_0x48a8db(0x142)]=!!this[_0x48a8db(0x115)],VisuMZ[_0x48a8db(0x220)]['Game_Event_lock'][_0x48a8db(0x200)](this),this['_processEncounterDirectionLock']=undefined;},VisuMZ[_0x16ffc2(0x220)]['Game_Character_turnTowardPlayer']=Game_Character[_0x16ffc2(0x112)][_0x16ffc2(0xc8)],Game_Character[_0x16ffc2(0x112)][_0x16ffc2(0xc8)]=function(){const _0x507f6b=_0x16ffc2;if(this[_0x507f6b(0x142)])return;VisuMZ[_0x507f6b(0x220)]['Game_Character_turnTowardPlayer'][_0x507f6b(0x200)](this);},Game_Event['prototype'][_0x16ffc2(0x1c2)]=function(){const _0x478d97=_0x16ffc2,_0x3cf866=VisuMZ[_0x478d97(0x220)][_0x478d97(0x224)]['Alert'];this['_EncounterEffects_EventChaseData']={'enabled':![],'alerted':![],'alertRange':_0x3cf866['AlertRange'],'alertDash':_0x3cf866[_0x478d97(0xd3)],'alertLock':_0x3cf866[_0x478d97(0x1a6)],'chaseTime':_0x3cf866[_0x478d97(0x1a6)],'fovAngle':_0x3cf866[_0x478d97(0x167)],'showFov':_0x3cf866[_0x478d97(0x17e)],'response':_0x3cf866[_0x478d97(0x1b8)],'alertBalloon':VisuMZ[_0x478d97(0x220)][_0x478d97(0xaa)](_0x3cf866[_0x478d97(0x1b5)]),'commonEvent':_0x3cf866['CommonEvent'],'reactDelay':_0x3cf866[_0x478d97(0x213)],'reactTime':_0x3cf866['ReactDelay'],'alertSoundName':_0x3cf866[_0x478d97(0x12e)],'alertSoundVolume':_0x3cf866[_0x478d97(0x10c)],'alertSoundPitch':_0x3cf866['SoundPitch'],'alertSoundPan':_0x3cf866['SoundPan'],'returnStartBalloon':VisuMZ[_0x478d97(0x220)][_0x478d97(0xaa)](_0x3cf866[_0x478d97(0x1c0)]),'returnEndBalloon':VisuMZ[_0x478d97(0x220)][_0x478d97(0xaa)](_0x3cf866[_0x478d97(0xad)]),'returnAfter':_0x3cf866[_0x478d97(0x1ea)],'returnWaiting':![],'returnTime':_0x3cf866[_0x478d97(0xc1)],'returnWait':_0x3cf866[_0x478d97(0xc1)],'returning':![],'returnX':this['x'],'returnY':this['y'],'returnDir':this[_0x478d97(0x13d)]()};},VisuMZ[_0x16ffc2(0x220)][_0x16ffc2(0xaa)]=function(_0x1c5cc9){const _0x4ee5fa=_0x16ffc2;let _0x292982=0x0;switch(_0x1c5cc9[_0x4ee5fa(0x1b4)]()[_0x4ee5fa(0x117)]()){case'!':case'EXCLAMATION':_0x292982=0x1;break;case'?':case'QUESTION':_0x292982=0x2;break;case _0x4ee5fa(0x1fe):case _0x4ee5fa(0xac):case'MUSIC\x20NOTE':case _0x4ee5fa(0x125):case _0x4ee5fa(0xd2):_0x292982=0x3;break;case _0x4ee5fa(0xae):case _0x4ee5fa(0x1f9):_0x292982=0x4;break;case _0x4ee5fa(0x1a5):_0x292982=0x5;break;case'SWEAT':_0x292982=0x6;break;case _0x4ee5fa(0x1b2):case _0x4ee5fa(0x130):case _0x4ee5fa(0x183):_0x292982=0x7;break;case'SILENCE':case'...':_0x292982=0x8;break;case _0x4ee5fa(0x13b):case _0x4ee5fa(0x181):case _0x4ee5fa(0x10f):case'LIGHT-BULB':case _0x4ee5fa(0x172):_0x292982=0x9;break;case'Z':case'ZZ':case _0x4ee5fa(0x1b6):case _0x4ee5fa(0x215):_0x292982=0xa;break;case _0x4ee5fa(0x1a1):_0x292982=0xb;break;case _0x4ee5fa(0x164):_0x292982=0xc;break;case'USER-DEFINED\x203':_0x292982=0xd;break;case _0x4ee5fa(0xff):_0x292982=0xe;break;case _0x4ee5fa(0x1de):_0x292982=0xf;break;}return _0x292982;},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0xb1)]=function(_0x3b2d36){const _0x1276ef=_0x16ffc2,_0x109640=VisuMZ[_0x1276ef(0x220)]['RegExp'],_0x39f880=this[_0x1276ef(0x127)];_0x3b2d36[_0x1276ef(0x136)](_0x109640['AlertDefault'])&&(_0x39f880[_0x1276ef(0x1e3)]=!![]);if(_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0x1d4)])){if('RKNBQ'!==_0x1276ef(0x120)){if(!_0x377029[_0x1276ef(0x13e)]()[_0x1276ef(0x1e9)])return 0x3e7;const _0x1717f4=_0x3f62b6[_0x1276ef(0x13e)]()[_0x1276ef(0x1d8)](_0x275264);if(!_0x1717f4['actor']())return 0x3e7;return this['getAlertAngleToTarget'](_0x1717f4,_0x4ecad4);}else _0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880['alertRange']=Number(RegExp['$1'])||0x1;}_0x3b2d36['match'](_0x109640['AlertDash'])&&(_0x1276ef(0x16d)!==_0x1276ef(0x1c8)?(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880[_0x1276ef(0x210)]=![]):this[_0x1276ef(0xf9)]());_0x3b2d36[_0x1276ef(0x136)](_0x109640['AlertWalk'])&&(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880['alertDash']=![]);_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0x1a6)])&&(_0x39f880['enabled']=!![],_0x39f880[_0x1276ef(0x198)]=Number(RegExp['$1'])||0x1,_0x39f880[_0x1276ef(0xb2)]=Number(RegExp['$1'])||0x1);if(_0x3b2d36[_0x1276ef(0x136)](_0x109640['AlertFovAngle'])){if(_0x1276ef(0x21c)!=='YHyMJ'){const _0x599e48=this[_0x1276ef(0xa1)];if(!_0x599e48[_0x1276ef(0x152)])return;const _0x37e38c=_0x413497['EncounterEffects'][_0x1276ef(0x224)][_0x1276ef(0x124)],_0xe38551=_0x599e48[_0x1276ef(0x1e6)],_0x52402d=_0x2a81fa['ceil']((_0x599e48[_0x1276ef(0x1d3)]+0.4)*_0x14e3d1[_0x1276ef(0x17d)]()),_0xbb268f=_0x37e38c['FovColor1'],_0x129fb4=_0x37e38c[_0x1276ef(0x1dc)];this['bitmap']=new _0x433dd3(_0x52402d*0x2,_0x52402d*0x2),this[_0x1276ef(0x1fd)][_0x1276ef(0x1a0)](_0x52402d,_0xe38551,_0xbb268f,_0x129fb4),this[_0x1276ef(0x1a8)]=0x1;}else _0x39f880['enabled']=!![],_0x39f880[_0x1276ef(0x1e6)]=Number(RegExp['$1'])||0x1;}_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0x1cf)])&&(_0x1276ef(0x16b)!==_0x1276ef(0x16b)?(_0x1ddebe['EncounterEffects']['Game_Event_update'][_0x1276ef(0x200)](this),this['updateAlert']()):(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880[_0x1276ef(0x152)]=!![]));_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0xe1)])&&(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880[_0x1276ef(0x152)]=![]);_0x3b2d36['match'](_0x109640[_0x1276ef(0xa0)])&&(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880['response']=String(RegExp['$1'])[_0x1276ef(0x15c)]()['trim']());if(_0x3b2d36[_0x1276ef(0x136)](_0x109640['AlertBalloon'])){if(_0x1276ef(0x1f0)!=='vaugg')return _0x1276ef(0x105);else{_0x39f880['enabled']=!![];const _0x5edab0=VisuMZ[_0x1276ef(0x220)][_0x1276ef(0xaa)](String(RegExp['$1']));_0x39f880[_0x1276ef(0xe5)]=_0x5edab0;}}if(_0x3b2d36[_0x1276ef(0x136)](_0x109640['AlertReactDelay'])){if('zhkDu'===_0x1276ef(0x14e)){const _0x500ec2=[];_0x500ec2[_0x1276ef(0xf0)](this[_0x1276ef(0x194)]());for(let _0x2b3ab3=0x0;_0x2b3ab3<_0x3b98d5['followers']()[_0x1276ef(0xa1)][_0x1276ef(0x15e)];_0x2b3ab3++){_0x500ec2[_0x1276ef(0xf0)](this[_0x1276ef(0x199)](_0x2b3ab3));}return _0x58850f[_0x1276ef(0x204)](..._0x500ec2);}else _0x39f880['enabled']=!![],_0x39f880[_0x1276ef(0x147)]=Number(RegExp['$1'])||0x1,_0x39f880[_0x1276ef(0x186)]=Number(RegExp['$1'])||0x1;}if(_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0x103)])){if('tuncf'!==_0x1276ef(0xdb))_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880[_0x1276ef(0x1e2)]=Number(RegExp['$1'])||0x0;else{if(this[_0x1276ef(0x211)]())this['updateSelfMovementAlerted']();else this[_0x1276ef(0x131)]()?this[_0x1276ef(0x1bd)]():_0x163b87[_0x1276ef(0x220)][_0x1276ef(0x165)][_0x1276ef(0x200)](this);}}_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0x1ca)])&&('TnpsP'==='cPYFO'?(this[_0x1276ef(0xf4)]===_0x3dd21b&&this['initEncounterEffects'](),this[_0x1276ef(0xf4)]=_0x328d60):(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880[_0x1276ef(0x1ec)]=String(RegExp['$1'])));_0x3b2d36[_0x1276ef(0x136)](_0x109640['AlertSoundVolume'])&&(_0x39f880['enabled']=!![],_0x39f880['alertSoundVolume']=Number(RegExp['$1'])||0x1);_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0x1ed)])&&(_0x39f880['enabled']=!![],_0x39f880[_0x1276ef(0x1cb)]=Number(RegExp['$1'])||0x1);_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0xd6)])&&(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880[_0x1276ef(0x1af)]=Number(RegExp['$1'])||0x1);_0x3b2d36['match'](_0x109640[_0x1276ef(0x126)])&&(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880[_0x1276ef(0xca)]=!![]);_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0x161)])&&(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880[_0x1276ef(0xca)]=![]);if(_0x3b2d36[_0x1276ef(0x136)](_0x109640['ReturnStartBalloon'])){if('zYnmj'===_0x1276ef(0x1a4)){_0x39f880[_0x1276ef(0x1e3)]=!![];const _0x12ee55=VisuMZ['EncounterEffects'][_0x1276ef(0xaa)](String(RegExp['$1']));_0x39f880[_0x1276ef(0xce)]=_0x12ee55;}else _0xf05a9e[_0x1276ef(0x1cd)](_0x58222e[_0x1276ef(0xb4)]);}if(_0x3b2d36[_0x1276ef(0x136)](_0x109640['ReturnEndBalloon'])){if(_0x1276ef(0x11a)===_0x1276ef(0x209))_0x241cea[_0x1276ef(0x1e3)]=!![],_0x33784d[_0x1276ef(0xca)]=!![];else{_0x39f880[_0x1276ef(0x1e3)]=!![];const _0x1cda27=VisuMZ[_0x1276ef(0x220)][_0x1276ef(0xaa)](String(RegExp['$1']));_0x39f880[_0x1276ef(0xa2)]=_0x1cda27;}}_0x3b2d36[_0x1276ef(0x136)](_0x109640[_0x1276ef(0xc1)])&&(_0x39f880[_0x1276ef(0x1e3)]=!![],_0x39f880[_0x1276ef(0x140)]=Number(RegExp['$1'])||0x1,_0x39f880[_0x1276ef(0x197)]=Number(RegExp['$1'])||0x1);},Game_Event['prototype'][_0x16ffc2(0xb3)]=function(){const _0x390165=_0x16ffc2;return this[_0x390165(0x127)]===undefined&&(_0x390165(0x1c4)==='dRDko'?this[_0x390165(0xcd)]():(this[_0x390165(0xd7)](),_0x5ab55c[_0x390165(0x220)]['BattleManager_startBattle'][_0x390165(0x200)](this),this[_0x390165(0x160)]())),this[_0x390165(0x127)];},Game_Event['prototype']['isChaseEnabled']=function(){const _0x13eda1=_0x16ffc2;if(this[_0x13eda1(0x14c)])return![];return this[_0x13eda1(0xb3)]()[_0x13eda1(0x1e3)];},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x131)]=function(){const _0x2d6929=_0x16ffc2;if(Imported[_0x2d6929(0x17f)]){if(this[_0x2d6929(0x17c)]())return![];}return this[_0x2d6929(0xb3)]()[_0x2d6929(0x188)]||this[_0x2d6929(0xb3)]()[_0x2d6929(0x218)];},Game_Event[_0x16ffc2(0x112)]['isChaseAlerted']=function(){const _0x1fbea3=_0x16ffc2;if(Imported[_0x1fbea3(0x17f)]){if(this[_0x1fbea3(0x17c)]())return![];}return this[_0x1fbea3(0xb3)]()[_0x1fbea3(0xb7)];},VisuMZ[_0x16ffc2(0x220)]['Game_Event_updateSelfMovement']=Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x18d)],Game_Event['prototype']['updateSelfMovement']=function(){const _0x2b37a1=_0x16ffc2;if(this[_0x2b37a1(0x211)]())_0x2b37a1(0x18b)===_0x2b37a1(0x1f2)?this[_0x2b37a1(0xcd)]():this[_0x2b37a1(0x1a7)]();else this['isChaseReturning']()?_0x2b37a1(0x20a)===_0x2b37a1(0x20a)?this['updateSelfMovementReturnFromChase']():_0x15aa33[_0x2b37a1(0x1cd)](_0x5aba85):VisuMZ[_0x2b37a1(0x220)][_0x2b37a1(0x165)]['call'](this);},Game_Event['prototype'][_0x16ffc2(0x1a7)]=function(){const _0x2e4fe3=_0x16ffc2,_0x3b2d11=this[_0x2e4fe3(0xb3)]();if(_0x3b2d11[_0x2e4fe3(0x186)]>0x0){_0x3b2d11[_0x2e4fe3(0x186)]-=0x1;return;}switch(_0x3b2d11[_0x2e4fe3(0xda)]){case _0x2e4fe3(0x1e4):this[_0x2e4fe3(0xbe)]();break;case _0x2e4fe3(0xb9):this[_0x2e4fe3(0x12b)]();break;case _0x2e4fe3(0x14a):this[_0x2e4fe3(0x214)]();break;case _0x2e4fe3(0xc7):this[_0x2e4fe3(0xba)]();break;default:VisuMZ[_0x2e4fe3(0x220)]['Game_Event_updateSelfMovement'][_0x2e4fe3(0x200)](this);break;}},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0xbe)]=function(){const _0x138ec1=_0x16ffc2;if(!this['needsSmartChaseUpdate']())return;this['_eventAlertChaseCache']=this[_0x138ec1(0x1d9)]||{},this[_0x138ec1(0x1d9)][_0x138ec1(0x1c6)]=$gamePlayer['x'],this[_0x138ec1(0x1d9)]['playerY']=$gamePlayer['y'],this['_eventAlertChaseCache']['eventX']=this['x'],this[_0x138ec1(0x1d9)][_0x138ec1(0x104)]=this['y'];const _0x2dc94d=Imported[_0x138ec1(0x17f)]&&$gameMap[_0x138ec1(0xee)]();let _0x8da395=$gamePlayer['x'],_0x191c75=$gamePlayer['y'],_0x4ee1b9=0x0;if(_0x2dc94d){if(this['_EncounterEffectsFollowerTrigger'])$gameTemp[_0x138ec1(0x158)]=!![];_0x4ee1b9=this['findDiagonalDirectionTo'](_0x8da395,_0x191c75);if(this[_0x138ec1(0x21a)])$gameTemp[_0x138ec1(0x158)]=undefined;this[_0x138ec1(0xa8)](_0x4ee1b9);}else{if(_0x138ec1(0xbb)!==_0x138ec1(0x179)){if(this[_0x138ec1(0x21a)])$gameTemp['_calcChasePathing']=!![];_0x4ee1b9=this[_0x138ec1(0x190)](_0x8da395,_0x191c75);if(this[_0x138ec1(0x21a)])$gameTemp[_0x138ec1(0x158)]=undefined;this['moveStraight'](_0x4ee1b9);}else{const _0x59a82b=_0x1928af(_0x3ba201['$1'])['split'](',')[_0x138ec1(0x166)](_0x68722f=>_0x37694d(_0x68722f));this['_alertBlockVisionRegions']=this[_0x138ec1(0x1bc)]['concat'](_0x59a82b);}}},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x19b)]=function(){const _0x3665f2=_0x16ffc2;if(this[_0x3665f2(0x138)]())return![];this[_0x3665f2(0x1d9)]=this[_0x3665f2(0x1d9)]||{};if(this[_0x3665f2(0x1d9)][_0x3665f2(0x1c6)]!==$gamePlayer['x'])return!![];if(this['_eventAlertChaseCache'][_0x3665f2(0xd8)]!==$gamePlayer['y'])return!![];if(this[_0x3665f2(0x1d9)][_0x3665f2(0x144)]!==this['x'])return!![];if(this[_0x3665f2(0x1d9)]['eventY']!==this['y'])return!![];return![];},Game_Event[_0x16ffc2(0x112)]['updateSelfMovementReturnFromChase']=function(){const _0x5c3c82=_0x16ffc2,_0x6f45a3=this[_0x5c3c82(0xb3)]();if(!_0x6f45a3['returning'])return;let _0x7670b9=_0x6f45a3[_0x5c3c82(0x156)],_0x1c2b55=_0x6f45a3[_0x5c3c82(0x1fc)];if(this['x']===_0x7670b9&&this['y']===_0x1c2b55){if(_0x5c3c82(0xe3)===_0x5c3c82(0xe3))_0x6f45a3[_0x5c3c82(0x218)]=![],this[_0x5c3c82(0x153)]=0x0,this[_0x5c3c82(0x1c9)](_0x6f45a3['returnDir']);else{if([0x6c,0x198][_0x5c3c82(0x128)](_0x1c70cf['code'])){if(_0x41e8f8!=='')_0x2b3ed9+='\x0a';_0x10143e+=_0x573af1[_0x5c3c82(0x10a)][0x0];}}}const _0x3c1e51=Imported[_0x5c3c82(0x17f)]&&$gameMap[_0x5c3c82(0xee)]();let _0xf083be=0x0;if(_0x3c1e51){if(_0x5c3c82(0x148)===_0x5c3c82(0x20b)){switch(this[_0x5c3c82(0x13d)]()){case 0x1:return[0x4,0x1,0x2][_0x5c3c82(0x1b1)](_0x52899b[_0x5c3c82(0x13d)]());case 0x2:return[0x1,0x2,0x3]['contains'](_0x425ebf[_0x5c3c82(0x13d)]());case 0x3:return[0x2,0x3,0x6]['contains'](_0x3ef4b4[_0x5c3c82(0x13d)]());case 0x4:return[0x7,0x4,0x1][_0x5c3c82(0x1b1)](_0x13d9fe['direction']());case 0x6:return[0x9,0x6,0x3][_0x5c3c82(0x1b1)](_0x566141[_0x5c3c82(0x13d)]());case 0x7:return[0x4,0x7,0x8][_0x5c3c82(0x1b1)](_0x3195ba[_0x5c3c82(0x13d)]());case 0x8:return[0x7,0x8,0x9][_0x5c3c82(0x1b1)](_0x58ffb3[_0x5c3c82(0x13d)]());case 0x9:return[0x8,0x9,0x6]['contains'](_0x4f87ac[_0x5c3c82(0x13d)]());}return![];}else _0xf083be=this[_0x5c3c82(0x222)](_0x7670b9,_0x1c2b55),this[_0x5c3c82(0xa8)](_0xf083be);}else _0xf083be=this[_0x5c3c82(0x190)](_0x7670b9,_0x1c2b55),this['moveStraight'](_0xf083be);},VisuMZ[_0x16ffc2(0x220)][_0x16ffc2(0x114)]=Game_Event['prototype'][_0x16ffc2(0x139)],Game_Event[_0x16ffc2(0x112)]['update']=function(){const _0x345a28=_0x16ffc2;VisuMZ[_0x345a28(0x220)][_0x345a28(0x114)][_0x345a28(0x200)](this),this[_0x345a28(0xf1)]();},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0xf1)]=function(){const _0x2ea669=_0x16ffc2;if(!this[_0x2ea669(0xfa)]())return;if(Imported[_0x2ea669(0x17f)]){if(this[_0x2ea669(0x17c)]())return![];}if(this[_0x2ea669(0x211)]())_0x2ea669(0x11d)===_0x2ea669(0x15b)?_0x10615d[_0x2ea669(0xb6)](this,_0x1ef86b[_0x2ea669(0xa2)]):this['updateAlertChase']();else{if(_0x2ea669(0x1d0)==='EGyjx')this['updateAlertReturnWait'](),this['updateAlertIdle']();else{switch(this[_0x2ea669(0x13d)]()){case 0x1:return[0x8,0x9,0x6][_0x2ea669(0x1b1)](_0x38ffad[_0x2ea669(0x13d)]());case 0x2:return[0x7,0x8,0x9][_0x2ea669(0x1b1)](_0xac0df5[_0x2ea669(0x13d)]());case 0x3:return[0x4,0x7,0x8]['contains'](_0x51e8f8['direction']());case 0x4:return[0x9,0x6,0x3][_0x2ea669(0x1b1)](_0x265187[_0x2ea669(0x13d)]());case 0x6:return[0x7,0x4,0x1][_0x2ea669(0x1b1)](_0x118d9a['direction']());case 0x7:return[0x2,0x3,0x6][_0x2ea669(0x1b1)](_0x4ca8e2[_0x2ea669(0x13d)]());case 0x8:return[0x1,0x2,0x3][_0x2ea669(0x1b1)](_0xe6eb15['direction']());case 0x9:return[0x4,0x1,0x2][_0x2ea669(0x1b1)](_0x4426d1[_0x2ea669(0x13d)]());}return![];}}},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x1c1)]=function(){const _0x2f9932=_0x16ffc2,_0x40cda0=this['chaseData'](),_0x5c90b3=this[_0x2f9932(0x1f4)]();if(_0x5c90b3>_0x40cda0[_0x2f9932(0x1d3)]){_0x40cda0['chaseTime']--;if(_0x40cda0[_0x2f9932(0xb2)]>0x0)return;_0x40cda0[_0x2f9932(0xb7)]=![],_0x40cda0[_0x2f9932(0xca)]?(_0x40cda0['returnWaiting']=!![],_0x40cda0[_0x2f9932(0x140)]=_0x40cda0[_0x2f9932(0x197)],$gameTemp['requestBalloon'](this,_0x40cda0['returnStartBalloon'])):$gameTemp[_0x2f9932(0xb6)](this,_0x40cda0['returnEndBalloon']);}else _0x40cda0[_0x2f9932(0xb2)]=_0x40cda0[_0x2f9932(0x198)];},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x177)]=function(){const _0x497434=_0x16ffc2,_0x40ee5c=this[_0x497434(0xb3)]();if(!_0x40ee5c[_0x497434(0x188)])return;_0x40ee5c[_0x497434(0x140)]-=0x1;if(_0x40ee5c[_0x497434(0x140)]<=0x0){if(_0x497434(0x1b9)===_0x497434(0x1b9))_0x40ee5c[_0x497434(0x188)]=![],_0x40ee5c[_0x497434(0x218)]=!![],$gameTemp[_0x497434(0xb6)](this,_0x40ee5c[_0x497434(0xa2)]);else return this[_0x497434(0x127)]===_0x58d1e5&&this[_0x497434(0xcd)](),this['_EncounterEffects_EventChaseData'];}},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x1f5)]=function(){const _0x5e0e66=_0x16ffc2;if($gamePlayer[_0x5e0e66(0x1a9)]())return;const _0x3af6b9=this['chaseData'](),_0x501a40=Math[_0x5e0e66(0x135)](this[_0x5e0e66(0x1f4)]());if(_0x501a40>_0x3af6b9[_0x5e0e66(0x1d3)])return;const _0x4a7188=this[_0x5e0e66(0x149)]();if(_0x4a7188>_0x3af6b9[_0x5e0e66(0x1e6)])return;if(!this[_0x5e0e66(0xb0)]())return;_0x3af6b9[_0x5e0e66(0xb7)]=!![],_0x3af6b9[_0x5e0e66(0xb2)]=_0x3af6b9[_0x5e0e66(0x198)],_0x3af6b9[_0x5e0e66(0x188)]=![],_0x3af6b9[_0x5e0e66(0x218)]=![],$gameTemp['requestBalloon'](this,_0x3af6b9[_0x5e0e66(0xe5)]),_0x3af6b9['reactTime']=_0x3af6b9['reactDelay'];_0x3af6b9['commonEvent']>0x0&&(_0x5e0e66(0x10e)===_0x5e0e66(0xd0)?(this[_0x5e0e66(0x171)]===_0xc123d1&&this[_0x5e0e66(0x202)](),this[_0x5e0e66(0x171)]=this[_0x5e0e66(0x171)][_0x5e0e66(0xe7)](_0x6b6f3f)):$gameTemp[_0x5e0e66(0x1cd)](_0x3af6b9['commonEvent']));if(_0x3af6b9['alertSoundName']!==''){if('qSQZB'===_0x5e0e66(0x1ee)){const _0x19a42f={'name':_0x3af6b9[_0x5e0e66(0x1ec)],'volume':_0x3af6b9[_0x5e0e66(0x13a)],'pitch':_0x3af6b9[_0x5e0e66(0x1cb)],'pan':_0x3af6b9[_0x5e0e66(0x1af)]};AudioManager['playSe'](_0x19a42f);}else{this[_0x5e0e66(0x132)]=this[_0x5e0e66(0xe6)][_0x5e0e66(0x14c)];if(this[_0x5e0e66(0x1fd)])this[_0x5e0e66(0x1fd)][_0x5e0e66(0xcf)]();this[_0x5e0e66(0x1fd)]=new _0xf0a81b(0x1,0x1);}}},Game_Event[_0x16ffc2(0x112)]['getAlertTargets']=function(){const _0x1a71f7=_0x16ffc2,_0x559f64=[$gamePlayer];if($gamePlayer['followers']()['_visible']){if(_0x1a71f7(0x1a3)!=='xeNGH'){if(this[_0x1a71f7(0xc4)]===_0x4158f4)return![];if(this['_alertBlockVisionRegions']===_0x4daa9b)return![];const _0x59729c=this['terrainTag'](_0x4ab09b,_0x580db1);if(this[_0x1a71f7(0xc4)]['includes'](_0x59729c))return!![];const _0x1bd57e=this[_0x1a71f7(0x1da)](_0x436edb,_0x526971);if(this[_0x1a71f7(0x1bc)][_0x1a71f7(0x128)](_0x1bd57e))return!![];return![];}else for(let _0x28f5ee=0x0;_0x28f5ee<$gamePlayer[_0x1a71f7(0x13e)]()[_0x1a71f7(0xa1)][_0x1a71f7(0x15e)];_0x28f5ee++){const _0x4bfd86=$gamePlayer[_0x1a71f7(0x13e)]()[_0x1a71f7(0x1d8)](_0x28f5ee);if(!_0x4bfd86)continue;if(!_0x4bfd86[_0x1a71f7(0x1eb)]())continue;_0x559f64[_0x1a71f7(0xf0)](_0x4bfd86);}}return _0x559f64;},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x1f4)]=function(){const _0xdcd96=_0x16ffc2,_0x475d96=[];_0x475d96[_0xdcd96(0xf0)](this['getAlertDistanceToPlayer']());for(let _0x218a69=0x0;_0x218a69<$gamePlayer[_0xdcd96(0x13e)]()[_0xdcd96(0xa1)]['length'];_0x218a69++){_0x475d96[_0xdcd96(0xf0)](this[_0xdcd96(0x199)](_0x218a69));}return Math[_0xdcd96(0x204)](..._0x475d96);},Game_Event['prototype'][_0x16ffc2(0x194)]=function(){const _0x49bbac=_0x16ffc2;return this[_0x49bbac(0xc0)]($gamePlayer);},Game_Event[_0x16ffc2(0x112)]['getAlertDistanceToFollower']=function(_0x52a56e){const _0x22c112=_0x16ffc2;if(!$gamePlayer[_0x22c112(0x13e)]()['_visible'])return 0x3e7;const _0x120047=$gamePlayer[_0x22c112(0x13e)]()['follower'](_0x52a56e);if(!_0x120047[_0x22c112(0x1eb)]())return 0x3e7;return this['getAlertDistanceToTarget'](_0x120047);},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0xc0)]=function(_0x4e84df){const _0x322bd7=_0x16ffc2,_0x34215d=this['x'],_0x4c2c94=this['y'],_0x1bc7e0=_0x4e84df['x'],_0x21eb03=_0x4e84df['y'],_0x63bb8f=Math[_0x322bd7(0x20e)](_0x1bc7e0-_0x34215d,0x2),_0x591e5c=Math[_0x322bd7(0x20e)](_0x21eb03-_0x4c2c94,0x2);return Math['sqrt'](_0x63bb8f+_0x591e5c);},Game_Event[_0x16ffc2(0x112)]['getAlertAngleToPlayer']=function(_0x3cdef1){const _0x4cdbf1=_0x16ffc2;return this[_0x4cdbf1(0x1e1)]($gamePlayer,_0x3cdef1);},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x110)]=function(_0x24dcd5,_0x47fad5){const _0x29be7e=_0x16ffc2;if(!$gamePlayer[_0x29be7e(0x13e)]()[_0x29be7e(0x1e9)])return 0x3e7;const _0x2c0ba6=$gamePlayer[_0x29be7e(0x13e)]()[_0x29be7e(0x1d8)](_0x24dcd5);if(!_0x2c0ba6[_0x29be7e(0x1eb)]())return 0x3e7;return this[_0x29be7e(0x1e1)](_0x2c0ba6,_0x47fad5);},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0x1e1)]=function(_0x2ddde4,_0x32c68d){const _0x3c0a06=_0x16ffc2,_0x459346=this['x'],_0x13355e=this['y'],_0x51d275=_0x2ddde4['x'],_0x25fe22=_0x2ddde4['y'];let _0x124745=Math[_0x3c0a06(0x141)](_0x25fe22-_0x13355e,_0x51d275-_0x459346)*0xb4/Math['PI'];if(!_0x32c68d){const _0x9e3119=[0x0,0xe1,0x10e,0x13b,0xb4,0x0,0x0,0x87,0x5a,0x2d][this[_0x3c0a06(0x13d)]()];_0x124745+=_0x9e3119,_0x124745+=this[_0x3c0a06(0xb3)]()[_0x3c0a06(0x1e6)]/0x2;}while(_0x124745<0x0)_0x124745+=0x168;while(_0x124745>=0x168)_0x124745-=0x168;return _0x124745;},Game_Event[_0x16ffc2(0x112)][_0x16ffc2(0xb0)]=function(){const _0x1f3290=_0x16ffc2;let _0x3f7ac6=![];const _0x484503=this[_0x1f3290(0x1f4)]();_0x3f7ac6&&(_0x1f3290(0x15f)===_0x1f3290(0x15f)?(console[_0x1f3290(0x1ef)](_0x1f3290(0x151),$gamePlayer['x'],$gamePlayer['y']),console[_0x1f3290(0x1ef)](_0x1f3290(0x129),this['x'],this['y'])):this['_forcedAdvantage']=[]);const _0x138365=this[_0x1f3290(0x106)]();for(const _0x37ee13 of _0x138365){if(!_0x37ee13)continue;let _0x1c5a30=_0x484503,_0x19ea01=this[_0x1f3290(0x1e1)](_0x37ee13,!![]),_0x2725c7=_0x19ea01*Math['PI']/0xb4;while(_0x1c5a30>=0x0){const _0x8289cb=Math[_0x1f3290(0x135)](this['x']+_0x1c5a30*Math[_0x1f3290(0x17b)](_0x2725c7)),_0x38fa1a=Math[_0x1f3290(0x135)](this['y']+_0x1c5a30*Math[_0x1f3290(0xc6)](_0x2725c7));_0x1c5a30-=0x1;if(_0x3f7ac6){if(_0x1f3290(0xa6)===_0x1f3290(0xa6))console[_0x1f3290(0x1ef)](_0x1f3290(0x11f),_0x19ea01,_0x1c5a30,_0x8289cb,_0x38fa1a);else{const _0x3bb7b2=_0x43f464[_0x1f3290(0x220)][_0x1f3290(0x224)][_0x1f3290(0x124)];this['_EncounterEffects_EventChaseData']={'enabled':![],'alerted':![],'alertRange':_0x3bb7b2[_0x1f3290(0x1d4)],'alertDash':_0x3bb7b2[_0x1f3290(0xd3)],'alertLock':_0x3bb7b2['AlertLock'],'chaseTime':_0x3bb7b2['AlertLock'],'fovAngle':_0x3bb7b2['FovAngle'],'showFov':_0x3bb7b2['ShowFoV'],'response':_0x3bb7b2['ResponseType'],'alertBalloon':_0x3ba977[_0x1f3290(0x220)][_0x1f3290(0xaa)](_0x3bb7b2[_0x1f3290(0x1b5)]),'commonEvent':_0x3bb7b2[_0x1f3290(0x1ce)],'reactDelay':_0x3bb7b2['ReactDelay'],'reactTime':_0x3bb7b2['ReactDelay'],'alertSoundName':_0x3bb7b2[_0x1f3290(0x12e)],'alertSoundVolume':_0x3bb7b2[_0x1f3290(0x10c)],'alertSoundPitch':_0x3bb7b2['SoundPitch'],'alertSoundPan':_0x3bb7b2[_0x1f3290(0x11e)],'returnStartBalloon':_0x200981['EncounterEffects'][_0x1f3290(0xaa)](_0x3bb7b2['ReturnStartBalloon']),'returnEndBalloon':_0x24854b[_0x1f3290(0x220)][_0x1f3290(0xaa)](_0x3bb7b2['ReturnEndBalloon']),'returnAfter':_0x3bb7b2[_0x1f3290(0x1ea)],'returnWaiting':![],'returnTime':_0x3bb7b2['ReturnWait'],'returnWait':_0x3bb7b2[_0x1f3290(0xc1)],'returning':![],'returnX':this['x'],'returnY':this['y'],'returnDir':this[_0x1f3290(0x13d)]()};}}if($gameMap['isAlertVisionBlocked'](_0x8289cb,_0x38fa1a))return![];}}return!![];},VisuMZ['EncounterEffects'][_0x16ffc2(0xdd)]=Game_CharacterBase[_0x16ffc2(0x112)][_0x16ffc2(0x159)],Game_CharacterBase[_0x16ffc2(0x112)][_0x16ffc2(0x159)]=function(){const _0x588150=_0x16ffc2;if(this[_0x588150(0x15d)]===Game_Event&&this[_0x588150(0x211)]()&&this[_0x588150(0xb3)]()['alertDash']){if(_0x588150(0x15a)!==_0x588150(0x100))return this['isMovementSucceeded']();else{if(this['_erased'])return![];return this['chaseData']()[_0x588150(0x1e3)];}}return VisuMZ['EncounterEffects'][_0x588150(0xdd)]['call'](this);},VisuMZ['EncounterEffects'][_0x16ffc2(0x206)]=Game_CharacterBase[_0x16ffc2(0x112)][_0x16ffc2(0x16f)],Game_CharacterBase[_0x16ffc2(0x112)][_0x16ffc2(0x16f)]=function(_0x14361c,_0x3f4e8a){const _0x1c9e92=_0x16ffc2;if(this[_0x1c9e92(0x15d)]===Game_Event){if(this[_0x1c9e92(0x131)]()||this['isChaseAlerted']())return;}VisuMZ[_0x1c9e92(0x220)][_0x1c9e92(0x206)][_0x1c9e92(0x200)](this,_0x14361c,_0x3f4e8a);},Game_Interpreter[_0x16ffc2(0x112)][_0x16ffc2(0x12f)]=function(){const _0x5c330b=_0x16ffc2,_0x42f231=$gameMap[_0x5c330b(0xc9)](this['eventId']());if(!_0x42f231)return![];const _0x13980f=$gamePlayer;return _0x42f231['isFacingTowards'](_0x13980f)&&_0x13980f[_0x5c330b(0x1f8)](_0x42f231);},Game_Interpreter[_0x16ffc2(0x112)]['checkEventFacingPlayerBack']=function(){const _0x562eaa=_0x16ffc2,_0x4c19db=$gameMap[_0x562eaa(0xc9)](this[_0x562eaa(0x18c)]());if(!_0x4c19db)return![];const _0xb8958d=$gamePlayer;return _0x4c19db[_0x562eaa(0x163)](_0xb8958d)&&_0xb8958d[_0x562eaa(0x173)](_0x4c19db);},Game_Interpreter['prototype']['checkEventFacingPlayerSide']=function(){const _0x421366=_0x16ffc2,_0x38cce9=$gameMap[_0x421366(0xc9)](this[_0x421366(0x18c)]());if(!_0x38cce9)return![];const _0x1ececf=$gamePlayer;return _0x38cce9[_0x421366(0x14d)](_0x1ececf)&&_0x1ececf[_0x421366(0xf5)](_0x38cce9);},Game_Interpreter[_0x16ffc2(0x112)]['checkPlayerFacingEventFront']=function(){const _0x490e30=_0x16ffc2,_0x181854=$gameMap[_0x490e30(0xc9)](this[_0x490e30(0x18c)]());if(!_0x181854)return![];const _0xfb0be5=$gamePlayer;return _0xfb0be5['isFacingTowards'](_0x181854)&&_0x181854[_0x490e30(0x1f8)](_0xfb0be5);},Game_Interpreter[_0x16ffc2(0x112)][_0x16ffc2(0x175)]=function(){const _0x595ae5=_0x16ffc2,_0xc19466=$gameMap[_0x595ae5(0xc9)](this['eventId']());if(!_0xc19466)return![];const _0x309622=$gamePlayer;return _0x309622[_0x595ae5(0x163)](_0xc19466)&&_0xc19466[_0x595ae5(0x173)](_0x309622);},Game_Interpreter[_0x16ffc2(0x112)][_0x16ffc2(0x170)]=function(){const _0x259ac3=_0x16ffc2,_0x220f8c=$gameMap[_0x259ac3(0xc9)](this[_0x259ac3(0x18c)]());if(!_0x220f8c)return![];const _0x1e3ba1=$gamePlayer;return _0x1e3ba1[_0x259ac3(0x14d)](_0x220f8c)&&_0x220f8c[_0x259ac3(0xf5)](_0x1e3ba1);},VisuMZ[_0x16ffc2(0x220)]['Sprite_Character_update']=Sprite_Character[_0x16ffc2(0x112)][_0x16ffc2(0x139)],Sprite_Character[_0x16ffc2(0x112)][_0x16ffc2(0x139)]=function(){const _0x11d1bf=_0x16ffc2;VisuMZ[_0x11d1bf(0x220)][_0x11d1bf(0x223)][_0x11d1bf(0x200)](this),this[_0x11d1bf(0x184)]();},Sprite_Character['prototype'][_0x16ffc2(0x184)]=function(){const _0x28bb02=_0x16ffc2;this[_0x28bb02(0x21d)]();},Sprite_Character[_0x16ffc2(0x112)][_0x16ffc2(0x21d)]=function(){const _0x52e193=_0x16ffc2;if(this['_alertFovSprite'])return;if(!this[_0x52e193(0x189)])return;this[_0x52e193(0x118)]=new Sprite_AlertFovSprite(this),this[_0x52e193(0x118)]['z']=0x6,this['parent'][_0x52e193(0x12d)](this[_0x52e193(0x118)]),SceneManager[_0x52e193(0xfe)]['_spriteset'][_0x52e193(0xe2)]&&(this[_0x52e193(0x18a)]=new Sprite_AlertFovSprite(this),this[_0x52e193(0x18a)]['z']=0x6,SceneManager[_0x52e193(0xfe)][_0x52e193(0xfd)][_0x52e193(0xe2)]['addChild'](this['_lightContainerAlertFovSprite']));};function Sprite_AlertFovSprite(){const _0x37248f=_0x16ffc2;this[_0x37248f(0xe9)](...arguments);}function _0x39d2(_0x289d38,_0x1bb6d2){const _0x25a55f=_0x25a5();return _0x39d2=function(_0x39d204,_0x2db518){_0x39d204=_0x39d204-0x9d;let _0x168dab=_0x25a55f[_0x39d204];return _0x168dab;},_0x39d2(_0x289d38,_0x1bb6d2);}Sprite_AlertFovSprite['prototype']=Object[_0x16ffc2(0x205)](Sprite[_0x16ffc2(0x112)]),Sprite_AlertFovSprite[_0x16ffc2(0x112)]['constructor']=Sprite_AlertFovSprite,Sprite_AlertFovSprite[_0x16ffc2(0x112)]['initialize']=function(_0x743cba){const _0x9b0e59=_0x16ffc2;this[_0x9b0e59(0x12a)]=_0x743cba,this['_character']=_0x743cba[_0x9b0e59(0xe6)],Sprite[_0x9b0e59(0x112)]['initialize'][_0x9b0e59(0x200)](this),this[_0x9b0e59(0x11c)](),this[_0x9b0e59(0x139)]();},Sprite_AlertFovSprite[_0x16ffc2(0x112)][_0x16ffc2(0x11c)]=function(){const _0x37a49d=_0x16ffc2;this[_0x37a49d(0xe0)]['x']=0.5,this[_0x37a49d(0xe0)]['y']=0.5,this[_0x37a49d(0x132)]=![];if(!this[_0x37a49d(0xe6)])return;if(this[_0x37a49d(0xe6)][_0x37a49d(0x15d)]!==Game_Event)return;this[_0x37a49d(0xa1)]={};},Sprite_AlertFovSprite[_0x16ffc2(0x112)][_0x16ffc2(0x139)]=function(){const _0x2af56f=_0x16ffc2;Sprite[_0x2af56f(0x112)][_0x2af56f(0x139)][_0x2af56f(0x200)](this);if(!this['_character'])return;if(this[_0x2af56f(0xe6)][_0x2af56f(0x15d)]!==Game_Event)return;this['updateBitmap']();if(!this['_data'][_0x2af56f(0x1e3)])return;this[_0x2af56f(0x21f)](),this[_0x2af56f(0x134)]();},Sprite_AlertFovSprite['prototype'][_0x16ffc2(0xde)]=function(){const _0x26e153=_0x16ffc2;if(!this['needsBitmapRedraw']())return;this['_data']=JsonEx[_0x26e153(0x1f7)](this[_0x26e153(0xe6)][_0x26e153(0xb3)]());if(this[_0x26e153(0xa1)][_0x26e153(0x1e3)]&&!this[_0x26e153(0xe6)][_0x26e153(0x14c)])this[_0x26e153(0x178)]();else{this[_0x26e153(0x132)]=this[_0x26e153(0xe6)][_0x26e153(0x14c)];if(this[_0x26e153(0x1fd)])this[_0x26e153(0x1fd)][_0x26e153(0xcf)]();this[_0x26e153(0x1fd)]=new Bitmap(0x1,0x1);}},Sprite_AlertFovSprite['prototype']['needsBitmapRedraw']=function(){const _0x4d3d07=_0x16ffc2,_0x5c136a=this[_0x4d3d07(0xe6)][_0x4d3d07(0xb3)](),_0x4dd270=this[_0x4d3d07(0xa1)];if(_0x5c136a[_0x4d3d07(0x1e3)]!==_0x4dd270[_0x4d3d07(0x1e3)])return!![];if(_0x5c136a['alertRange']!==_0x4dd270[_0x4d3d07(0x1d3)])return!![];if(_0x5c136a[_0x4d3d07(0x1e6)]!==_0x4dd270['fovAngle'])return!![];if(this[_0x4d3d07(0x132)]!==this[_0x4d3d07(0xe6)]['_erased'])return!![];return![];},Sprite_AlertFovSprite[_0x16ffc2(0x112)]['createFovBitmap']=function(){const _0xa66114=_0x16ffc2,_0x1431c0=this[_0xa66114(0xa1)];if(!_0x1431c0[_0xa66114(0x152)])return;const _0x22eff7=VisuMZ[_0xa66114(0x220)][_0xa66114(0x224)]['Alert'],_0xed3550=_0x1431c0['fovAngle'],_0x473b3b=Math[_0xa66114(0xc5)]((_0x1431c0[_0xa66114(0x1d3)]+0.4)*$gameMap['tileWidth']()),_0x3f2f93=_0x22eff7['FovColor1'],_0x17cb38=_0x22eff7[_0xa66114(0x1dc)];this[_0xa66114(0x1fd)]=new Bitmap(_0x473b3b*0x2,_0x473b3b*0x2),this['bitmap'][_0xa66114(0x1a0)](_0x473b3b,_0xed3550,_0x3f2f93,_0x17cb38),this['blendMode']=0x1;},Bitmap[_0x16ffc2(0x112)][_0x16ffc2(0x1a0)]=function(_0x52afbf,_0x5eb7f7,_0x20ef33,_0x4c4cac){const _0x46bfdf=_0x16ffc2,_0x20c041=this[_0x46bfdf(0x20c)],_0xdc75ca=_0x5eb7f7*(Math['PI']/0xb4),_0x3ee60d=_0x52afbf*0x2,_0x4c4fbd=_0x20c041[_0x46bfdf(0x19d)](_0x52afbf,_0x52afbf,0x18,_0x52afbf,_0x52afbf,_0x52afbf);_0x4c4fbd['addColorStop'](0x0,_0x20ef33),_0x4c4fbd['addColorStop'](0.85,_0x4c4cac),_0x4c4fbd[_0x46bfdf(0x1f1)](0x1,_0x20ef33),_0x20c041[_0x46bfdf(0x1aa)](),_0x20c041[_0x46bfdf(0x1ba)]=_0x4c4fbd,_0x20c041[_0x46bfdf(0x1bf)](),_0x20c041[_0x46bfdf(0x102)](_0x52afbf,_0x52afbf),_0x20c041[_0x46bfdf(0x196)](_0x3ee60d,_0x52afbf),_0x20c041[_0x46bfdf(0x1db)](_0x52afbf,_0x52afbf,_0x52afbf,0x0,_0xdc75ca),_0x20c041[_0x46bfdf(0x196)](_0x52afbf,_0x52afbf),_0x20c041[_0x46bfdf(0x17a)](),_0x20c041['restore'](),this['_baseTexture']['update']();},Sprite_AlertFovSprite['prototype'][_0x16ffc2(0x21f)]=function(){const _0x527f20=_0x16ffc2;this['x']=this[_0x527f20(0x12a)]['x'],this['y']=this[_0x527f20(0x12a)]['y']-this['_source']['height']/0x2;},Sprite_AlertFovSprite[_0x16ffc2(0x112)][_0x16ffc2(0x134)]=function(){const _0x40a07c=_0x16ffc2,_0x169674=this[_0x40a07c(0xa1)];let _0x4ca5e6=_0x169674[_0x40a07c(0x1e6)]/-0x2;_0x4ca5e6+=[0x0,0x87,0x5a,0x2d,0xb4,0x0,0x0,0xe1,0x10e,0x13b][this[_0x40a07c(0xe6)][_0x40a07c(0x14b)]],this[_0x40a07c(0xfb)]=_0x4ca5e6;};function _0x25a5(){const _0x44f212=['parameters','zDJAz','SoundVolume','31859CtcdkK','nDgxC','LIGHT\x20BULB','getAlertAngleToFollower','PefKp','prototype','OBTqP','Game_Event_update','_EncounterEffectsTouchDirectionLock','BattleCore','trim','_alertFovSprite','amsHp','fDEFq','troop','initMembers','wOkaC','SoundPan','Data:\x20','RKNBQ','TouchDirectionLock','ARRAYEVAL','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Alert','MUSIC-NOTE','ReturnPosition','_EncounterEffects_EventChaseData','includes','Event:\x20','_source','moveTowardPlayer','isRepelEncounters','addChild','SoundName','checkEventFacingPlayerFront','ANNOYED','isChaseReturning','_characterErased','description','updateAngle','round','match','initEncounterEffectsData','isMoving','update','alertSoundVolume','LIGHT','LureEvent','direction','followers','value','returnTime','atan2','_processEncounterDirectionLock','LureFlat','eventX','BattleManager_startBattle','parse','reactDelay','ZkBFF','getAlertAngleToPlayer','flee','_direction','_erased','isFacingSideways','hfwNZ','32415VaAvtd','NoAdvantage','Player:\x20','showFov','_moveRouteIndex','setup','Game_System_initialize','returnX','ARRAYJSON','_calcChasePathing','isDashing','SLbTv','ptfyx','toLowerCase','constructor','length','aPaeN','runAdvantageCommonEvents','StayPosition','clearPageSettings','isFacingAway','USER-DEFINED\x202','Game_Event_updateSelfMovement','map','FovAngle','return\x200','encounterProgressValue','isAlertVisionBlocked','yvibP','BlXRf','fmWsX','checkEncounterEffectsStringTags','setBalloonPose','checkPlayerFacingEventSide','_forcedAdvantage','LIGHTBULB','isPositionBackOf','Game_Follower_isVisible','checkPlayerFacingEventBack','getForcedAdvantage','updateAlertReturnWait','createFovBitmap','JllDL','fill','cos','isPreventSelfMovement','tileWidth','ShowFoV','VisuMZ_1_EventsMoveCore','_surprise','BULB','processLureEncounters','FRUSTRATION','updateEncounterEffects','VFqEj','reactTime','756MkbFJR','returnWaiting','parent','_lightContainerAlertFovSprite','UPMer','eventId','updateSelfMovement','name','RegExp','findDirectionTo','format','Normal','processRepelEncounters','getAlertDistanceToPlayer','Advantage','lineTo','returnWait','alertLock','getAlertDistanceToFollower','isLureEncounters','needsSmartChaseUpdate','EVAL','createRadialGradient','tileset','status','drawAlertCircle','USER-DEFINED\x201','isNormalPriority','xeNGH','zYnmj','ANGER','AlertLock','updateSelfMovementAlerted','blendMode','getAlertStealthMode','save','shiftForcedAdvantage','ShHfu','debugShowDirections','DAuDb','alertSoundPan','note','contains','COBWEB','setupEncounterEffectsData','toUpperCase','ResponseBalloon','ZZZ','page','ResponseType','tpwHy','fillStyle','exit','_alertBlockVisionRegions','updateSelfMovementReturnFromChase','JSON','beginPath','ReturnStartBalloon','updateAlertChase','initEventChaseData','FollowerTrigger','dRDko','setupPageSettings','playerX','4caNJBD','WDjEK','setDirection','AlertSoundName','alertSoundPitch','STR','reserveCommonEvent','CommonEvent','AlertShowFov','EGyjx','HgBTA','addForcedAdvantage','alertRange','AlertRange','setValue','qIKix','hflkP','follower','_eventAlertChaseCache','regionId','arc','FovColor2','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','USER-DEFINED\x205','_trigger','hrgPn','getAlertAngleToTarget','commonEvent','enabled','chase','ARRAYNUM','fovAngle','ARRAYFUNC','checkEventTriggerTouch','_visible','ReturnHome','actor','alertSoundName','AlertSoundPitch','qSQZB','log','vaugg','addColorStop','uWgad','ConvertParams','getAlertDistanceToClosest','updateAlertIdle','2521473PoKYem','makeDeepCopy','isPositionFrontOf','LOVE','chance','Surprise','returnY','bitmap','MUSIC','isEventRunning','call','initEncounterEffectsEffects','initEncounterEffects_ForcedAdvantage','isFacingTowards','min','create','Game_CharacterBase_setBalloonPose','list','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','JzTpg','pZWbv','JLmUi','context','fLFwd','pow','RepelLure','alertDash','isChaseAlerted','Game_Event_clearPageSettings','ReactDelay','moveAwayFromPlayer','SLEEP','Game_Event_setupPageSettings','FUNC','returning','Game_Event_lock','_EncounterEffectsFollowerTrigger','oJNLu','YHyMJ','createAlertFovSprite','lock','updatePosition','EncounterEffects','setupEncounterEffectsNotetags','findDiagonalDirectionTo','Sprite_Character_update','Settings','checkEventFollowerTriggerTouch','terrainTag','804912VcixeT','no\x20advantage','BlockVisionRegion','AlertResponse','_data','returnEndBalloon','RepelVariable','5578692KPkdBG','Queue','yvslQ','isInBoat','executeMoveDir8','AdvantageSetQueue','ConvertBallonTextToID','Game_Map_setup','NOTE','ReturnEndBalloon','HEART','_preemptive','isAlertLineOfVisionClear','checkEncounterEffectsStringTagsChase','chaseTime','chaseData','RepelEvent','preemptive','requestBalloon','alerted','isVisible','rush','moveTypeRandom','dBibH','NUM','startBattle','updateSelfMovementSmartChase','LureRate','getAlertDistanceToTarget','ReturnWait','version','setAlertStealthMode','_alertBlockVisionTags','ceil','sin','random','turnTowardPlayer','event','returnAfter','visibleFollowers','registerCommand','refresh','returnStartBalloon','destroy','Knais','AdvantageAddQueue','MUSICNOTE','AlertDash','Game_Player_initMembers','220rWgRdJ','AlertSoundPan','checkForcedAdvantage','playerY','STRUCT','response','rKhvM','Preemptive','Game_CharacterBase_isDashing','updateBitmap',',\x20\x20This\x20Y:\x20','anchor','AlertHideFov','_lightContainer','cPrmo','filter','alertBalloon','_character','concat','setForcedAdvantage','initialize','isInShip','setupEncounterEffectsEffects','BoatMultiplier','EjEDn','isSupportDiagonalMovement','isJumping','push','updateAlert','AlertStealthMode','BattleManager_onEncounter','_alertStealthMode','isPositionSideOf','BlockVisionTag','tcYZx','LureVariable','initEncounterEffects','isChaseEnabled','angle','7764992ciPLlA','_spriteset','_scene','USER-DEFINED\x204','oOYyV',',\x20Event\x20Y:\x20','moveTo','AlertCommonEvent','eventY','surprise','getAlertTargets','StealthMode','split','163791ZmPnAv'];_0x25a5=function(){return _0x44f212;};return _0x25a5();}