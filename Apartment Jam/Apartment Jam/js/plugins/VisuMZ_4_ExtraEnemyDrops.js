//=============================================================================
// VisuStella MZ - Extra Enemy Drops
// VisuMZ_4_ExtraEnemyDrops.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_ExtraEnemyDrops = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ExtraEnemyDrops = VisuMZ.ExtraEnemyDrops || {};
VisuMZ.ExtraEnemyDrops.version = 1.09;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.09] [ExtraEnemyDrops]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Extra_Enemy_Drops_VisuStella_MZ
 * @base VisuMZ_4_ExtraEnemyDrops
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, RPG Maker MZ limits enemies to only drop up to 3 items max and
 * at very limited drop rates. This plugin allows you to add more than 3 items
 * at drop and at custom rates that aren't limited to a demoninator value.
 * 
 * This plugin also gives the functionality to force specific drops or give any
 * additional bonus drops to make some battles give different rewards despite
 * having the same types of enemies encountered before.
 * 
 * And if you have the VisuStella Battle Core, drops can be visible on the
 * battlefield and spring out of the enemies as they collapse!
 *
 * Features include all (but not limited to) the following:
 * 
 * * More than 3 drops per enemy can be given.
 * * Drop probability is a percentile value and not a demoniator setting.
 * * Make Conditional Drops that only appear depending on the events that took
 *   place during the battle.
 * * JavaScript notetags that let you make conditional drops based on code.
 * * New plugin commands to allow for forced drops and/or bonus drops.
 * * Forced drops will override any existing drops made from the enemy troop.
 * * Bonus drops will be additional drops in addition to those dropped from the
 *   enemy troop.
 * * If you have the Battle Core, drops become visible on the battlefield.
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
 * Forced Enemy Drops
 * 
 * - If forced enemy drops are used (through a Plugin Command), then all other
 * drop-related functions will be ignored in favor of the forced enemy drops.
 * This is because all forced drops are made to favor a specific set of drops
 * ordered by the game developer.
 * 
 * - This will prevent visual drops from appearing, too. Any visual drops that
 * have already been made present will also disappear.
 *
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * Visual Drops (Battle Core)
 *
 * - Drops become visible on the battlefield. Once an enemy is defeated, visual
 * drops will appear out of their former position. These drops are shown as
 * icons, representing the EXP, Gold, and Drop Items an enemy will yield if the
 * battle is won.
 * 
 * - This feature can be disabled.
 * 
 * - If this feature is enabled, there is a slight change to the drop system.
 * Previously, drops are determined at the end of battle. Now, to visibly
 * appear upon the defeat of an enemy, they are then determined at the moment
 * of their death.
 * 
 * - What this means is, if an EXP or Gold boost is applied after they've been
 * defeated, it will not be retroactive and apply to the drops that become
 * visible on the battlefield. As a result, the player has to be tactical in
 * when they defeat the enemies after applying the EXP and Gold buffs.
 * 
 * - Depending on the Plugin Parameter settings, if an enemy revives, their
 * drops can be reset. If the reset is allowed, the player can acquire a whole
 * different set of drops upon the enemy's subsequent defeats. This feature can
 * be turned off.
 * 
 * - A reviving enemy will cause its visual drops to disappear.
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
 * === General Drop-Related Notetags ===
 * 
 * The following notetags are related to giving enemies additional drops with
 * more control over probability rates.
 * 
 * ---
 *
 * <Item Drop id: x%>
 * <Item Drop id To id: x%>
 * <Item Drop name: x%>
 * 
 * <Weapon Drop id: x%>
 * <Weapon Drop id To id: x%>
 * <Weapon Drop name: x%>
 * 
 * <Armor Drop id: x%>
 * <Armor Drop id To id: x%>
 * <Armor Drop name: x%>
 *
 * - Used for: Enemy Notetags
 * - Gives the enemy 'x' percent chance to drop the designated item, weapon,
 *   or armor.
 * - Replace 'id' with the ID of the item, weapon, or armor you wish to assign
 *   to the enemy as a potential drop.
 *   - For 'id To id' variants, insert the starting ID and ending ID for the
 *     items, weapons, and/or armors you wish to add as a batch. This will
 *     ignore any entries without a name or with ----- in its name.
 * - With the 'name' notetag variant, replace 'name' with the name of the item,
 *   weapon, or armor you wish to assign to the enemy as a potential drop.
 * - Replace 'x' with a number representing the percentile probability chance
 *   of successfully acquiring that item as a drop.
 * - Insert multiple copies of these notetags if you wish to include more drops
 *   for the enemies.
 * 
 * Examples:
 * 
 * <Item Drop 5: 20%>
 * <Item Drop 5 To 10: 20%>
 * <Item Drop Potion: 30%>
 * 
 * <Weapon Drop 27: 45%>
 * <Weapon Drop 27 To 37: 45%>
 * <Weapon Drop Blade of Reckoning: 55%>
 * 
 * <Armor Drop 19: 72%>
 * <Armor Drop 19 To 23: 72%>
 * <Armor Drop Flame Shield: 90%>
 *
 * ---
 *
 * <Drops>
 *  Item id: x%
 *  Item id To id: x%
 *  Item name: x%
 *  Weapon id: x%
 *  Weapon id To id: x%
 *  Weapon name: x%
 *  Armor id: x%
 *  Armor id To id: x%
 *  Armor name: x%
 * </Drops>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - Creates a batch list of item, weapon, armor drops.
 * - This isn't any different than creating individual copies of the above
 *   notetags as far as results go, but some may prefer this approach to make
 *   the drop table look "cleaner".
 * - Replace 'id' with the ID of the item, weapon, or armor you wish to assign
 *   to the enemy as a potential drop.
 *   - For 'id To id' variants, insert the starting ID and ending ID for the
 *     items, weapons, and/or armors you wish to add as a batch. This will
 *     ignore any entries without a name or with ----- in its name.
 * - With the 'name' notetag variant, replace 'name' with the name of the item,
 *   weapon, or armor you wish to assign to the enemy as a potential drop.
 * - Replace 'x' with a number representing the percentile probability chance
 *   of successfully acquiring that item as a drop.
 * 
 * Example:
 *
 * <Drops>
 *  Item 5: 20%
 *  Item Potion: 30%
 *  Weapon 27: 45%
 *  Weapon Blade of Reckoning: 55%
 *  Armor 72: 72%
 *  Armor Flame Shield: 90%
 * </Drops>
 *
 * ---
 * 
 * === Conditional Drop-Related Notetags ===
 * 
 * Conditional drops are drops that only appear once specific conditions have
 * been met. For each condition met, their chances of dropping can be raised
 * higher or lower.
 * 
 * ---
 * 
 * <Conditional Item id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Item id Drop>
 * 
 * <Conditional Item id To id Drops>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Item id To id Drops>
 * 
 * <Conditional Item name Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Item name Drop>
 * 
 * <Conditional Weapon id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Weapon id Drop>
 * 
 * <Conditional Weapon id To id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Weapon id To id Drop>
 * 
 * <Conditional Weapon name Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Weapon name Drop>
 * 
 * <Conditional Armor id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Armor id Drop>
 * 
 * <Conditional Armor id To id Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Armor id To id Drop>
 * 
 * <Conditional Armor name Drop>
 *  condition: +x%
 *  condition: +x%
 *  condition: -x%
 *  condition: -x%
 * </Conditional Armor name Drop>
 *
 * - Used for: Enemy Notetags
 * - Create conditional item, weapon, and/or armor drops for this enemy.
 * - Insert multiples of these notetags if you want more than one conditional
 *   drop for this enemy.
 * - Use the associated item, weapon, or armor type notetag for the type of
 *   conditional drop you want for the enemy.
 * - Replace 'id' with the ID number of the item, weapon, or armor to drop.
 *   - For 'id To id' variants, insert the starting ID and ending ID for the
 *     items, weapons, and/or armors you wish to add as a batch. This will
 *     ignore any entries without a name or with ----- in its name.
 * - Replace 'name' with the name of the item, weapon, or armor to drop.
 * - Replace 'condition' with any of the conditions listed in below section.
 * - Replace 'x' with the increase or decrease in percentage drop chance.
 * 
 * ---
 * 
 * -=-=- Condition List -=-=-
 *
 * Replace 'condition' in the notetags in the above section with any of the
 * following to make conditions. These conditions are also used in the Plugin
 * Parameters for the default conditions, too.
 * 
 * ---
 *
 * x >= y
 * x > y
 * x === y
 * x !== y
 * x < y
 * x <= y
 * 
 * - Replace 'x' and 'y' with any of the following:
 *
 * - 'Switch x' (replace 'x' with a number) for switch x's current state.
 * - 'TRUE', 'FALSE', 'ON', 'OFF' for the opposite x/y value.
 * - Using any of these boolean modifiers must be paired with '===' or '!=='
 *
 * - 'Variable x' (replace 'x' with a number) for variable x's current value.
 * - A numeric value representing a hard number.
 * - '50%' or any other percentile number to represent a rate.
 * - '0.5' or any other float number to represent a rate.
 * 
 * - 'Item id Count' for the number of specific items the party owns.
 *   - Replace 'id' with the ID of the item.
 * - 'Item name Count' for the number of specific items the party owns.
 *   - Replace 'name' with the ID of the item.
 * 
 * - 'Weapon id Count' for the number of specific weapons the party owns.
 *   - Replace 'id' with the ID of the weapon.
 * - 'Weapon name Count' for the number of specific weapons the party owns.
 *   - Replace 'name' with the ID of the weapon.
 * 
 * - 'Armor id Count' for the number of specific armors the party owns.
 *   - Replace 'id' with the ID of the armor.
 * - 'Armor name Count' for the number of specific armors the party owns.
 *   - Replace 'name' with the ID of the armor.
 * 
 * - 'Alive Members' for the number of alive party members when drops are
 *   being determined.
 * 
 * - 'Battle Members' for the number of participating party members in battle.
 * 
 * - 'Battle Turns' for the number of turns passed in battle when drops are
 *   being determined.
 * 
 * - 'Dead Members' for the number of dead party members when drops are
 *   being determined.
 * 
 * - 'Death Turn' for the turn the enemy died. If an enemy was revived during
 *   battle, then take the most recent turn the enemy has died.
 * 
 * - 'Enemy Level' for the current level of the enemy if using the 'level'
 *   property for the Game_Enemy object.
 * 
 * - 'Party Gold' for the party's current gold value when drops are
 *   being determined.
 * 
 * - 'Party Members' for the number of total party members in battle.
 * 
 * - 'Times type id Struck' for the number of times the enemy was struck
 *   with 'type' 'id' during battle.
 * - Replace 'type' with 'Element' for the number of times the enemy was struck
 *   with specific elemental damage.
 * - Replace 'type' with 'Item' for the number of times the enemy was struck
 *   with a specific item.
 * - Replace 'type' with 'Skill' for the number of times the enemy was struck
 *   with a specific skill.
 * - Replace 'type' with 'SType' for the number of times the enemy was struck
 *   by any skill of a specifici skill type.
 * - Replace 'type' with 'State' for the number of times the enemy was struck
 *   with a specific state.
 * - Replace 'id' with the type's ID.
 * 
 * - 'Times type name Struck' for the number of times the enemy was struck
 *   with 'type' 'name' during battle.
 * - Replace 'type' with 'Element' for the number of times the enemy was struck
 *   with specific elemental damage.
 * - Replace 'type' with 'Item' for the number of times the enemy was struck
 *   with a specific item.
 * - Replace 'type' with 'Skill' for the number of times the enemy was struck
 *   with a specific skill.
 * - Replace 'type' with 'SType' for the number of times the enemy was struck
 *   by any skill of a specifici skill type.
 * - Replace 'type' with 'State' for the number of times the enemy was struck
 *   with a specific state.
 * - Replace 'name' with the type's name in the database.
 * 
 * ---
 * 
 * Always
 * 
 * - This condition is always met. Use this to set a base drop chance.
 * 
 * ---
 * 
 * Random x%
 * 
 * - Offers a random 'x' chance to increase/decrease drop chance.
 * 
 * ---
 * 
 * Last Strike type id
 * Last Strike type name
 * 
 * - Checks the condition to see if the last struck action against the enemy
 *   was done by a specific action.
 * - Replace 'type' with 'Element' for the last struck element.
 * - Replace 'type' with 'Item' for the last struck item if it was an item.
 *   This will override the 'Skill' and 'SType' types.
 * - Replace 'type' with 'Skill' for the last struck skill if it was a skill.
 *   This will override the 'Item' type.
 * - Replace 'type' with 'SType' for the last struck skill type if it was
 *   a skill. This will override the 'Item' type.
 * - Replace 'type' with 'State' for the last struck state.
 * 
 * ---
 * 
 * Examples:
 * 
 * The following are some examples on how these conditional drops are used:
 * 
 * ---
 * 
 * <Conditional Item Potion Drop>
 *  Always: +20%
 *  Death Turn <= 3: +50%
 * </Conditional Item Potion Drop>
 * 
 * - Conditional drop is the Potion item.
 * - It has a base chance of 20%.
 * - If the enemy was defeated during or before turn 3, increase the drop
 *   chance by another 50%.
 * 
 * ---
 * 
 * <Conditional Weapon Mithril Sword Drop>
 *  Always: +100%
 *  Times SType Magic Struck: -10%
 *  Times SType Spell Struck: -10%
 * </Conditional Weapon Mithril Sword Drop>
 * 
 * - Conditional drop is the Mithril Sword weapon.
 * - It starts off with a 100% chance of a drop.
 * - Each time the enemy is struck with 'Magic' or 'Spell' type attacks,
 *   the drop chance decreases by 10%.
 * 
 * ---
 * 
 * <Conditional Armor Elemental Cloak Drop>
 *  Times Element Fire Struck: +10%
 *  Times Element Ice Struck: +10%
 *  Times Element Thunder Struck: +10%
 *  Times Element Physical Struck: -20%
 *  Times Skill Element Force Struck: +50%
 * </Conditional Armor Elemental Cloak Drop>
 * 
 * - Conditional drop is the Elemental Cloak armor.
 * - Each time the enemy is struck by 'Fire', 'Ice', or 'Thunder' damage,
 *   increase the drop chance by 10%.
 * - Each time the enemy is struck by 'Physical' damage, decrease the drop
 *   chance by 10%.
 * - Each time the enemy is struck by the specific skill 'Element Force',
 *   increase the drop chance by +50%.
 * 
 * ---
 *
 * === JavaScript Notetags: Drops ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * give more control over conditional enemy drop manipulation.
 *
 * ---
 *
 * <JS Drops>
 *  code
 *  code
 *  drops.push($dataItems[1]);
 *  drops.push($dataWeapons[2]);
 *  drops.push($dataArmors[3]);
 * </JS Drops>
 *
 * - Used for: Enemy Notetags
 * - Replace 'code' with JavaScript code to make conditional checks in order
 *   to determine which items, weapons, and/or armors would be added to the
 *   drop pool.
 * - The 'drops' variable is an array which contains all of the currently
 *   existing drops from the enemy this notetag is on. It will be returned as
 *   an array upon running the notetag's JavaScript code.
 * - Add to or remove from the 'drops' variable to change up its contents.
 *
 * ---
 * 
 * === Visual Drop-Related Notetags ===
 * 
 * For those who want to customize how some items, weapons, or armors appear as
 * visual drops, use the following notetags.
 * 
 * ---
 *
 * <Visual Drop Icon: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Forces the drop item, weapon, or armor to appear as a different icon.
 * - Replace 'x' with the ID of the icon you wish to show.
 *
 * ---
 *
 * <Visual Drop Rarity: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Sets the item, weapon, or armor drop to be a specific rarity.
 * - Replace 'x' with a rarity value between 0 and 10. The settings applied to
 *   the visual drop will be based on their Plugin Parameter settings.
 * - This is mutually exclusive from the <Visual Drop Tint Color: r, g, b, k>
 *   and <Visual Drop Tint Duration: x> notetags.
 *
 * ---
 *
 * <Visual Drop Tint Color: r, g, b, k>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Sets the tint of visual drop item when it's visible on the battlefield.
 * - Replace 'r' with a red value between -255 and 255.
 * - Replace 'g' with a green value between -255 and 255.
 * - Replace 'b' with a blue value between -255 and 255.
 * - Replace 'k' with a gray value between 0 and 255.
 * - This does not work with the <Visual Drop Rarity: x> notetag.
 *
 * ---
 *
 * <Visual Drop Tint Duration: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Sets the duration of the tint effect.
 * - Replace 'x' with the number of frames to tint the visual drop. The lower
 *   the number, the faster the tint pulses. The higher the number, the slower
 *   the tint pulses.
 *
 * ---
 *
 * <Visual Drop Spawn SFX: filename>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When the item, weapon, or armor's visual drop spawns on the battlefield,
 *   play a sound effect.
 * - Replace 'filename' with the name of a sound effect from the game project's
 *   /audio/se/ folder. Do not include the file extension.
 * - Example: <Visual Drop Spawn SFX: Float1>
 *
 * ---
 *
 * <Visual Drop Bounce Height: x%>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Alters how bouncy this visual drop is as it spawns on the battlefield.
 * - Replace 'x' with a percentage value on how much higher the visual drop
 *   should bounce than normal (whatever is set in the Plugin Parameters).
 *
 * ---
 *
 * <Visual Drop Bounce SFX: filename>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - When the item, weapon, or armor's visual drop bounces on the battlefield,
 *   play a sound effect.
 * - Replace 'filename' with the name of a sound effect from the game project's
 *   /audio/se/ folder. Do not include the file extension.
 * - Example: <Visual Drop Bounce SFX: Float1>
 *
 * ---
 *
 * <Visual Drop Flag: Rainbow>
 * <Visual Drop Flag: Additive>
 * <Visual Drop Flag: Multiply>
 * <Visual Drop Flag: Screen>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adds visual effects to visual drop when it's on the battlefield.
 * - The 'Rainbow' effect causes the icon's hue to constantly change.
 * - The 'Additive', 'Multiply', and 'Screen', effects are blend modes.
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
 * === Bonus Reward Plugin Commands ===
 * 
 * ---
 *
 * Bonus Rewards: Clear
 * - Clears all bonus drops.
 *
 * ---
 *
 * Bonus Rewards: Set EXP
 * - Determines additional EXP the player will get in battle by this value.
 *
 *   EXP:
 *   - Determines additional EXP the player will get in battle by this value.
 *
 * ---
 *
 * Bonus Rewards: Set Gold
 * - Determines additional Gold the player will get in battle by this value.
 *
 *   Gold:
 *   - Determines additional Gold the player will get in battle by this value.
 *
 * ---
 *
 * Bonus Rewards: Add Item
 * - Adds the bonus drop the player earns from this battle to have the
 *   following item given at a specific quantity.
 *
 *   Item ID:
 *   - Which item do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the bonus drop to give the player.
 *
 * ---
 *
 * Bonus Rewards: Add Weapon
 * - Adds the bonus drop the player earns from this battle to have the
 *   following weapon given at a specific quantity.
 *
 *   Weapon ID:
 *   - Which weapon do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the bonus drop to give the player.
 *
 * ---
 *
 * Bonus Rewards: Add Armor
 * - Adds the bonus drop the player earns from this battle to have the
 *   following armor given at a specific quantity.
 *
 *   Armor ID:
 *   - Which armor do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the bonus drop to give the player.
 *
 * ---
 * 
 * === Forced Reward Plugin Commands ===
 * 
 * ---
 *
 * Forced Rewards: Clear
 * - Clears all forced drops.
 *
 * ---
 *
 * Forced Rewards: Set EXP
 * - Change the amount of EXP the player will get in battle to this value.
 *
 *   EXP:
 *   - Change the amount of EXP the player will get in battle to this value.
 *
 * ---
 *
 * Forced Rewards: Set Gold
 * - Change the amount of Gold the player will get in battle to this value.
 *
 *   Gold:
 *   - Change the amount of Gold the player will get in battle to this value.
 *
 * ---
 *
 * Forced Rewards: Add Item
 * - Adds the forced drop the player earns from this battle to have the
 *   following item given at a specific quantity.
 *
 *   Item ID:
 *   - Which item do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the forced drop to give the player.
 *
 * ---
 *
 * Forced Rewards: Add Weapon
 * - Adds the forced drop the player earns from this battle to have the
 *   following weapon given at a specific quantity.
 *
 *   Weapon ID:
 *   - Which weapon do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the forced drop to give the player.
 *
 * ---
 *
 * Forced Rewards: Add Armor
 * - Adds the forced drop the player earns from this battle to have the
 *   following armor given at a specific quantity.
 *
 *   Armor ID:
 *   - Which armor do you wish to give the player?
 *
 *   Quantity:
 *   - How many copies of the forced drop to give the player.
 *
 * ---
 * 
 * === Visual Drop Plugin Commands ===
 * 
 * ---
 *
 * Visual Drops: Visibility
 * - Sets the visibility of visual drops during battle.
 *
 *   Visible:
 *   - Show visual drops during battle?
 *   - This will be reset at the start of next battle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These settings govern the way Visual Drops are handled. These are global
 * rules that apply to all Visual Drops made through this plugin, from the
 * calculations made to determine their radius distance to the number of
 * bounces the drops make to whether or not the drops have shadows.
 *
 * ---
 *
 * General
 * 
 *   Enable?
 *   - Enable Visual Drops?
 *   - You know you want to.
 * 
 *   Reviving Resets Drops:
 *   - Do reviving enemies reset drops?
 *   - For more information, read the Extra Features section.
 *
 * ---
 *
 * Position
 * 
 *   Base Radius:
 *   - Base radius amount for drops.
 * 
 *   +Radius Per Drop:
 *   - Increase radius by this much per extra drop.
 * 
 *   Spin Degrees:
 *   - How many degrees do you want the icon to spin in its largest bounce?
 *   - Use 0 for no spin.
 * 
 *   Delay Between Drops:
 *   - How many milliseconds to delay the appearance of each visual drop?
 *   - Use 0 for no delay.
 * 
 *   Field of View Y:
 *   - What's the distortion rate for the field of view for the item
 *     positioning distribution.
 *
 * ---
 *
 * Bounce
 * 
 *   Bounce Duration:
 *   - Duration of the highest bounce.
 * 
 *   Bounce Total:
 *   - How many times do you want visual drops to bounce?
 *   - Use 0 for no bounces.
 * 
 *   Bounce Height:
 *   - The maximum height for the visual drops to fly out at.
 *   - This will decrease with each bounce.
 * 
 *   Bounce Reduction:
 *   - The rate at which each bounce reduces the duration and height by.
 *
 * ---
 *
 * Bounce SFX
 * 
 *   Filename:
 *   - Filename of the sound effect played.
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
 * Icons
 * 
 *   Offset Y Rate:
 *   - At which rate do you want to offset the visual drop icons off the
 *     ground by?
 * 
 *   Movement Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 * ---
 *
 * Shadow
 * 
 *   Show Shadow:
 *   - Show the shadow sprite?
 * 
 *   Shadow Filename:
 *   - Filename used for the visual drop shadow.
 * 
 *   Shadow Offset X:
 *   - Offset the shadow sprite X by this amount.
 *   - Negative numbers go left. Positive numbers go right.
 * 
 *   Shadow Offset Y:
 *   - Offset the shadow sprite Y by this amount.
 *   - Negative numbers go up. Positive numbers go down.
 * 
 *   Shadow Opacity:
 *   - Opacity level of the shadow.
 *   - 0 for transparent. 255 for opaque.
 *
 * ---
 *
 * Opacity
 * 
 *   Fade After Bounce:
 *   - Fade out the visual drops after they finish bouncing?
 * 
 *   Fade After Delay:
 *   - How many milliseconds to delay the fading by if the above option is
 *     selected?
 * 
 *   Opacity Fade Speed:
 *   - What speed should the opacity level fade out by?
 *   - Higher numbers are faster.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: EXP Settings
 * ============================================================================
 *
 * EXP can be depicted as a visual drop from the enemy. Depending on how much
 * EXP the enemy would give, a different setting can be used, determining the
 * icon used and which rarity effect to apply.
 *
 * ---
 *
 * General
 * 
 *   Show EXP Drop:
 *   - Show visual drops for EXP?
 *
 * ---
 *
 * Settings 1 through 10
 * 
 *   EXP Value:
 *   - How much EXP minimum to use this setting?
 * 
 *   Icon:
 *   - Which icon to use for this setting?
 * 
 *   Rarity:
 *   - Which rarity to use for this setting?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold can be depicted as a visual drop from the enemy. Depending on how much
 * Gold the enemy would give, a different setting can be used, determining the
 * icon used and which rarity effect to apply.
 *
 * ---
 *
 * General
 * 
 *   Show Gold Drop:
 *   - Show visual drops for Gold?
 *
 * ---
 *
 * Settings 1 through 10
 * 
 *   Gold Value:
 *   - How much Gold minimum to use this setting?
 * 
 *   Icon:
 *   - Which icon to use for this setting?
 * 
 *   Rarity:
 *   - Which rarity to use for this setting?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Enemy Drops Settings
 * ============================================================================
 *
 * These are the usual enemy drops that you're used to. These will factor in
 * extra drops, conditional drops, and drops added through JavaScript as well.
 * You can choose to have the enemy drops reveal their real icons or keep it
 * a surprise for when the player finally access the Victory Aftermath screen.
 *
 * ---
 *
 * General
 * 
 *   Show Enemy Drops:
 *   - Show visual drops for enemy drops?
 * 
 *   Use Unique Icons:
 *   - Show the icons of the drops?
 *   - If not, use the ones below.
 *
 * ---
 *
 * Common Icons
 * 
 *   Common Item Icon:
 *   Common Weapon Icon:
 *   Common Armor Icon:
 *   - What icon do you want to use for common items, weapons, and armors?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Rarity Settings
 * ============================================================================
 *
 * Visual Drop rarities are found in 11 tiers, No Rarity and Rarities 1 through
 * 10. How you use these rarities is up to you, the game dev. However, items of
 * a matching rarity level will display the same tints, durations, and flags.
 * Although more flags can be added later through notetags, matching rarities
 * will exhibit a common ground of flags.
 *
 * ---
 *
 * General
 * 
 *   Show Rarities:
 *   - Show visual effects for different rarities?
 *
 * ---
 *
 * No Rarity and Rarities 1 through 10
 * 
 *   Tint:
 *   - Tone settings for this rarity.
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - What duration do you want for this rarity?
 * 
 *   Flags:
 *   - What flags do you want to apply to this rarity?
 *   - Flags:
 *     - Rainbow
 *     - Additive
 *     - Multiply
 *     - Screen
 *     - Bounce Height x%
 *     - Bounce SFX: filename 
 *     - Spawn SFX: filename
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
 * Version 1.09: January 18, 2024
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: January 13, 2022
 * * Feature Update!
 * ** Using a space at the start of a line inbetween batch notetags will no
 *    longer cause the contents inside to not work. Update made by Olivia.
 *
 * Version 1.07: June 18, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.06: March 19, 2021
 * * Bug Fixes!
 * ** Console no longer displays debug messages from last version.
 *    Fix made by Irina.
 * 
 * Version 1.05: February 12, 2021
 * * Bug Fixes!
 * ** Opacity Fade Speed Plugin Parameter now allows you to alter the value
 *    up to 255 now. Fix made by Irina.
 * ** EXP Setting 10 and Gold Setting 10 will no longer be hard limited.
 *    Fix made by Irina.
 * 
 * Version 1.04: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Many of the notetags now have a batch variant to add items, weapons, or
 *    armors into the drop pool en masse. Updated by Yanfly.
 * 
 * Version 1.03: November 22, 2020
 * * Compatibility Update!
 * ** Non-conditional drops should be more compatible with other plugins.
 *    Update made by Yanfly.
 * 
 * Version 1.02: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.01: October 18, 2020
 * * Feature Update!
 * ** Bounce SFX pitch plugin parameter is now uncapped.
 *
 * Version 1.00: October 9, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusRewardsClear
 * @text Bonus Rewards: Clear
 * @desc Clears all bonus drops.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusExpSet
 * @text Bonus Rewards: Set EXP
 * @desc Determines additional EXP the player will get in battle by this value.
 *
 * @arg value:eval
 * @text EXP
 * @desc Determines additional EXP the player will get in battle by this value.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusGoldSet
 * @text Bonus Rewards: Set Gold
 * @desc Determines additional Gold the player will get in battle by this value.
 *
 * @arg value:eval
 * @text Gold
 * @desc Determines additional Gold the player will get in battle by this value.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusAddItem
 * @text Bonus Rewards: Add Item
 * @desc Adds the bonus drop the player earns from this battle to have
 * the following item given at a specific quantity.
 *
 * @arg id:num
 * @text Item ID
 * @type item
 * @desc Which item do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the bonus drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusAddWeapon
 * @text Bonus Rewards: Add Weapon
 * @desc Adds the bonus drop the player earns from this battle to have
 * the following weapon given at a specific quantity.
 *
 * @arg id:num
 * @text Weapon ID
 * @type weapon
 * @desc Which weapon do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the bonus drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BonusAddArmor
 * @text Bonus Rewards: Add Armor
 * @desc Adds the bonus drop the player earns from this battle to have
 * the following armor given at a specific quantity.
 *
 * @arg id:num
 * @text Armor ID
 * @type armor
 * @desc Which armor do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the bonus drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedRewardsClear
 * @text Forced Rewards: Clear
 * @desc Clears all forced drops.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedExpSet
 * @text Forced Rewards: Set EXP
 * @desc Change the amount of EXP the player will get in battle to this value.
 *
 * @arg value:eval
 * @text EXP
 * @desc Change the amount of EXP the player will get in battle to this value.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedGoldSet
 * @text Forced Rewards: Set Gold
 * @desc Change the amount of Gold the player will get in battle to this value.
 *
 * @arg value:eval
 * @text Gold
 * @desc Change the amount of Gold the player will get in battle to this value.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedAddItem
 * @text Forced Rewards: Add Item
 * @desc Adds the forced drop the player earns from this battle to have
 * the following item given at a specific quantity.
 *
 * @arg id:num
 * @text Item ID
 * @type item
 * @desc Which item do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the forced drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedAddWeapon
 * @text Forced Rewards: Add Weapon
 * @desc Adds the forced drop the player earns from this battle to have
 * the following weapon given at a specific quantity.
 *
 * @arg id:num
 * @text Weapon ID
 * @type weapon
 * @desc Which weapon do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the forced drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ForcedAddArmor
 * @text Forced Rewards: Add Armor
 * @desc Adds the forced drop the player earns from this battle to have
 * the following armor given at a specific quantity.
 *
 * @arg id:num
 * @text Armor ID
 * @type armor
 * @desc Which armor do you wish to give the player?
 * @default 1
 *
 * @arg quantity:eval
 * @text Quantity
 * @desc How many copies of the forced drop to give the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VisualDropVisible
 * @text Visual Drops: Visibility
 * @desc Sets the visibility of visual drops during battle.
 *
 * @arg Visible:eval
 * @text Visible
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual drops during battle?
 * This will be reset at the start of next battle.
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
 * @param Template
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param VisualDrops
 * @text Visual Drops
 *
 * @param General:struct
 * @text General Settings
 * @parent VisualDrops
 * @type struct<General>
 * @desc General settings regarding Visual Drops.
 * @default {"General":"","Enable:eval":"true","resetOnRevive:eval":"true","Position":"","radius:num":"20","radiusPerIcon:num":"5","angle:num":"1800","msDelay:num":"250","yRateFoV:num":"0.44","Bounce":"","duration:num":"60","bounces:num":"10","height:num":"100","bounceReduction:num":"0.75","SFX":"","sfxFilename:str":"Coin","sfxVolume:num":"90","sfxPitch:num":"100","sfxPan:num":"0","Icons":"","iconOffsetRate:num":"-1.75","iconJumpEasing:str":"Linear","Shadow":"","showShadow:eval":"true","shadowFilename:str":"Shadow1","shadowOffsetX:num":"0","shadowOffsetY:num":"8","shadowOpacity:num":"255","Opacity":"","fadeAfterBounce:eval":"false","fadeAfterDelay:num":"2000","opacityFadeOut:num":"8"}
 *
 * @param Exp:struct
 * @text EXP Settings
 * @parent VisualDrops
 * @type struct<Exp>
 * @desc Settings regarding EXP for Visual Drops.
 * @default {"General":"","show:eval":"true","Setting1":"","Value1:num":"1","Icon1:num":"73","Rarity1:num":"0","Setting2":"","Value2:num":"50","Icon2:num":"73","Rarity2:num":"1","Setting3":"","Value3:num":"100","Icon3:num":"89","Rarity3:num":"2","Setting4":"","Value4:num":"500","Icon4:num":"89","Rarity4:num":"3","Setting5":"","Value5:num":"1000","Icon5:num":"88","Rarity5:num":"4","Setting6":"","Value6:num":"2500","Icon6:num":"88","Rarity6:num":"5","Setting7":"","Value7:num":"5000","Icon7:num":"87","Rarity7:num":"6","Setting8":"","Value8:num":"10000","Icon8:num":"87","Rarity8:num":"7","Setting9":"","Value9:num":"25000","Icon9:num":"84","Rarity9:num":"8","Setting10":"","Value10:num":"50000","Icon10:num":"84","Rarity10:num":"9"}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @parent VisualDrops
 * @type struct<Gold>
 * @desc Settings regarding Gold for Visual Drops.
 * @default {"General":"","show:eval":"true","Setting1":"","Value1:num":"1","Icon1:num":"314","Rarity1:num":"0","Setting2":"","Value2:num":"50","Icon2:num":"314","Rarity2:num":"1","Setting3":"","Value3:num":"100","Icon3:num":"196","Rarity3:num":"2","Setting4":"","Value4:num":"500","Icon4:num":"196","Rarity4:num":"3","Setting5":"","Value5:num":"1000","Icon5:num":"313","Rarity5:num":"4","Setting6":"","Value6:num":"5000","Icon6:num":"313","Rarity6:num":"5","Setting7":"","Value7:num":"10000","Icon7:num":"303","Rarity7:num":"6","Setting8":"","Value8:num":"50000","Icon8:num":"303","Rarity8:num":"7","Setting9":"","Value9:num":"100000","Icon9:num":"300","Rarity9:num":"8","Setting10":"","Value10:num":"500000","Icon10:num":"300","Rarity10:num":"9"}
 *
 * @param Drop:struct
 * @text Enemy Drops Settings
 * @parent VisualDrops
 * @type struct<Drop>
 * @desc Settings regarding enemy drops for Visual Drops.
 * @default {"General":"","show:eval":"true","uniqueIcons:eval":"true","CommonIcons":"","commonItemIcon:num":"208","commonWeaponIcon:num":"210","commonArmorsIcon:num":"210"}
 *
 * @param Rarity:struct
 * @text Rarity Settings
 * @parent VisualDrops
 * @type struct<Rarity>
 * @desc Settings regarding enemy drops for Visual Drops.
 * @default {"General":"","show:eval":"true","Setting0":"","Tint0:eval":"[0, 0, 0, 0]","Duration0:num":"180","Flags0:arraystr":"[]","Setting1":"","Tint1:eval":"[0, 30, 60, 20]","Duration1:num":"180","Flags1:arraystr":"[]","Setting2":"","Tint2:eval":"[30, 60, 0, 40]","Duration2:num":"160","Flags2:arraystr":"[]","Setting3":"","Tint3:eval":"[60, 0, 30, 60]","Duration3:num":"140","Flags3:arraystr":"[]","Setting4":"","Tint4:eval":"[0, 60, 60, 80]","Duration4:num":"120","Flags4:arraystr":"[]","Setting5":"","Tint5:eval":"[60, 60, 0, 100]","Duration5:num":"100","Flags5:arraystr":"[]","Setting6":"","Tint6:eval":"[60, 0, 60, 120]","Duration6:num":"80","Flags6:arraystr":"[]","Setting7":"","Tint7:eval":"[0, 0, 60, 140]","Duration7:num":"70","Flags7:arraystr":"[]","Setting8":"","Tint8:eval":"[0, 60, 0, 160]","Duration8:num":"60","Flags8:arraystr":"[]","Setting9":"","Tint9:eval":"[60, 0, 0, 180]","Duration9:num":"50","Flags9:arraystr":"[]","Setting10":"","Tint10:eval":"[0, 0, 0, 0]","Duration10:num":"40","Flags10:arraystr":"[\"Rainbow\"]","SpecialEffects":"","RainbowHueSpeed:num":"4"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable Visual Drops?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Visual Drops?
 * You know you want to.
 * @default true
 *
 * @param resetOnRevive:eval
 * @text Reviving Resets Drops 
 * @parent General
 * @type boolean
 * @on Resets
 * @off Already Set
 * @desc Do reviving enemies reset drops?
 * @default true
 * 
 * @param Position
 *
 * @param radius:num
 * @text Base Radius
 * @parent Position
 * @type number
 * @min 1
 * @desc Base radius amount for drops.
 * @default 20
 *
 * @param radiusPerIcon:num
 * @text +Radius Per Drop
 * @parent Position
 * @type number
 * @min 0
 * @desc Increase radius by this much per extra drop.
 * @default 5
 *
 * @param angle:num
 * @text Spin Degrees
 * @parent Position
 * @type number
 * @min 0
 * @desc How many degrees do you want the icon to spin in its
 * largest bounce? Use 0 for no spin.
 * @default 1800
 *
 * @param msDelay:num
 * @text Delay Between Drops
 * @parent Position
 * @type number
 * @min 0
 * @desc How many milliseconds to delay the appearance of each
 * visual drop? Use 0 for no delay.
 * @default 250
 *
 * @param yRateFoV:num
 * @text Field of View Y
 * @parent Position
 * @desc What's the distortion rate for the field of view
 * for the item positioning distribution.
 * @default 0.44
 * 
 * @param Bounce
 *
 * @param duration:num
 * @text Bounce Duration
 * @parent Bounce
 * @type number
 * @min 1
 * @desc Duration of the highest bounce.
 * @default 60
 *
 * @param bounces:num
 * @text Bounce Total
 * @parent Bounce
 * @type number
 * @min 0
 * @desc How many times do you want visual drops to bounce?
 * Use 0 for no bounces.
 * @default 10
 *
 * @param height:num
 * @text Bounce Height
 * @parent Bounce
 * @type number
 * @min 0
 * @desc The maximum height for the visual drops to fly out at.
 * This will decrease with each bounce.
 * @default 100
 *
 * @param bounceReduction:num
 * @text Bounce Reduction
 * @parent Bounce
 * @desc The rate at which each bounce reduces the duration
 * and height by.
 * @default 0.75
 * 
 * @param SFX
 * @text Bounce SFX
 *
 * @param sfxFilename:str
 * @text Filename
 * @parent SFX
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Coin
 *
 * @param sfxVolume:num
 * @text Volume
 * @parent SFX
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param sfxPitch:num
 * @text Pitch
 * @parent SFX
 * @type number
 * @max 100
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param sfxPan:num
 * @text Pan
 * @parent SFX
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param Icons
 *
 * @param iconOffsetRate:num
 * @text Offset Y Rate
 * @parent Icons
 * @desc At which rate do you want to offset the visual drop
 * icons off the ground by?
 * @default -1.75
 *
 * @param iconJumpEasing:str
 * @text Movement Easing
 * @parent Icons
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine.
 * @default Linear
 * 
 * @param Shadow
 *
 * @param showShadow:eval
 * @text Show Shadow
 * @parent Shadow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the shadow sprite?
 * @default true
 *
 * @param shadowFilename:str
 * @text Shadow Filename
 * @parent Shadow
 * @type file
 * @dir img/system/
 * @desc Filename used for the visual drop shadow.
 * @default Shadow1
 *
 * @param shadowOffsetX:num
 * @text Shadow Offset X
 * @parent Shadow
 * @desc Offset the shadow sprite X by this amount.
 * Negative numbers go left. Positive numbers go right.
 * @default 0
 *
 * @param shadowOffsetY:num
 * @text Shadow Offset Y
 * @parent Shadow
 * @desc Offset the shadow sprite Y by this amount.
 * Negative numbers go up. Positive numbers go down.
 * @default 8
 *
 * @param shadowOpacity:num
 * @text Shadow Opacity
 * @parent Shadow
 * @type number
 * @min 0
 * @max 255
 * @desc Opacity level of the shadow.
 * 0 for transparent. 255 for opaque.
 * @default 255
 * 
 * @param Opacity
 *
 * @param fadeAfterBounce:eval
 * @text Fade After Bounce
 * @parent Opacity
 * @type boolean
 * @on Fade
 * @off Keep
 * @desc Fade out the visual drops after they finish bouncing?
 * @default false
 *
 * @param fadeAfterDelay:num
 * @text Fade After Delay
 * @parent Opacity
 * @type number
 * @min 0
 * @desc How many milliseconds to delay the fading by if the
 * above option is selected?
 * @default 2000
 *
 * @param opacityFadeOut:num
 * @text Opacity Fade Speed
 * @parent Opacity
 * @type number
 * @max 255
 * @desc What speed should the opacity level fade out by?
 * Higher numbers are faster.
 * @default 8
 *
 */
/* ----------------------------------------------------------------------------
 * EXP Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Exp:
 * 
 * @param General
 *
 * @param show:eval
 * @text Show EXP Drop
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual drops for EXP?
 * @default true
 * 
 * @param Setting1
 * @text Setting 1
 *
 * @param Value1:num
 * @text EXP Value
 * @parent Setting1
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 1
 *
 * @param Icon1:num
 * @text Icon
 * @parent Setting1
 * @desc Which icon to use for this setting?
 * @default 73
 *
 * @param Rarity1:num
 * @text Rarity
 * @parent Setting1
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 0
 * 
 * @param Setting2
 * @text Setting 2
 *
 * @param Value2:num
 * @text EXP Value
 * @parent Setting2
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 50
 *
 * @param Icon2:num
 * @text Icon
 * @parent Setting2
 * @desc Which icon to use for this setting?
 * @default 73
 *
 * @param Rarity2:num
 * @text Rarity
 * @parent Setting2
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 1
 * 
 * @param Setting3
 * @text Setting 3
 *
 * @param Value3:num
 * @text EXP Value
 * @parent Setting3
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 100
 *
 * @param Icon3:num
 * @text Icon
 * @parent Setting3
 * @desc Which icon to use for this setting?
 * @default 89
 *
 * @param Rarity3:num
 * @text Rarity
 * @parent Setting3
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 2
 * 
 * @param Setting4
 * @text Setting 4
 *
 * @param Value4:num
 * @text EXP Value
 * @parent Setting4
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 500
 *
 * @param Icon4:num
 * @text Icon
 * @parent Setting4
 * @desc Which icon to use for this setting?
 * @default 89
 *
 * @param Rarity4:num
 * @text Rarity
 * @parent Setting4
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 3
 * 
 * @param Setting5
 * @text Setting 5
 *
 * @param Value5:num
 * @text EXP Value
 * @parent Setting5
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 1000
 *
 * @param Icon5:num
 * @text Icon
 * @parent Setting5
 * @desc Which icon to use for this setting?
 * @default 88
 *
 * @param Rarity5:num
 * @text Rarity
 * @parent Setting5
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 4
 * 
 * @param Setting6
 * @text Setting 6
 *
 * @param Value6:num
 * @text EXP Value
 * @parent Setting6
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 2500
 *
 * @param Icon6:num
 * @text Icon
 * @parent Setting6
 * @desc Which icon to use for this setting?
 * @default 88
 *
 * @param Rarity6:num
 * @text Rarity
 * @parent Setting6
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 5
 * 
 * @param Setting7
 * @text Setting 7
 *
 * @param Value7:num
 * @text EXP Value
 * @parent Setting7
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 5000
 *
 * @param Icon7:num
 * @text Icon
 * @parent Setting7
 * @desc Which icon to use for this setting?
 * @default 87
 *
 * @param Rarity7:num
 * @text Rarity
 * @parent Setting7
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 6
 * 
 * @param Setting8
 * @text Setting 8
 *
 * @param Value8:num
 * @text EXP Value
 * @parent Setting8
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 10000
 *
 * @param Icon8:num
 * @text Icon
 * @parent Setting8
 * @desc Which icon to use for this setting?
 * @default 87
 *
 * @param Rarity8:num
 * @text Rarity
 * @parent Setting8
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 7
 * 
 * @param Setting9
 * @text Setting 9
 *
 * @param Value9:num
 * @text EXP Value
 * @parent Setting9
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 25000
 *
 * @param Icon9:num
 * @text Icon
 * @parent Setting9
 * @desc Which icon to use for this setting?
 * @default 84
 *
 * @param Rarity9:num
 * @text Rarity
 * @parent Setting9
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 8
 * 
 * @param Setting10
 * @text Setting 10
 *
 * @param Value10:num
 * @text EXP Value
 * @parent Setting10
 * @type number
 * @desc How much EXP minimum to use this setting?
 * @default 50000
 *
 * @param Icon10:num
 * @text Icon
 * @parent Setting10
 * @desc Which icon to use for this setting?
 * @default 84
 *
 * @param Rarity10:num
 * @text Rarity
 * @parent Setting10
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 9
 *
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param General
 *
 * @param show:eval
 * @text Show Gold Drop
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual drops for Gold?
 * @default true
 * 
 * @param Setting1
 * @text Setting 1
 *
 * @param Value1:num
 * @text Gold Value
 * @parent Setting1
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 1
 *
 * @param Icon1:num
 * @text Icon
 * @parent Setting1
 * @desc Which icon to use for this setting?
 * @default 314
 *
 * @param Rarity1:num
 * @text Rarity
 * @parent Setting1
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 0
 * 
 * @param Setting2
 * @text Setting 2
 *
 * @param Value2:num
 * @text Gold Value
 * @parent Setting2
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 50
 *
 * @param Icon2:num
 * @text Icon
 * @parent Setting2
 * @desc Which icon to use for this setting?
 * @default 314
 *
 * @param Rarity2:num
 * @text Rarity
 * @parent Setting2
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 1
 * 
 * @param Setting3
 * @text Setting 3
 *
 * @param Value3:num
 * @text Gold Value
 * @parent Setting3
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 100
 *
 * @param Icon3:num
 * @text Icon
 * @parent Setting3
 * @desc Which icon to use for this setting?
 * @default 196
 *
 * @param Rarity3:num
 * @text Rarity
 * @parent Setting3
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 2
 * 
 * @param Setting4
 * @text Setting 4
 *
 * @param Value4:num
 * @text Gold Value
 * @parent Setting4
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 500
 *
 * @param Icon4:num
 * @text Icon
 * @parent Setting4
 * @desc Which icon to use for this setting?
 * @default 196
 *
 * @param Rarity4:num
 * @text Rarity
 * @parent Setting4
 * @type number
 * @desc Which rarity to use for this setting?
 * @default 3
 * 
 * @param Setting5
 * @text Setting 5
 *
 * @param Value5:num
 * @text Gold Value
 * @parent Setting5
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 1000
 *
 * @param Icon5:num
 * @text Icon
 * @parent Setting5
 * @desc Which icon to use for this setting?
 * @default 313
 *
 * @param Rarity5:num
 * @text Rarity
 * @parent Setting5
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 4
 * 
 * @param Setting6
 * @text Setting 6
 *
 * @param Value6:num
 * @text Gold Value
 * @parent Setting6
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 5000
 *
 * @param Icon6:num
 * @text Icon
 * @parent Setting6
 * @desc Which icon to use for this setting?
 * @default 313
 *
 * @param Rarity6:num
 * @text Rarity
 * @parent Setting6
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 5
 * 
 * @param Setting7
 * @text Setting 7
 *
 * @param Value7:num
 * @text Gold Value
 * @parent Setting7
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 10000
 *
 * @param Icon7:num
 * @text Icon
 * @parent Setting7
 * @desc Which icon to use for this setting?
 * @default 303
 *
 * @param Rarity7:num
 * @text Rarity
 * @parent Setting7
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 6
 * 
 * @param Setting8
 * @text Setting 8
 *
 * @param Value8:num
 * @text Gold Value
 * @parent Setting8
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 50000
 *
 * @param Icon8:num
 * @text Icon
 * @parent Setting8
 * @desc Which icon to use for this setting?
 * @default 303
 *
 * @param Rarity8:num
 * @text Rarity
 * @parent Setting8
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 7
 * 
 * @param Setting9
 * @text Setting 9
 *
 * @param Value9:num
 * @text Gold Value
 * @parent Setting9
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 100000
 *
 * @param Icon9:num
 * @text Icon
 * @parent Setting9
 * @desc Which icon to use for this setting?
 * @default 300
 *
 * @param Rarity9:num
 * @text Rarity
 * @parent Setting9
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 8
 * 
 * @param Setting10
 * @text Setting 10
 *
 * @param Value10:num
 * @text Gold Value
 * @parent Setting10
 * @type number
 * @desc How much Gold minimum to use this setting?
 * @default 500000
 *
 * @param Icon10:num
 * @text Icon
 * @parent Setting10
 * @desc Which icon to use for this setting?
 * @default 300
 *
 * @param Rarity10:num
 * @text Rarity
 * @parent Setting10
 * @type number
 * @min 0
 * @max 10
 * @desc Which rarity to use for this setting?
 * @default 9
 *
 */
/* ----------------------------------------------------------------------------
 * Drop Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Drop:
 *
 * @param General
 *
 * @param show:eval
 * @text Show Enemy Drops
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual drops for enemy drops?
 * @default true
 *
 * @param uniqueIcons:eval
 * @text Use Unique Icons
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the icons of the drops?
 * If not, use the ones below.
 * @default true
 *
 * @param CommonIcons
 * @text Common Icons
 *
 * @param commonItemIcon:num
 * @text Common Item Icon
 * @parent CommonIcons
 * @desc What icon do you want to use for common items?
 * @default 208
 *
 * @param commonWeaponIcon:num
 * @text Common Weapon Icon
 * @parent CommonIcons
 * @desc What icon do you want to use for common weapons?
 * @default 210
 *
 * @param commonArmorsIcon:num
 * @text Common Armor Icon
 * @parent CommonIcons
 * @desc What icon do you want to use for common armors?
 * @default 210
 *
 */
/* ----------------------------------------------------------------------------
 * Rarity Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Rarity:
 *
 * @param General
 *
 * @param show:eval
 * @text Show Rarities
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show visual effects for different rarities?
 * @default true
 * 
 * @param Setting0
 * @text No Rarity
 *
 * @param Tint0:eval
 * @text Tint
 * @parent Setting0
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Duration0:num
 * @text Duration
 * @parent Setting0
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 180
 *
 * @param Flags0:arraystr
 * @text Flags
 * @parent Setting0
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting1
 * @text Rarity 1
 *
 * @param Tint1:eval
 * @text Tint
 * @parent Setting1
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 30, 60, 20]
 *
 * @param Duration1:num
 * @text Duration
 * @parent Setting1
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 180
 *
 * @param Flags1:arraystr
 * @text Flags
 * @parent Setting1
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting2
 * @text Rarity 2
 *
 * @param Tint2:eval
 * @text Tint
 * @parent Setting2
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [30, 60, 0, 40]
 *
 * @param Duration2:num
 * @text Duration
 * @parent Setting2
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 160
 *
 * @param Flags2:arraystr
 * @text Flags
 * @parent Setting2
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting3
 * @text Rarity 3
 *
 * @param Tint3:eval
 * @text Tint
 * @parent Setting3
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [60, 0, 30, 60]
 *
 * @param Duration3:num
 * @text Duration
 * @parent Setting3
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 140
 *
 * @param Flags3:arraystr
 * @text Flags
 * @parent Setting3
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting4
 * @text Rarity 4
 *
 * @param Tint4:eval
 * @text Tint
 * @parent Setting4
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 60, 60, 80]
 *
 * @param Duration4:num
 * @text Duration
 * @parent Setting4
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 120
 *
 * @param Flags4:arraystr
 * @text Flags
 * @parent Setting4
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting5
 * @text Rarity 5
 *
 * @param Tint5:eval
 * @text Tint
 * @parent Setting5
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [60, 60, 0, 100]
 *
 * @param Duration5:num
 * @text Duration
 * @parent Setting5
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 100
 *
 * @param Flags5:arraystr
 * @text Flags
 * @parent Setting5
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting6
 * @text Rarity 6
 *
 * @param Tint6:eval
 * @text Tint
 * @parent Setting6
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [60, 0, 60, 120]
 *
 * @param Duration6:num
 * @text Duration
 * @parent Setting6
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 80
 *
 * @param Flags6:arraystr
 * @text Flags
 * @parent Setting6
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting7
 * @text Rarity 7
 *
 * @param Tint7:eval
 * @text Tint
 * @parent Setting7
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 60, 140]
 *
 * @param Duration7:num
 * @text Duration
 * @parent Setting7
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 70
 *
 * @param Flags7:arraystr
 * @text Flags
 * @parent Setting7
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting8
 * @text Rarity 8
 *
 * @param Tint8:eval
 * @text Tint
 * @parent Setting8
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 60, 0, 160]
 *
 * @param Duration8:num
 * @text Duration
 * @parent Setting8
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 60
 *
 * @param Flags8:arraystr
 * @text Flags
 * @parent Setting8
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting9
 * @text Rarity 9
 *
 * @param Tint9:eval
 * @text Tint
 * @parent Setting9
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [60, 0, 0, 180]
 *
 * @param Duration9:num
 * @text Duration
 * @parent Setting9
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 50
 *
 * @param Flags9:arraystr
 * @text Flags
 * @parent Setting9
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default []
 * 
 * @param Setting10
 * @text Rarity 10
 *
 * @param Tint10:eval
 * @text Tint
 * @parent Setting10
 * @desc Tone settings for this rarity.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @param Duration10:num
 * @text Duration
 * @parent Setting10
 * @type number
 * @min 1
 * @desc What duration do you want for this rarity?
 * @default 40
 *
 * @param Flags10:arraystr
 * @text Flags
 * @parent Setting10
 * @type combo[]
 * @option Rainbow
 * @option Additive
 * @option Multiply
 * @option Screen
 * @option Bounce Height x%
 * @option Spawn SFX: filename
 * @desc What flags do you want to apply to this rarity?
 * @default ["Rainbow"]
 * 
 * @param SpecialEffects
 * @text Special Effects
 *
 * @param RainbowHueSpeed:num
 * @text Rainbow Hue Speed
 * @parent SpecialEffects
 * @type number
 * @min 1
 * @desc How fast do you want the Rainbow effect to change hue?
 * @default 4
 *
 */
//=============================================================================

function _0x25a8(){const _0x15737c=['deadMembers','anchor','Rarity','TintDuration0','getItemIdWithName','Item','fadeAfterBounce','radiusPerIcon','55xRmThF','getItemDropIcons','13648qMcvll','findTargetDropSprite','elementId','wgmva','tYuJb','isWeapon','nmZYQ','version','makeDeepCopy','setHue','ARMOR','ForcedAddWeapon','skillTypes','elements','format','Game_BattlerBase_eraseState','restoreVisualDrops','VcDOh','updateDuration','createJS','BOUNCE\x20HEIGHT\x20%1%','angle','checkValidDrop','uniqueIcons','addExtraEnemyDropsBatch','addTimesStruck','gold','opacity','ARRAYEVAL','_forcedRewards','dropItemRate','blendMode','startSpecialSFX','isItem','pjVRX','_baseX','opacityRate','Flags%1','284632gySAuw','iconWidth','ViCpZ','getDeathTurn','YyzqN','ADDITIVE','update','flags','hQnCd','initMembers','turnCount','floor','kKdyY','BonusAddWeapon','aXhvE','timesStruckSkills','420ZeqfnV','makeDropItems','dropItems','baseY','jyLQm','bounces','ConvertParams','RNIFX','drops','MkoEX','find','commonItemIcon','setForcedGold','2487918mabKho','createShadowSprite','pow','addForcedWeaponDrop','lastStruckItem','NUM','rllqB','updatePosition','shadowOffsetY','bounceSFX','BonusGoldSet','members','_elementIDs','EVAL','rheck','Duration%1','STRUCT','Rarity%1','trim','SGmFD','tXijW','getDatabaseKind','clearBonusRewards','description','JTXnv','isAlive','battler','toUpperCase','nFDPE','Settings','addBonusWeaponDrop','none','VisuMZ_1_BattleCore','children','note','timesStruckItems','Skill','replace','ZSbBW','ssTsu','PpINn','TbAWV','aYkes','removeVisualDrops','SCREEN','4vuTjCm','timesStruckElements','_armorIDs','STATE','oRsVw','_data','applyTimesStruck','commonWeaponIcon','targetOpacity','Flags0','denominator','rarityDuration','goldTotal','addBonusArmorDrop','\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Arguments\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20enemy\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20drops\x20=\x20arguments[0];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Array\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20drops;\x0a\x20\x20\x20\x20','mWKLK','STR','eraseState','getDatabase','applyEasing','lnESA','timesStruckItem','jumpHeight','enemy','STATES','ITEMS','createIconSprite','_baseY','14yLGRDl','_stypeIDs','ecnMu','DxIEL','VisualDropVisible','Scene_Boot_onDatabaseLoaded','General','match','commonArmorsIcon','Game_Troop_expTotal','attackElements','showShadow','item','dataId','getDatabaseItem','opacityFadeOut','GcgkO','JBNDs','xoHWh','RainbowHueSpeed','tkJfH','min','_rotationConstant','sfupb','timesStruck%1','createDrops','status','BonusAddItem','MULTIPLY','Enable','addExtraEnemyDropsConditional','uZWMG','concat','process_VisuMZ_ExtraEnemyDrops_Drops_Notetags','_visualDropSprites','hasForcedDrops','deathTurn','max','gMXWc','expTotal','resetVisualDrops','ForcedRewardsClear','BattleManager_initMembers','duration','opacityModifier','slice','mUdzO','_battlerContainer','getDatabaseItemID','goldRate','vjDnV','WJPYX','shadowOpacity','WEAPON','updateTint','addForcedArmorDrop','16392LocOsr','Game_Action_applyItemUserEffect','rarityFrames','meetsExtraEnemyDropsCondition','shift','isDead','constructor','iconIndex','bind','475844OooOQD','sin','updateFlagData','getSkillIdWithName','SKILL','split','BonusAddArmor','YEbse','round','name','Spriteset_Battle_createLowerLayer','_skillIDs','_visualDropsVisible','setup','_weaponIDs','RAINBOW','lastStruckSType','registerCommand','HChwi','Tint%1','prototype','SDREs','PolfN','addNewState','_stateIDs','ZsUVm','addChild','onDatabaseLoaded','rotationConstant','subject','_iconSprite','show','calculateJumpHeight','updateRotation','addBonusItemDrop','2907396MNmueo','getArmorIdWithName','yadTY','ParseEnemyNotetags','level','process_VisuMZ_ExtraEnemyDrops_JS_Notetags','map','push','GhURv','ELEMENT','lastStruckElement','lastStruckState','setRarity','yBZan','Game_Enemy_makeDropItems','ForcedAddArmor','setTargetDestination','lastStruck%1','lastStruckType','registerDeathTurn','ExtraEnemyDrops','setFrame','iconJumpEasing','_shadowSprite','getElementIdWithName','ExdaX','Gold','_conditionalDropsTrackedData','addExtraEnemyDropsJS','sfxPitch','Game_Enemy_setup','expRate','random','_scene','exp','BMxWm','Game_Battler_onBattleStart','LwwDU','IsHyA','timesStruckStates','clamp','calculatePosition','yRateFoV','clearForcedRewards','kind','bounceReduction','VisuMZ_1_ElementStatusCore','toLowerCase','parameters','ARRAYSTR','zAjlK','ForcedExpSet','Ioeoz','msDelay','ojjDE','azCTs','_spriteset','DIAoI','PKvFo','hIwKv','targetY','Game_BattlerBase_addNewState','clear','sttex','deathStateId','setBonusGold','ForcedAddItem','urGTJ','isSceneBattle','updateOpacity','JSON','value','sPghk','setForcedExp','setBonusExp','createSprites','addExtraEnemyDrops','iconOffsetRate','rNQGk','battleMembers','exit','Value%1','VisualDrops','createChildren','getStateIdWithName','iTJqw','getWeaponIdWithName','isArmor','Game_Troop_clear','addExtraEnemyDropsSingles','charAt','SType','sortDrops','WEAPONS','5sTJsLa','Drop','filter','addForcedItemDrop','getExpGoldDropIcon','BonusExpSet','Visible','resetOnRevive','updateJumpHeight','damage','bitmap','createInitialPosition','fadeAfterDelay','stypeId','SPAWN\x20SFX:\x20%1','quantity','ApplyEasing','createVisualDrops','hue','Game_Enemy_exp','VxpLC','Element','cKnVs','getConditionalDropsTrackedData','STYPE','initialize','ForcedGoldSet','updateFlags','_itemIDs','createLowerLayer','isStateAffected','includes','Ltalp','aliveMembers','ldNPH','targetX','cCcbn','voVdl','ARMORS','ARRAYSTRUCT','parse','sfxPan','getStypeIdWithName','Exp','true','sfxFilename','QcuLe','bmjYz','iconHeight','VhayM','Duration0','lastStruckSkill','playSe','createConditionalDropsTrackedData','GWdUh','XMaOB','Icon%1','numItems','SKILLS','_bonusRewards','Linear','process_VisuMZ_ExtraEnemyDrops_Notetags','gHisi','loadSystem','Tint0','FUNC','Game_Enemy_gold','ITEM','44451PDbknU','false','Game_Troop_makeDropItems','length','timesStruckSkill','startFadeOut','isEnemy','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','rarityTint','bgeWS','baseX','call','Game_Troop_goldTotal','_visualDrops'];_0x25a8=function(){return _0x15737c;};return _0x25a8();}const _0x19ee20=_0x2df2;(function(_0x2dde90,_0x4f6e44){const _0x37ab8f=_0x2df2,_0x43000e=_0x2dde90();while(!![]){try{const _0x51b997=-parseInt(_0x37ab8f(0x284))/0x1+parseInt(_0x37ab8f(0x1dd))/0x2+parseInt(_0x37ab8f(0x27b))/0x3*(parseInt(_0x37ab8f(0x227))/0x4)+parseInt(_0x37ab8f(0x305))/0x5*(-parseInt(_0x37ab8f(0x1fa))/0x6)+-parseInt(_0x37ab8f(0x243))/0x7*(-parseInt(_0x37ab8f(0x1b7))/0x8)+-parseInt(_0x37ab8f(0x19f))/0x9*(parseInt(_0x37ab8f(0x1ed))/0xa)+-parseInt(_0x37ab8f(0x1b5))/0xb*(-parseInt(_0x37ab8f(0x2a7))/0xc);if(_0x51b997===_0x4f6e44)break;else _0x43000e['push'](_0x43000e['shift']());}catch(_0x51516d){_0x43000e['push'](_0x43000e['shift']());}}}(_0x25a8,0x409e0));function _0x2df2(_0x398d73,_0x371850){const _0x25a83c=_0x25a8();return _0x2df2=function(_0x2df244,_0x3e2169){_0x2df244=_0x2df244-0x199;let _0x1cb78e=_0x25a83c[_0x2df244];return _0x1cb78e;},_0x2df2(_0x398d73,_0x371850);}var label='ExtraEnemyDrops',tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x4e87a2){const _0x16e2e3=_0x2df2;return _0x4e87a2[_0x16e2e3(0x25d)]&&_0x4e87a2[_0x16e2e3(0x211)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x19ee20(0x217)]=VisuMZ[label][_0x19ee20(0x217)]||{},VisuMZ[_0x19ee20(0x1f3)]=function(_0x26655f,_0x5170e7){const _0x7fadbe=_0x19ee20;for(const _0x215bd5 in _0x5170e7){if(_0x7fadbe(0x2cc)==='LwwDU'){if(_0x215bd5[_0x7fadbe(0x24a)](/(.*):(.*)/i)){if(_0x7fadbe(0x29a)===_0x7fadbe(0x1d9)){_0x568141[_0x7fadbe(0x1f3)](_0x36fbc4,_0x1ba6c2);const _0x24ee47=_0x1abbec['id'],_0xef92e1=_0x18f687[_0x7fadbe(0x314)];_0x32a2e3[_0x7fadbe(0x2a6)](_0x24ee47,_0xef92e1);}else{const _0x2aaf6f=String(RegExp['$1']),_0x36e6d5=String(RegExp['$2'])[_0x7fadbe(0x215)]()['trim']();let _0x6f962e,_0x47227c,_0x6ea40e;switch(_0x36e6d5){case _0x7fadbe(0x1ff):_0x6f962e=_0x5170e7[_0x215bd5]!==''?Number(_0x5170e7[_0x215bd5]):0x0;break;case'ARRAYNUM':_0x47227c=_0x5170e7[_0x215bd5]!==''?JSON['parse'](_0x5170e7[_0x215bd5]):[],_0x6f962e=_0x47227c[_0x7fadbe(0x2ad)](_0x59f068=>Number(_0x59f068));break;case _0x7fadbe(0x207):_0x6f962e=_0x5170e7[_0x215bd5]!==''?eval(_0x5170e7[_0x215bd5]):null;break;case _0x7fadbe(0x1d3):_0x47227c=_0x5170e7[_0x215bd5]!==''?JSON['parse'](_0x5170e7[_0x215bd5]):[],_0x6f962e=_0x47227c[_0x7fadbe(0x2ad)](_0x21286b=>eval(_0x21286b));break;case _0x7fadbe(0x2ed):_0x6f962e=_0x5170e7[_0x215bd5]!==''?JSON[_0x7fadbe(0x32d)](_0x5170e7[_0x215bd5]):'';break;case'ARRAYJSON':_0x47227c=_0x5170e7[_0x215bd5]!==''?JSON[_0x7fadbe(0x32d)](_0x5170e7[_0x215bd5]):[],_0x6f962e=_0x47227c[_0x7fadbe(0x2ad)](_0x52c710=>JSON[_0x7fadbe(0x32d)](_0x52c710));break;case _0x7fadbe(0x19c):_0x6f962e=_0x5170e7[_0x215bd5]!==''?new Function(JSON[_0x7fadbe(0x32d)](_0x5170e7[_0x215bd5])):new Function('return\x200');break;case'ARRAYFUNC':_0x47227c=_0x5170e7[_0x215bd5]!==''?JSON[_0x7fadbe(0x32d)](_0x5170e7[_0x215bd5]):[],_0x6f962e=_0x47227c['map'](_0x247781=>new Function(JSON[_0x7fadbe(0x32d)](_0x247781)));break;case _0x7fadbe(0x237):_0x6f962e=_0x5170e7[_0x215bd5]!==''?String(_0x5170e7[_0x215bd5]):'';break;case _0x7fadbe(0x2d8):_0x47227c=_0x5170e7[_0x215bd5]!==''?JSON[_0x7fadbe(0x32d)](_0x5170e7[_0x215bd5]):[],_0x6f962e=_0x47227c[_0x7fadbe(0x2ad)](_0x576e20=>String(_0x576e20));break;case _0x7fadbe(0x20a):_0x6ea40e=_0x5170e7[_0x215bd5]!==''?JSON[_0x7fadbe(0x32d)](_0x5170e7[_0x215bd5]):{},_0x6f962e=VisuMZ['ConvertParams']({},_0x6ea40e);break;case _0x7fadbe(0x32c):_0x47227c=_0x5170e7[_0x215bd5]!==''?JSON['parse'](_0x5170e7[_0x215bd5]):[],_0x6f962e=_0x47227c[_0x7fadbe(0x2ad)](_0x352edf=>VisuMZ[_0x7fadbe(0x1f3)]({},JSON[_0x7fadbe(0x32d)](_0x352edf)));break;default:continue;}_0x26655f[_0x2aaf6f]=_0x6f962e;}}}else{_0x4be408[_0x7fadbe(0x2bb)]['ParseEnemyNotetags']['call'](this,_0x2808e7),_0x59ace5[_0x7fadbe(0x2bb)][_0x7fadbe(0x25c)](_0x250adc);if(_0x487919[_0x7fadbe(0x21c)][_0x7fadbe(0x24a)](/<JS DROPS>\s*([\s\S]*)\s*<\/JS DROPS>/i)){const _0x37be50=_0x2b74d7(_0x2fb06a['$1']);_0x36faaf[_0x7fadbe(0x2bb)][_0x7fadbe(0x1ca)](_0x161159,_0x37be50);}}}return _0x26655f;},(_0x5d6c78=>{const _0x120921=_0x19ee20,_0x3c916a=_0x5d6c78['name'];for(const _0x135204 of dependencies){if(_0x120921(0x20d)!==_0x120921(0x20d)){_0x2e09f9=_0x19f7d6[_0x120921(0x215)]()[_0x120921(0x20c)]();if(['I',_0x120921(0x19e),_0x120921(0x240)][_0x120921(0x324)](_0x255b74)){const _0x4edf39=_0x839f75[_0x28b70c['getItemIdWithName'](_0x33f7cb)];return _0x4edf39?_0x4edf39['id']:0x0;}if(['W',_0x120921(0x278),_0x120921(0x304)]['includes'](_0x3c6628)){const _0xf0f95e=_0xbc858c[_0x5653cf[_0x120921(0x2fd)](_0x2ee974)];return _0xf0f95e?_0xf0f95e['id']:0x0;}if(['A','ARMOR','ARMORS'][_0x120921(0x324)](_0x2d359b)){const _0x556cad=_0x39c7b9[_0x577b3c[_0x120921(0x2a8)](_0x3f68df)];return _0x556cad?_0x556cad['id']:0x0;}return 0x0;}else{if(!Imported[_0x135204]){alert(_0x120921(0x1a6)['format'](_0x3c916a,_0x135204)),SceneManager[_0x120921(0x2f7)]();break;}}}const _0x1bcc1c=_0x5d6c78[_0x120921(0x211)];if(_0x1bcc1c['match'](/\[Version[ ](.*?)\]/i)){const _0xfc0925=Number(RegExp['$1']);_0xfc0925!==VisuMZ[label][_0x120921(0x1be)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x3c916a,_0xfc0925)),SceneManager[_0x120921(0x2f7)]());}if(_0x1bcc1c[_0x120921(0x24a)](/\[Tier[ ](\d+)\]/i)){const _0x2c4220=Number(RegExp['$1']);_0x2c4220<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x120921(0x1c5)](_0x3c916a,_0x2c4220,tier)),SceneManager['exit']()):tier=Math['max'](_0x2c4220,tier);}VisuMZ[_0x120921(0x1f3)](VisuMZ[label][_0x120921(0x217)],_0x5d6c78[_0x120921(0x2d7)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x19ee20(0x28d)],'BonusRewardsClear',_0x1a8094=>{const _0x1c3237=_0x19ee20;VisuMZ[_0x1c3237(0x1f3)](_0x1a8094,_0x1a8094),$gameTroop[_0x1c3237(0x210)]();}),PluginManager['registerCommand'](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x30a),_0x3b8e7e=>{const _0x4ae044=_0x19ee20;VisuMZ[_0x4ae044(0x1f3)](_0x3b8e7e,_0x3b8e7e);const _0x2b4e5b=_0x3b8e7e[_0x4ae044(0x2ee)];$gameTroop[_0x4ae044(0x2f1)](_0x2b4e5b);}),PluginManager[_0x19ee20(0x295)](pluginData['name'],_0x19ee20(0x204),_0x25b7cb=>{const _0x62620=_0x19ee20;VisuMZ[_0x62620(0x1f3)](_0x25b7cb,_0x25b7cb);const _0x44cd34=_0x25b7cb['value'];$gameTroop[_0x62620(0x2e8)](_0x44cd34);}),PluginManager['registerCommand'](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x25e),_0x227c35=>{const _0x417d59=_0x19ee20;VisuMZ[_0x417d59(0x1f3)](_0x227c35,_0x227c35);const _0x1a3ad7=_0x227c35['id'],_0xf7a9c2=_0x227c35['quantity'];$gameTroop[_0x417d59(0x2a6)](_0x1a3ad7,_0xf7a9c2);}),PluginManager[_0x19ee20(0x295)](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x1ea),_0x25741f=>{const _0x3b1d9f=_0x19ee20;VisuMZ[_0x3b1d9f(0x1f3)](_0x25741f,_0x25741f);const _0x11e4ed=_0x25741f['id'],_0x4cab9a=_0x25741f['quantity'];$gameTroop['addBonusWeaponDrop'](_0x11e4ed,_0x4cab9a);}),PluginManager[_0x19ee20(0x295)](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x28a),_0x527cf5=>{const _0x13ebf8=_0x19ee20;VisuMZ[_0x13ebf8(0x1f3)](_0x527cf5,_0x527cf5);const _0x478466=_0x527cf5['id'],_0x502122=_0x527cf5['quantity'];$gameTroop[_0x13ebf8(0x234)](_0x478466,_0x502122);}),PluginManager['registerCommand'](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x26c),_0x3aea23=>{const _0x5c0afc=_0x19ee20;VisuMZ[_0x5c0afc(0x1f3)](_0x3aea23,_0x3aea23),$gameTroop[_0x5c0afc(0x2d2)]();}),PluginManager[_0x19ee20(0x295)](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x2da),_0x30ba24=>{const _0x52f0e0=_0x19ee20;VisuMZ['ConvertParams'](_0x30ba24,_0x30ba24);const _0x553a50=_0x30ba24[_0x52f0e0(0x2ee)];$gameTroop[_0x52f0e0(0x2f0)](_0x553a50);}),PluginManager['registerCommand'](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x31f),_0x1c94bb=>{const _0x55ad95=_0x19ee20;VisuMZ[_0x55ad95(0x1f3)](_0x1c94bb,_0x1c94bb);const _0x34da1e=_0x1c94bb[_0x55ad95(0x2ee)];$gameTroop['setForcedGold'](_0x34da1e);}),PluginManager[_0x19ee20(0x295)](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x2e9),_0x4d3efe=>{const _0x50a3d6=_0x19ee20;VisuMZ[_0x50a3d6(0x1f3)](_0x4d3efe,_0x4d3efe);const _0x1d5c95=_0x4d3efe['id'],_0x57f1cf=_0x4d3efe[_0x50a3d6(0x314)];$gameTroop[_0x50a3d6(0x308)](_0x1d5c95,_0x57f1cf);}),PluginManager[_0x19ee20(0x295)](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x1c2),_0x4b564f=>{const _0x3e95e7=_0x19ee20;VisuMZ[_0x3e95e7(0x1f3)](_0x4b564f,_0x4b564f);const _0x3a3784=_0x4b564f['id'],_0xafca2b=_0x4b564f[_0x3e95e7(0x314)];$gameTroop[_0x3e95e7(0x1fd)](_0x3a3784,_0xafca2b);}),PluginManager[_0x19ee20(0x295)](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x2b6),_0x56eb5f=>{const _0x48cb4d=_0x19ee20;VisuMZ['ConvertParams'](_0x56eb5f,_0x56eb5f);const _0x524c70=_0x56eb5f['id'],_0x47427b=_0x56eb5f[_0x48cb4d(0x314)];$gameTroop[_0x48cb4d(0x27a)](_0x524c70,_0x47427b);}),PluginManager[_0x19ee20(0x295)](pluginData[_0x19ee20(0x28d)],_0x19ee20(0x247),_0x11f7a1=>{const _0x3af53b=_0x19ee20;VisuMZ['ConvertParams'](_0x11f7a1,_0x11f7a1);const _0x4c82ef=_0x11f7a1[_0x3af53b(0x30b)];BattleManager[_0x3af53b(0x290)]=_0x4c82ef;}),VisuMZ['ExtraEnemyDrops'][_0x19ee20(0x248)]=Scene_Boot[_0x19ee20(0x298)][_0x19ee20(0x29f)],Scene_Boot[_0x19ee20(0x298)][_0x19ee20(0x29f)]=function(){const _0x5d1447=_0x19ee20;VisuMZ[_0x5d1447(0x2bb)]['Scene_Boot_onDatabaseLoaded'][_0x5d1447(0x1aa)](this),this[_0x5d1447(0x342)]();},Scene_Boot[_0x19ee20(0x298)][_0x19ee20(0x342)]=function(){const _0x3bab64=_0x19ee20;if(VisuMZ['ParseAllNotetags'])return;this['process_VisuMZ_ExtraEnemyDrops_Drops_Notetags'](),this[_0x3bab64(0x2ac)]();},Scene_Boot[_0x19ee20(0x298)][_0x19ee20(0x264)]=function(){for(const _0xd6135 of $dataEnemies){if(!_0xd6135)continue;VisuMZ['ExtraEnemyDrops']['createDrops'](_0xd6135);}},Scene_Boot[_0x19ee20(0x298)]['process_VisuMZ_ExtraEnemyDrops_JS_Notetags']=function(){const _0x38275b=_0x19ee20;for(const _0x2b84d9 of $dataEnemies){if(!_0x2b84d9)continue;if(_0x2b84d9[_0x38275b(0x21c)][_0x38275b(0x24a)](/<JS DROPS>\s*([\s\S]*)\s*<\/JS DROPS>/i)){const _0x387529=String(RegExp['$1']);VisuMZ[_0x38275b(0x2bb)]['createJS'](_0x2b84d9,_0x387529);}}},VisuMZ['ExtraEnemyDrops'][_0x19ee20(0x2aa)]=VisuMZ[_0x19ee20(0x2aa)],VisuMZ['ParseEnemyNotetags']=function(_0x5f1fac){const _0x210e9d=_0x19ee20;VisuMZ[_0x210e9d(0x2bb)][_0x210e9d(0x2aa)]['call'](this,_0x5f1fac),VisuMZ[_0x210e9d(0x2bb)][_0x210e9d(0x25c)](_0x5f1fac);if(_0x5f1fac['note']['match'](/<JS DROPS>\s*([\s\S]*)\s*<\/JS DROPS>/i)){if('CPIDA'==='yfxAB')_0x1a75d2[_0x210e9d(0x2d3)]=_0x279f5f[_0x210e9d(0x2bb)][_0x210e9d(0x20f)](_0x5d1ff1['$1']),_0x58b554[_0x210e9d(0x250)]=_0x5c3d0b(_0x4eaa0f['$2']),_0x2b4640[_0x210e9d(0x231)]=0x1/(_0x5e9024(_0x451219['$3'])*0.01);else{const _0x5874d3=String(RegExp['$1']);VisuMZ[_0x210e9d(0x2bb)][_0x210e9d(0x1ca)](_0x5f1fac,_0x5874d3);}}},VisuMZ['ExtraEnemyDrops'][_0x19ee20(0x25c)]=function(_0x23fcde){const _0x5dbbf8=_0x19ee20,_0x35fa0b=_0x23fcde[_0x5dbbf8(0x21c)],_0x4f423f=_0x35fa0b['match'](/<(.*?) (?:DROP|DROPS)[ ](.*):[ ](\d+)([%％])>/gi);if(_0x4f423f){if(_0x5dbbf8(0x224)!==_0x5dbbf8(0x1a8))for(const _0x43ef45 of _0x4f423f){if(_0x5dbbf8(0x1e9)===_0x5dbbf8(0x1e9)){const _0x41efbd={'kind':0x0,'dataId':0x0,'denominator':0x1};if(_0x43ef45[_0x5dbbf8(0x24a)](/<(.*?) (?:DROP|DROPS)[ ](\d+)[ ](?:THROUGH|to)[ ](\d+):[ ](\d+)([%％])>/i)){const _0x57c57e=VisuMZ['ExtraEnemyDrops'][_0x5dbbf8(0x20f)](RegExp['$1']),_0x1a0cc7=Number(RegExp['$2']),_0x3b86ea=Number(RegExp['$3']),_0x2561b1=0x1/(Number(RegExp['$4'])*0.01);if(_0x57c57e>0x0){if(_0x5dbbf8(0x2d9)!==_0x5dbbf8(0x199))for(let _0x1b154c=_0x1a0cc7;_0x1b154c<=_0x3b86ea;_0x1b154c++){const _0x5baa9e={'kind':_0x57c57e,'dataId':_0x1b154c,'denominator':_0x2561b1};if(VisuMZ[_0x5dbbf8(0x2bb)][_0x5dbbf8(0x1cd)](_0x5baa9e)){if('cCcbn'===_0x5dbbf8(0x329))_0x23fcde['dropItems'][_0x5dbbf8(0x2ae)](_0x5baa9e);else{let _0x4a7bac=_0x1529af;const _0x380132=_0xa08bb5;_0x4a7bac=_0x4a7bac['charAt'](0x0)['toUpperCase']()+_0x4a7bac[_0x5dbbf8(0x270)](0x1);if(_0x4a7bac[_0x5dbbf8(0x24a)](/STYPE/i))_0x4a7bac=_0x5dbbf8(0x302);const _0x36728f=_0x5dbbf8(0x25b)['format'](_0x4a7bac);if(_0x30b7ec[_0x36728f])return _0x44cf35[_0x36728f](_0x380132);return 0x0;}}}else{if(this['_forcedRewards']===_0xc10e2)this[_0x5dbbf8(0x2d2)]();return this['_forcedRewards'][_0x5dbbf8(0x1f5)]!==_0x17f07d;}}continue;}else{if(_0x43ef45['match'](/<(.*?) (?:DROP|DROPS)[ ](\d+):[ ](\d+)([%％])>/i))_0x41efbd[_0x5dbbf8(0x2d3)]=VisuMZ['ExtraEnemyDrops'][_0x5dbbf8(0x20f)](RegExp['$1']),_0x41efbd[_0x5dbbf8(0x250)]=Number(RegExp['$2']),_0x41efbd[_0x5dbbf8(0x231)]=0x1/(Number(RegExp['$3'])*0.01);else{if(_0x43ef45['match'](/<(.*?) (?:DROP|DROPS)[ ](.*):[ ](\d+)([%％])>/i)){if(_0x5dbbf8(0x2db)!==_0x5dbbf8(0x1e5))_0x41efbd[_0x5dbbf8(0x2d3)]=VisuMZ[_0x5dbbf8(0x2bb)][_0x5dbbf8(0x20f)](RegExp['$1']),_0x41efbd['dataId']=VisuMZ['ExtraEnemyDrops'][_0x5dbbf8(0x273)](RegExp['$1'],RegExp['$2']),_0x41efbd[_0x5dbbf8(0x231)]=0x1/(Number(RegExp['$3'])*0.01);else{this[_0x5dbbf8(0x22c)]['bounces']-=0x1;const _0x1127d0=_0x365b7f[_0x5dbbf8(0x2bb)][_0x5dbbf8(0x217)]['General'],_0x1fb84a=_0x1127d0[_0x5dbbf8(0x1f2)],_0x58604e=this[_0x5dbbf8(0x22c)]['bounces'],_0x2c418a=_0x38ed37[_0x5dbbf8(0x1fc)](_0x1127d0['bounceReduction'],_0x1fb84a-_0x58604e);if(this['_data'][_0x5dbbf8(0x1f2)]>=0x0)this[_0x5dbbf8(0x22c)][_0x5dbbf8(0x26e)]=_0x340794['round'](_0x1127d0[_0x5dbbf8(0x26e)]*_0x2c418a);else _0x1127d0[_0x5dbbf8(0x1b3)]&&_0x1ad2a1(this[_0x5dbbf8(0x1a4)][_0x5dbbf8(0x283)](this),_0x1127d0['fadeAfterDelay']);if(_0x1127d0[_0x5dbbf8(0x332)]){const _0x2f80d3={'name':this[_0x5dbbf8(0x22c)][_0x5dbbf8(0x203)],'volume':_0x1438da[_0x5dbbf8(0x28c)](_0x1127d0['sfxVolume']*_0x2c418a),'pitch':_0x1127d0[_0x5dbbf8(0x2c4)],'pan':_0x1127d0[_0x5dbbf8(0x32e)]};_0x10e0af['playSe'](_0x2f80d3);}}}else continue;}}if(_0x41efbd['kind']<0x0||_0x41efbd[_0x5dbbf8(0x250)]<0x0)continue;_0x23fcde[_0x5dbbf8(0x1ef)][_0x5dbbf8(0x2ae)](_0x41efbd);}else _0x4beb11[_0x5dbbf8(0x2ae)](_0x396052[_0x5dbbf8(0x2f9)][_0x5dbbf8(0x309)](_0x5c05e5,'Gold'));}else{const _0x430b11=_0x5e44f6[_0x1e58dd[_0x5dbbf8(0x2a8)](_0x4cb23d)];return _0x430b11?_0x430b11['id']:0x0;}}if(_0x35fa0b[_0x5dbbf8(0x24a)](/<(?:DROP|DROPS)>\s*([\s\S]*)\s*<\/(?:DROP|DROPS)>/i)){if(_0x5dbbf8(0x333)===_0x5dbbf8(0x269))this[_0x5dbbf8(0x33a)]();else{const _0x558036=String(RegExp['$1']),_0x26bcc6=_0x558036[_0x5dbbf8(0x24a)](/(.*?)[ ](.*):[ ](\d+)([%％])/gi);if(_0x26bcc6)for(let _0x100b8b of _0x26bcc6){_0x100b8b=_0x100b8b[_0x5dbbf8(0x20c)]();const _0x4ead61={'kind':0x0,'dataId':0x0,'denominator':0x1};if(_0x100b8b['match'](/(.*?)[ ](\d+)[ ](?:THROUGH|to)[ ](\d+):[ ](\d+)([%％])/i)){const _0x3491d3=VisuMZ[_0x5dbbf8(0x2bb)][_0x5dbbf8(0x20f)](RegExp['$1']),_0x37dbd3=Number(RegExp['$2']),_0x59bd5e=Number(RegExp['$3']),_0x694e2c=0x1/(Number(RegExp['$4'])*0.01);if(_0x3491d3>0x0)for(let _0x5a7ee1=_0x37dbd3;_0x5a7ee1<=_0x59bd5e;_0x5a7ee1++){const _0x108876={'kind':_0x3491d3,'dataId':_0x5a7ee1,'denominator':_0x694e2c};if(VisuMZ[_0x5dbbf8(0x2bb)][_0x5dbbf8(0x1cd)](_0x108876)){if(_0x5dbbf8(0x22b)!==_0x5dbbf8(0x22b)){const _0x347d5a={'kind':_0x29b0a5,'dataId':_0x299e21,'denominator':_0x368f66};_0x585809[_0x5dbbf8(0x2bb)]['checkValidDrop'](_0x347d5a)&&_0x3fe760[_0x5dbbf8(0x1ef)][_0x5dbbf8(0x2ae)](_0x347d5a);}else _0x23fcde['dropItems'][_0x5dbbf8(0x2ae)](_0x108876);}}continue;}else{if(_0x100b8b[_0x5dbbf8(0x24a)](/(.*?)[ ](\d+):[ ](\d+)([%％])/i)){if(_0x5dbbf8(0x254)==='JBNDs')_0x4ead61[_0x5dbbf8(0x2d3)]=VisuMZ[_0x5dbbf8(0x2bb)][_0x5dbbf8(0x20f)](RegExp['$1']),_0x4ead61[_0x5dbbf8(0x250)]=Number(RegExp['$2']),_0x4ead61[_0x5dbbf8(0x231)]=0x1/(Number(RegExp['$3'])*0.01);else{const _0x1a1c92=_0x32ed17[_0x3d82ce[_0x5dbbf8(0x2fd)](_0x4b8eb6)];return _0x1a1c92?_0x1a1c92['id']:0x0;}}else{if(_0x100b8b['match'](/(.*?)[ ](.*):[ ](\d+)([%％])/i)){if(_0x5dbbf8(0x245)==='ecnMu')_0x4ead61[_0x5dbbf8(0x2d3)]=VisuMZ['ExtraEnemyDrops'][_0x5dbbf8(0x20f)](RegExp['$1']),_0x4ead61['dataId']=VisuMZ[_0x5dbbf8(0x2bb)][_0x5dbbf8(0x273)](RegExp['$1'],RegExp['$2']),_0x4ead61[_0x5dbbf8(0x231)]=0x1/(Number(RegExp['$3'])*0.01);else{const _0x4a6c00=_0x4ddbed(_0x5636b0['$1']);_0x299013['ExtraEnemyDrops'][_0x5dbbf8(0x1ca)](_0x2f11bf,_0x4a6c00);}}else continue;}}if(_0x4ead61[_0x5dbbf8(0x2d3)]<0x0||_0x4ead61[_0x5dbbf8(0x250)]<0x0)continue;_0x23fcde[_0x5dbbf8(0x1ef)][_0x5dbbf8(0x2ae)](_0x4ead61);}}}},VisuMZ['ExtraEnemyDrops'][_0x19ee20(0x1cd)]=function(_0x21c4ab){const _0x6e6eb4=_0x19ee20;if(!_0x21c4ab)return![];const _0x1035cb=_0x21c4ab['kind'],_0x386041=_0x21c4ab[_0x6e6eb4(0x250)];let _0x9fc45f=null;if(_0x1035cb===0x1)_0x9fc45f=$dataItems[_0x386041];else{if(_0x1035cb===0x2)_0x9fc45f=$dataWeapons[_0x386041];else _0x1035cb===0x3?_0x9fc45f=$dataArmors[_0x386041]:_0x6e6eb4(0x223)===_0x6e6eb4(0x336)?_0x41d45c=_0x5b85e8[_0x6e6eb4(0x1c4)]():_0x9fc45f=null;}if(!_0x9fc45f)return![];if(_0x9fc45f[_0x6e6eb4(0x28d)][_0x6e6eb4(0x20c)]()==='')return![];if(_0x9fc45f[_0x6e6eb4(0x28d)][_0x6e6eb4(0x24a)](/-----/i))return![];return!![];},VisuMZ[_0x19ee20(0x2bb)]['JS']={},VisuMZ[_0x19ee20(0x2bb)][_0x19ee20(0x1ca)]=function(_0x108b13,_0x28dc7b){const _0x1b37ab=_0x19ee20,_0x109ca5=_0x1b37ab(0x235)[_0x1b37ab(0x1c5)](_0x28dc7b),_0xa5dbc6=_0x108b13['id'];VisuMZ[_0x1b37ab(0x2bb)]['JS'][_0xa5dbc6]=new Function(_0x109ca5);},DataManager[_0x19ee20(0x1b1)]=function(_0x2ade09){const _0x160adf=_0x19ee20;_0x2ade09=_0x2ade09[_0x160adf(0x215)]()[_0x160adf(0x20c)](),this[_0x160adf(0x321)]=this[_0x160adf(0x321)]||{};if(this[_0x160adf(0x321)][_0x2ade09])return this[_0x160adf(0x321)][_0x2ade09];for(const _0x476f8b of $dataItems){if(!_0x476f8b)continue;this[_0x160adf(0x321)][_0x476f8b[_0x160adf(0x28d)]['toUpperCase']()[_0x160adf(0x20c)]()]=_0x476f8b['id'];}return this[_0x160adf(0x321)][_0x2ade09]||0x0;},DataManager['getWeaponIdWithName']=function(_0x342cfb){const _0x3ed908=_0x19ee20;_0x342cfb=_0x342cfb[_0x3ed908(0x215)]()['trim'](),this['_weaponIDs']=this[_0x3ed908(0x292)]||{};if(this[_0x3ed908(0x292)][_0x342cfb])return this[_0x3ed908(0x292)][_0x342cfb];for(const _0x4fb7ed of $dataWeapons){if(_0x3ed908(0x257)==='QfAvG')_0x417a6b['applyTimesStruck'](this),_0x3e5c66[_0x3ed908(0x2bb)][_0x3ed908(0x27c)][_0x3ed908(0x1aa)](this,_0x4d354a);else{if(!_0x4fb7ed)continue;this[_0x3ed908(0x292)][_0x4fb7ed[_0x3ed908(0x28d)]['toUpperCase']()[_0x3ed908(0x20c)]()]=_0x4fb7ed['id'];}}return this[_0x3ed908(0x292)][_0x342cfb]||0x0;},DataManager[_0x19ee20(0x2a8)]=function(_0x24cb65){const _0x5eb5de=_0x19ee20;_0x24cb65=_0x24cb65['toUpperCase']()[_0x5eb5de(0x20c)](),this[_0x5eb5de(0x229)]=this['_armorIDs']||{};if(this[_0x5eb5de(0x229)][_0x24cb65])return this[_0x5eb5de(0x229)][_0x24cb65];for(const _0x5d6563 of $dataArmors){if(_0x5eb5de(0x1f6)!==_0x5eb5de(0x276)){if(!_0x5d6563)continue;this[_0x5eb5de(0x229)][_0x5d6563[_0x5eb5de(0x28d)][_0x5eb5de(0x215)]()[_0x5eb5de(0x20c)]()]=_0x5d6563['id'];}else this[_0x5eb5de(0x22c)]['duration']>0x0?this['_data'][_0x5eb5de(0x23d)]=this[_0x5eb5de(0x2a4)]():this[_0x5eb5de(0x22c)][_0x5eb5de(0x23d)]=0x0,this[_0x5eb5de(0x2a2)]['y']=this['_iconSprite'][_0x5eb5de(0x1f0)]-this[_0x5eb5de(0x22c)][_0x5eb5de(0x23d)];}return this['_armorIDs'][_0x24cb65]||0x0;},DataManager[_0x19ee20(0x287)]=function(_0x16ba3b){const _0x1eed42=_0x19ee20;_0x16ba3b=_0x16ba3b[_0x1eed42(0x215)]()[_0x1eed42(0x20c)](),this[_0x1eed42(0x28f)]=this[_0x1eed42(0x28f)]||{};if(this[_0x1eed42(0x28f)][_0x16ba3b])return this[_0x1eed42(0x28f)][_0x16ba3b];for(const _0x3adc5e of $dataSkills){if(!_0x3adc5e)continue;this[_0x1eed42(0x28f)][_0x3adc5e[_0x1eed42(0x28d)][_0x1eed42(0x215)]()[_0x1eed42(0x20c)]()]=_0x3adc5e['id'];}return this[_0x1eed42(0x28f)][_0x16ba3b]||0x0;},DataManager[_0x19ee20(0x32f)]=function(_0x2e3717){const _0x58d457=_0x19ee20;_0x2e3717=_0x2e3717[_0x58d457(0x215)]()[_0x58d457(0x20c)](),this['_stypeIDs']=this[_0x58d457(0x244)]||{};if(this[_0x58d457(0x244)][_0x2e3717])return this[_0x58d457(0x244)][_0x2e3717];for(let _0x793ceb=0x1;_0x793ceb<0x64;_0x793ceb++){if(!$dataSystem['skillTypes'][_0x793ceb])continue;let _0x5bad65=$dataSystem[_0x58d457(0x1c3)][_0x793ceb][_0x58d457(0x215)]()['trim']();_0x5bad65=_0x5bad65[_0x58d457(0x21f)](/\x1I\[(\d+)\]/gi,''),_0x5bad65=_0x5bad65[_0x58d457(0x21f)](/\\I\[(\d+)\]/gi,''),this['_stypeIDs'][_0x5bad65]=_0x793ceb;}return this[_0x58d457(0x244)][_0x2e3717]||0x0;},DataManager[_0x19ee20(0x2fb)]=function(_0x56e0f8){const _0x179ca8=_0x19ee20;_0x56e0f8=_0x56e0f8[_0x179ca8(0x215)]()[_0x179ca8(0x20c)](),this['_stateIDs']=this[_0x179ca8(0x29c)]||{};if(this[_0x179ca8(0x29c)][_0x56e0f8])return this[_0x179ca8(0x29c)][_0x56e0f8];for(const _0x5e815b of $dataStates){if(!_0x5e815b)continue;this['_stateIDs'][_0x5e815b[_0x179ca8(0x28d)][_0x179ca8(0x215)]()['trim']()]=_0x5e815b['id'];}return this[_0x179ca8(0x29c)][_0x56e0f8]||0x0;},DataManager[_0x19ee20(0x2bf)]=function(_0x579a69){const _0x25892e=_0x19ee20;_0x579a69=_0x579a69['toUpperCase']()['trim'](),this[_0x25892e(0x206)]=this[_0x25892e(0x206)]||{};if(this[_0x25892e(0x206)][_0x579a69])return this[_0x25892e(0x206)][_0x579a69];let _0x1387f8=0x1;for(const _0x31e70 of $dataSystem['elements']){if(!_0x31e70)continue;let _0x31b258=_0x31e70[_0x25892e(0x215)]();_0x31b258=_0x31b258[_0x25892e(0x21f)](/\x1I\[(\d+)\]/gi,''),_0x31b258=_0x31b258[_0x25892e(0x21f)](/\\I\[(\d+)\]/gi,''),this[_0x25892e(0x206)][_0x31b258]=_0x1387f8,_0x1387f8++;}return this[_0x25892e(0x206)][_0x579a69]||0x0;},SceneManager[_0x19ee20(0x2eb)]=function(){const _0x36c25e=_0x19ee20;return this[_0x36c25e(0x2c8)]&&this['_scene'][_0x36c25e(0x281)]===Scene_Battle;},VisuMZ['ExtraEnemyDrops']['Game_Action_applyItemUserEffect']=Game_Action[_0x19ee20(0x298)]['applyItemUserEffect'],Game_Action[_0x19ee20(0x298)]['applyItemUserEffect']=function(_0x328ab7){const _0xda7649=_0x19ee20;_0x328ab7[_0xda7649(0x22d)](this),VisuMZ[_0xda7649(0x2bb)][_0xda7649(0x27c)][_0xda7649(0x1aa)](this,_0x328ab7);},VisuMZ['ExtraEnemyDrops']['Game_Battler_onBattleStart']=Game_Battler[_0x19ee20(0x298)]['onBattleStart'],Game_Battler[_0x19ee20(0x298)]['onBattleStart']=function(_0x26e3b1){const _0x412c0f=_0x19ee20;VisuMZ['ExtraEnemyDrops'][_0x412c0f(0x2cb)]['call'](this,_0x26e3b1),this[_0x412c0f(0x33a)]();},Game_Battler[_0x19ee20(0x298)][_0x19ee20(0x33a)]=function(){const _0x388cb6=_0x19ee20;this[_0x388cb6(0x2c2)]={'deathTurn':0x0,'timesStruckSkills':{},'timesStruckSTypes':{},'timesStruckItems':{},'timesStruckStates':{},'timesStruckElements':{},'lastStruckType':_0x388cb6(0x219),'lastStruckSkill':0x0,'lastStruckSType':0x0,'lastStruckItem':0x0,'lastStruckState':0x0,'lastStruckElement':0x0};},Game_Battler[_0x19ee20(0x298)][_0x19ee20(0x31c)]=function(){const _0x564bde=_0x19ee20;if(this['_conditionalDropsTrackedData']===undefined){if(_0x564bde(0x2de)===_0x564bde(0x2de))this['createConditionalDropsTrackedData']();else{const _0xf5c2a=_0x1e8d56[_0x3ed497['getItemIdWithName'](_0x674a47)];return _0xf5c2a?_0xf5c2a['id']:0x0;}}return this['_conditionalDropsTrackedData'];},Game_Battler[_0x19ee20(0x298)][_0x19ee20(0x1e0)]=function(){const _0x48f4c3=_0x19ee20;return this[_0x48f4c3(0x31c)]()[_0x48f4c3(0x267)]||0x0;},Game_Battler['prototype']['addTimesStruck']=function(_0x5c23f2,_0x2ce260,_0x1fa2c0){const _0x502c10=_0x19ee20,_0xdd0c80=this[_0x502c10(0x31c)]();_0x1fa2c0=_0x1fa2c0||0x1;const _0x281101='timesStruck%1s'[_0x502c10(0x1c5)](_0x5c23f2);if(!_0xdd0c80[_0x281101])return;_0xdd0c80[_0x281101][_0x2ce260]=_0xdd0c80[_0x281101][_0x2ce260]||0x0,_0xdd0c80[_0x281101][_0x2ce260]+=_0x1fa2c0;const _0xc395f6='lastStruck%1'[_0x502c10(0x1c5)](_0x5c23f2);_0xdd0c80[_0xc395f6]=_0x2ce260,[_0x502c10(0x1b2),_0x502c10(0x21e)][_0x502c10(0x324)](_0x5c23f2)&&(_0xdd0c80[_0x502c10(0x2b9)]=_0x5c23f2);},Game_Battler[_0x19ee20(0x298)][_0x19ee20(0x1a3)]=function(_0x2bac81){const _0x344853=_0x19ee20,_0x2aaa61=this[_0x344853(0x31c)]()[_0x344853(0x1ec)];return _0x2aaa61[_0x2bac81]||0x0;},Game_Battler[_0x19ee20(0x298)]['timesStruckSType']=function(_0x406148){const _0x2f8375=_0x19ee20,_0x589631=this[_0x2f8375(0x31c)]()['timesStruckSTypes'];return _0x589631[_0x406148]||0x0;},Game_Battler['prototype'][_0x19ee20(0x23c)]=function(_0x4ed5d9){const _0x3200c1=_0x19ee20,_0xcda35e=this[_0x3200c1(0x31c)]()[_0x3200c1(0x21d)];return _0xcda35e[_0x4ed5d9]||0x0;},Game_Battler[_0x19ee20(0x298)]['timesStruckState']=function(_0xc8a3ef){const _0x38ed4b=_0x19ee20,_0x472e3d=this[_0x38ed4b(0x31c)]()[_0x38ed4b(0x2ce)];return _0x472e3d[_0xc8a3ef]||0x0;},Game_Battler[_0x19ee20(0x298)]['timesStruckElement']=function(_0x297560){const _0x5ca6e3=_0x19ee20,_0x17bf8c=this[_0x5ca6e3(0x31c)]()[_0x5ca6e3(0x228)];return _0x17bf8c[_0x297560]||0x0;},Game_Battler[_0x19ee20(0x298)][_0x19ee20(0x22d)]=function(_0x1be9ca){const _0x207dcb=_0x19ee20,_0x569c07=_0x1be9ca[_0x207dcb(0x24f)]();if(!_0x569c07)return;if(_0x1be9ca[_0x207dcb(0x1d8)]())this[_0x207dcb(0x1d0)]('Item',_0x569c07['id']);else{if(_0x1be9ca['isSkill']())this[_0x207dcb(0x1d0)]('Skill',_0x569c07['id']),this[_0x207dcb(0x1d0)](_0x207dcb(0x302),_0x569c07[_0x207dcb(0x312)]);else return;}let _0x34b1e1=[];if(Imported[_0x207dcb(0x2d5)]){if(_0x207dcb(0x212)!=='KVjCP')_0x34b1e1=_0x1be9ca[_0x207dcb(0x1c4)]();else{const _0x1ecd65={'name':_0x2ed256(_0x4409d3['$1']),'volume':0x5a,'pitch':0x64,'pan':0x0};_0x5ad9e9['playSe'](_0x1ecd65);}}else _0x1be9ca[_0x207dcb(0x24f)]()[_0x207dcb(0x30e)][_0x207dcb(0x1b9)]<0x0?_0x34b1e1=_0x1be9ca[_0x207dcb(0x2a1)]()[_0x207dcb(0x24d)]():_0x34b1e1=[_0x1be9ca[_0x207dcb(0x24f)]()[_0x207dcb(0x30e)][_0x207dcb(0x1b9)]];while(_0x34b1e1[_0x207dcb(0x1a2)]>0x0){const _0x2455e0=_0x34b1e1[_0x207dcb(0x27f)]();if(_0x2455e0>0x0)this[_0x207dcb(0x1d0)](_0x207dcb(0x31a),_0x2455e0);}},Game_Battler[_0x19ee20(0x298)]['registerDeathTurn']=function(){const _0x251af9=_0x19ee20,_0x498498=this[_0x251af9(0x31c)]();_0x498498[_0x251af9(0x267)]=this[_0x251af9(0x1e7)]();},VisuMZ[_0x19ee20(0x2bb)][_0x19ee20(0x2e4)]=Game_BattlerBase[_0x19ee20(0x298)][_0x19ee20(0x29b)],Game_BattlerBase['prototype'][_0x19ee20(0x29b)]=function(_0x44602d){const _0x482d22=_0x19ee20,_0x5624ff=this[_0x482d22(0x323)](_0x44602d);VisuMZ[_0x482d22(0x2bb)][_0x482d22(0x2e4)]['call'](this,_0x44602d),this[_0x482d22(0x323)](_0x44602d)&&('ViCpZ'!==_0x482d22(0x1df)?_0x1bc2b3=_0x2be354[_0x2f3462]:(this['addTimesStruck']('State',_0x44602d),!_0x5624ff&&_0x44602d===this[_0x482d22(0x2e7)]()&&this[_0x482d22(0x2ba)]()));},VisuMZ['ExtraEnemyDrops'][_0x19ee20(0x2b5)]=Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x1ee)],Game_Enemy['prototype']['makeDropItems']=function(){const _0x374dba=_0x19ee20;let _0x31c597=VisuMZ['ExtraEnemyDrops'][_0x374dba(0x2b5)]['call'](this);return _0x31c597=this['addExtraEnemyDrops'](_0x31c597),VisuMZ[_0x374dba(0x2bb)]['sortDrops'](_0x31c597);},Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x2f3)]=function(_0xb89fca){const _0x308c0e=_0x19ee20;return _0xb89fca=this[_0x308c0e(0x300)](_0xb89fca),_0xb89fca=this[_0x308c0e(0x1cf)](_0xb89fca),_0xb89fca=this[_0x308c0e(0x261)](_0xb89fca),_0xb89fca=this[_0x308c0e(0x2c3)](_0xb89fca),_0xb89fca;},Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x300)]=function(_0x248242){const _0x29ae8b=_0x19ee20;return _0x248242;const _0x21ed8e=this[_0x29ae8b(0x23e)]()[_0x29ae8b(0x21c)],_0x3e697f=this[_0x29ae8b(0x1d5)](),_0x15f429=_0x21ed8e[_0x29ae8b(0x24a)](/<(.*?) DROP[ ](.*):[ ](\d+)([%％])>/gi);if(_0x15f429){if(_0x29ae8b(0x2dd)===_0x29ae8b(0x2dd))for(const _0x4af1da of _0x15f429){if(_0x29ae8b(0x271)!==_0x29ae8b(0x271))_0xc4255b[_0x29ae8b(0x2ae)](_0x2f3152[_0x29ae8b(0x1b0)]);else{let _0x15cdf5=$dataItems,_0x2cb411=null,_0x2eadb6=0x0;if(_0x4af1da[_0x29ae8b(0x24a)](/<(.*?) DROP[ ](\d+):[ ](\d+)([%％])>/i))_0x15cdf5=VisuMZ[_0x29ae8b(0x2bb)][_0x29ae8b(0x239)](RegExp['$1']),_0x2cb411=_0x15cdf5[Number(RegExp['$2'])],_0x2eadb6=Number(RegExp['$3'])*0.01;else{if(_0x4af1da[_0x29ae8b(0x24a)](/<(.*?) DROP[ ](.*):[ ](\d+)([%％])>/i)){if('nsqyP'==='nsqyP')_0x2cb411=VisuMZ[_0x29ae8b(0x2bb)][_0x29ae8b(0x251)](RegExp['$1'],RegExp['$2']),_0x2eadb6=Number(RegExp['$3'])*0.01;else{_0x2c5aa2[_0x29ae8b(0x225)](this);if(_0x27af88[_0x29ae8b(0x2bb)]['Settings'][_0x29ae8b(0x249)][_0x29ae8b(0x30c)])this[_0x29ae8b(0x26b)]();}}}if(_0x2cb411&&Math[_0x29ae8b(0x2c7)]()<_0x2eadb6*_0x3e697f){if('zZiQD'!=='zZiQD')return _0x194976[_0x3dbff2['getItemIdWithName'](_0x51ae86)];else _0x248242[_0x29ae8b(0x2ae)](_0x2cb411);}}}else{const _0x289090=this[_0x29ae8b(0x213)]();_0x162450[_0x29ae8b(0x2f9)][_0x29ae8b(0x2e4)][_0x29ae8b(0x1aa)](this,_0x2b096b);if(!_0x2fd124[_0x29ae8b(0x21a)])return;if(!this['isEnemy']())return;if(!_0x4f0a83['isSceneBattle']())return;const _0x447c5c=_0x19e6b7['_scene'][_0x29ae8b(0x2df)];if(!_0x447c5c)return;_0x289090&&this[_0x29ae8b(0x280)]()&&_0x447c5c[_0x29ae8b(0x316)](this);}}return _0x248242;},Game_Enemy['prototype']['addExtraEnemyDropsBatch']=function(_0x1acb71){const _0x4b71db=_0x19ee20;return _0x1acb71;const _0x545a10=this[_0x4b71db(0x23e)]()['note'],_0x45f4f9=this['dropItemRate']();if(_0x545a10[_0x4b71db(0x24a)](/<(?:DROP|DROPS)>\s*([\s\S]*)\s*<\/(?:DROP|DROPS)>/i)){if('qYVUg'!==_0x4b71db(0x2c0)){const _0x3784b8=String(RegExp['$1']),_0x1e9eac=_0x3784b8[_0x4b71db(0x24a)](/(.*?)[ ](.*):[ ](\d+)([%％])/gi);if(_0x1e9eac){if(_0x4b71db(0x2fc)===_0x4b71db(0x25a))this[_0x4b71db(0x1d4)]={'exp':_0x4fe3b3,'gold':_0x5cda48,'drops':_0x1baa52};else{let _0x32ecba=$dataItems;for(const _0x29f371 of _0x1e9eac){let _0x3ddd6d=null,_0x2cd496=0x0;if(_0x29f371['match'](/(.*?)[ ](\d+):[ ](\d+)([%％])/i))_0x32ecba=VisuMZ['ExtraEnemyDrops'][_0x4b71db(0x239)](RegExp['$1']),_0x3ddd6d=_0x32ecba[Number(RegExp['$2'])],_0x2cd496=Number(RegExp['$3'])*0.01;else _0x29f371[_0x4b71db(0x24a)](/(.*?)[ ](.*):[ ](\d+)([%％])/i)&&(_0x3ddd6d=VisuMZ[_0x4b71db(0x2bb)][_0x4b71db(0x251)](RegExp['$1'],RegExp['$2']),_0x2cd496=Number(RegExp['$3'])*0.01);_0x3ddd6d&&Math['random']()<_0x2cd496*_0x45f4f9&&_0x1acb71[_0x4b71db(0x2ae)](_0x3ddd6d);}}}}else{_0x5c3b8d[_0x4b71db(0x1f3)](_0x91994e,_0x578a09);const _0x25873e=_0x149293[_0x4b71db(0x2ee)];_0x4f7d62[_0x4b71db(0x2f1)](_0x25873e);}}return _0x1acb71;},VisuMZ[_0x19ee20(0x2bb)][_0x19ee20(0x239)]=function(_0x5b358e){const _0x54c140=_0x19ee20;_0x5b358e=_0x5b358e['toUpperCase']()['trim']();if(['I','ITEM',_0x54c140(0x240)][_0x54c140(0x324)](_0x5b358e))return $dataItems;if(['W',_0x54c140(0x278),_0x54c140(0x304)]['includes'](_0x5b358e))return $dataWeapons;if(['A',_0x54c140(0x1c1),_0x54c140(0x32b)][_0x54c140(0x324)](_0x5b358e))return $dataArmors;if(['S',_0x54c140(0x288),_0x54c140(0x33f)][_0x54c140(0x324)](_0x5b358e))return $dataSkills;if(['T',_0x54c140(0x22a),'STATES'][_0x54c140(0x324)](_0x5b358e))return $dataStates;return $dataItems;},VisuMZ[_0x19ee20(0x2bb)]['getDatabaseKind']=function(_0x591944){const _0x5787a9=_0x19ee20;_0x591944=_0x591944[_0x5787a9(0x215)]()[_0x5787a9(0x20c)]();if(['I',_0x5787a9(0x19e),_0x5787a9(0x240)]['includes'](_0x591944))return 0x1;if(['W',_0x5787a9(0x278),_0x5787a9(0x304)][_0x5787a9(0x324)](_0x591944))return 0x2;if(['A','ARMOR',_0x5787a9(0x32b)]['includes'](_0x591944))return 0x3;return 0x0;},VisuMZ[_0x19ee20(0x2bb)]['getDatabaseItem']=function(_0x505f80,_0x3c51ca){const _0x5e1bd8=_0x19ee20;_0x505f80=_0x505f80[_0x5e1bd8(0x215)]()[_0x5e1bd8(0x20c)]();if(['I','ITEM',_0x5e1bd8(0x240)]['includes'](_0x505f80)){if(_0x5e1bd8(0x220)==='EegBY')this[_0x5e1bd8(0x1da)]=this['_data'][_0x5e1bd8(0x328)],this[_0x5e1bd8(0x242)]=this[_0x5e1bd8(0x22c)][_0x5e1bd8(0x2e3)];else return $dataItems[DataManager[_0x5e1bd8(0x1b1)](_0x3c51ca)];}if(['W','WEAPON',_0x5e1bd8(0x304)][_0x5e1bd8(0x324)](_0x505f80)){if(_0x5e1bd8(0x327)!==_0x5e1bd8(0x296))return $dataWeapons[DataManager[_0x5e1bd8(0x2fd)](_0x3c51ca)];else{const _0x103182=_0x3be1f3[_0x8ed7ce];if(_0x103182)this[_0x5e1bd8(0x340)][_0x5e1bd8(0x1f5)][_0x5e1bd8(0x2ae)](_0x103182);}}if(['A',_0x5e1bd8(0x1c1),_0x5e1bd8(0x32b)][_0x5e1bd8(0x324)](_0x505f80)){if(_0x5e1bd8(0x28b)==='rzFtn')_0x313452?(this[_0x5e1bd8(0x22c)]=_0x47fcf0,this[_0x5e1bd8(0x1da)]=this[_0x5e1bd8(0x22c)]['baseX'],this['_baseY']=this[_0x5e1bd8(0x22c)][_0x5e1bd8(0x1f0)]):this['_data']=this['createInitialPosition'](_0x2de113,_0x3b213d),_0x3b644a[_0x5e1bd8(0x298)]['initialize'][_0x5e1bd8(0x1aa)](this),this[_0x5e1bd8(0x2fa)]();else return $dataArmors[DataManager[_0x5e1bd8(0x2a8)](_0x3c51ca)];}if(['S',_0x5e1bd8(0x288),'SKILLS'][_0x5e1bd8(0x324)](_0x505f80))return $dataSkills[DataManager[_0x5e1bd8(0x287)](_0x3c51ca)];if(['T',_0x5e1bd8(0x22a),_0x5e1bd8(0x23f)]['includes'](_0x505f80)){if(_0x5e1bd8(0x1c8)!==_0x5e1bd8(0x1bb))return $dataStates[DataManager[_0x5e1bd8(0x2fb)](_0x3c51ca)];else _0xa8000f[_0x5e1bd8(0x2bb)]['Game_Battler_onBattleStart']['call'](this,_0x3c9711),this[_0x5e1bd8(0x33a)]();}return null;},VisuMZ[_0x19ee20(0x2bb)][_0x19ee20(0x273)]=function(_0xa50cfc,_0x5962e1){const _0x5c4892=_0x19ee20;_0xa50cfc=_0xa50cfc[_0x5c4892(0x215)]()[_0x5c4892(0x20c)]();if(['I',_0x5c4892(0x19e),_0x5c4892(0x240)][_0x5c4892(0x324)](_0xa50cfc)){if(_0x5c4892(0x1bd)===_0x5c4892(0x2f5)){if(this[_0x5c4892(0x1d4)]===_0x361bb0)this[_0x5c4892(0x2d2)]();if(this[_0x5c4892(0x340)]===_0x17d5ac)this[_0x5c4892(0x210)]();_0x5a0498=_0x95f23c||0x1,this[_0x5c4892(0x1d4)]['drops']=this[_0x5c4892(0x1d4)][_0x5c4892(0x1f5)]||[];while(_0x16fc0b--){const _0x5f4acb=_0x5e9a8d[_0x212af4];if(_0x5f4acb)this['_forcedRewards']['drops'][_0x5c4892(0x2ae)](_0x5f4acb);}}else{const _0xdaf062=$dataItems[DataManager['getItemIdWithName'](_0x5962e1)];return _0xdaf062?_0xdaf062['id']:0x0;}}if(['W',_0x5c4892(0x278),_0x5c4892(0x304)][_0x5c4892(0x324)](_0xa50cfc)){const _0x43482f=$dataWeapons[DataManager[_0x5c4892(0x2fd)](_0x5962e1)];return _0x43482f?_0x43482f['id']:0x0;}if(['A',_0x5c4892(0x1c1),_0x5c4892(0x32b)][_0x5c4892(0x324)](_0xa50cfc)){const _0x3f2f11=$dataArmors[DataManager[_0x5c4892(0x2a8)](_0x5962e1)];return _0x3f2f11?_0x3f2f11['id']:0x0;}return 0x0;},VisuMZ['ExtraEnemyDrops'][_0x19ee20(0x303)]=function(_0x275fca){const _0x206cc3=_0x19ee20;_0x275fca['sort']((_0x342124,_0x7f3db6)=>_0x342124['id']-_0x7f3db6['id']);const _0x3b9b94=_0x275fca[_0x206cc3(0x307)](_0x780cc5=>DataManager[_0x206cc3(0x1d8)](_0x780cc5)),_0x10c508=_0x275fca['filter'](_0x3eb002=>DataManager[_0x206cc3(0x1bc)](_0x3eb002)),_0xe664ea=_0x275fca[_0x206cc3(0x307)](_0x43e311=>DataManager['isArmor'](_0x43e311));let _0x1501dc=_0x3b9b94[_0x206cc3(0x263)](_0x10c508)['concat'](_0xe664ea);return _0x1501dc;},Game_Enemy['prototype'][_0x19ee20(0x2c3)]=function(_0x53202a){const _0x54777b=_0x19ee20,_0x589477=this[_0x54777b(0x23e)]()['id'];if(!VisuMZ[_0x54777b(0x2bb)]['JS'][_0x589477])return _0x53202a;return VisuMZ[_0x54777b(0x2bb)]['JS'][_0x589477][_0x54777b(0x1aa)](this,_0x53202a);},Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x261)]=function(_0x40d802){const _0x5e9d16=_0x19ee20,_0x5c07e2=this[_0x5e9d16(0x23e)]()[_0x5e9d16(0x21c)][_0x5e9d16(0x289)](/[\r\n]+/);let _0x5a4438=null,_0x1ff257=0x0;for(const _0x41a73d of _0x5c07e2){if(!_0x41a73d)continue;if(!_0x5a4438&&_0x41a73d['match'](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+)[ ](?:THROUGH|to)[ ](\d+) (?:DROP|DROPS)>/i)){const _0x4bb999=VisuMZ[_0x5e9d16(0x2bb)]['getDatabase'](RegExp['$1']),_0x599e86=Number(RegExp['$2']),_0x2f8da7=Number(RegExp['$3']);_0x5a4438=[];for(let _0x19a1ca=_0x599e86;_0x19a1ca<=_0x2f8da7;_0x19a1ca++){const _0x6d797d=_0x4bb999[_0x19a1ca]||null;_0x6d797d&&_0x6d797d[_0x5e9d16(0x28d)][_0x5e9d16(0x20c)]()!==''&&!_0x6d797d[_0x5e9d16(0x28d)]['match'](/-----/i)&&_0x5a4438['push'](_0x6d797d);}_0x1ff257=0x0;}else{if(!_0x5a4438&&_0x41a73d[_0x5e9d16(0x24a)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+) (?:DROP|DROPS)>/i)){const _0x121b81=VisuMZ['ExtraEnemyDrops'][_0x5e9d16(0x239)](RegExp['$1']);_0x5a4438=[_0x121b81[Number(RegExp['$2'])]||null],_0x1ff257=0x0;}else{if(!_0x5a4438&&_0x41a73d[_0x5e9d16(0x24a)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (.*) (?:DROP|DROPS)>/i))_0x5a4438=[VisuMZ[_0x5e9d16(0x2bb)]['getDatabaseItem'](RegExp['$1'],RegExp['$2'])],_0x1ff257=0x0;else{if(_0x5a4438&&_0x41a73d[_0x5e9d16(0x24a)](/<\/CONDITIONAL (.*) (?:DROP|DROPS)>/i)){for(const _0x2f5907 of _0x5a4438){if(_0x5e9d16(0x236)==='FxzNl')return this[_0x5e9d16(0x2c2)]===_0x4771aa&&this[_0x5e9d16(0x33a)](),this[_0x5e9d16(0x2c2)];else{if(Math[_0x5e9d16(0x2c7)]()<_0x1ff257)_0x40d802[_0x5e9d16(0x2ae)](_0x2f5907);}}_0x5a4438=null,_0x1ff257=0x0;}else{if(_0x5a4438&&_0x41a73d['match'](/(.*):[ ]([\+\-]\d+)([%％])/i)){if(_0x5e9d16(0x23b)===_0x5e9d16(0x23b)){const _0x58edb4=String(RegExp['$1']),_0x10a579=Number(RegExp['$2'])*0.01;this[_0x5e9d16(0x27e)](_0x58edb4)&&(_0x1ff257+=_0x10a579);}else _0x3f40fd('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x1aef06,_0x4ba856,_0x1497d5)),_0x42555e['exit']();}}}}}}return _0x40d802;},Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x27e)]=function(_0x566a6f){const _0x2581c5=_0x19ee20;if(_0x566a6f[_0x2581c5(0x24a)](/\bALWAYS\b/i)){if('aXhvE'!==_0x2581c5(0x1eb)){const _0x288bd4=_0x19ebc5[_0x2581c5(0x2bb)]['Settings'][_0x2581c5(0x249)],_0x2ab260=this[_0x2581c5(0x22c)]['targetOpacity'][_0x2581c5(0x2cf)](0x0,0xff)*this[_0x2581c5(0x1db)]();if(this[_0x2581c5(0x1d2)]>_0x2ab260)this[_0x2581c5(0x1d2)]=_0xeedaac['max'](this[_0x2581c5(0x1d2)]-_0x288bd4[_0x2581c5(0x252)],_0x2ab260);else this[_0x2581c5(0x1d2)]<_0x2ab260&&(this[_0x2581c5(0x1d2)]=_0x57ead2[_0x2581c5(0x258)](this[_0x2581c5(0x1d2)]+_0x288bd4['opacityFadeOut'],_0x2ab260));if(_0x34826e)this[_0x2581c5(0x1d2)]=_0x2ab260;}else return!![];}else{if(_0x566a6f[_0x2581c5(0x24a)](/\bRANDOM[ ](\d+)([%％])\b/i)){const _0x20608b=Number(RegExp['$1'])*0.01;return Math[_0x2581c5(0x2c7)]()<_0x20608b;}else{if(_0x566a6f[_0x2581c5(0x24a)](/\bLAST (?:STRIKE|STRUCK)[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](\d+)\b/i)){let _0x39f1bd=String(RegExp['$1'])[_0x2581c5(0x2d6)]();const _0x81071b=Number(RegExp['$2']);_0x39f1bd=_0x39f1bd[_0x2581c5(0x301)](0x0)[_0x2581c5(0x215)]()+_0x39f1bd[_0x2581c5(0x270)](0x1);if(_0x39f1bd['match'](/STYPE/i))_0x39f1bd=_0x2581c5(0x302);const _0xc4b473=this[_0x2581c5(0x31c)]();if(_0x39f1bd===_0x2581c5(0x1b2)&&_0xc4b473[_0x2581c5(0x2b9)]!==_0x2581c5(0x1b2))return![];if(_0x39f1bd==='Skill'&&_0xc4b473[_0x2581c5(0x2b9)]!==_0x2581c5(0x21e))return![];if(_0x39f1bd==='SType'&&_0xc4b473[_0x2581c5(0x2b9)]!=='Skill')return![];const _0x4ef0c2=_0x2581c5(0x2b8)[_0x2581c5(0x1c5)](_0x39f1bd);return _0xc4b473[_0x4ef0c2]===_0x81071b;}else{if(_0x566a6f[_0x2581c5(0x24a)](/\bLAST (?:STRIKE|STRUCK)[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](.*)\b/i)){let _0x5f2819=String(RegExp['$1'])[_0x2581c5(0x2d6)]();const _0x41cc6b=String(RegExp['$2']),_0x15e01b=this[_0x2581c5(0x31c)]();let _0x512750=0x0;switch(_0x5f2819[_0x2581c5(0x215)]()[_0x2581c5(0x20c)]()){case _0x2581c5(0x2b0):_0x512750=DataManager[_0x2581c5(0x2bf)](_0x41cc6b);return _0x15e01b[_0x2581c5(0x2b1)]===_0x512750;case _0x2581c5(0x19e):if(_0x15e01b[_0x2581c5(0x2b9)]!=='Item')return![];_0x512750=DataManager['getItemIdWithName'](_0x41cc6b);return _0x15e01b[_0x2581c5(0x1fe)]===_0x512750;case _0x2581c5(0x288):if(_0x15e01b[_0x2581c5(0x2b9)]!==_0x2581c5(0x21e))return![];_0x512750=DataManager[_0x2581c5(0x287)](_0x41cc6b);return _0x15e01b[_0x2581c5(0x338)]===_0x512750;case _0x2581c5(0x31d):if(_0x15e01b[_0x2581c5(0x2b9)]!==_0x2581c5(0x21e))return![];_0x512750=DataManager[_0x2581c5(0x32f)](_0x41cc6b);return _0x15e01b[_0x2581c5(0x294)]===_0x512750;case'STATE':_0x512750=DataManager[_0x2581c5(0x2fb)](_0x41cc6b);return _0x15e01b[_0x2581c5(0x2b2)]===_0x512750;default:return![];}}else{let _0x2258e8=VisuMZ['ExtraEnemyDrops']['convertConditionToCode'](this,_0x566a6f);try{if(_0x2581c5(0x222)===_0x2581c5(0x222))return eval(_0x2258e8);else{const _0x1f4c94=this[_0x2581c5(0x31c)]();_0x1f4c94[_0x2581c5(0x267)]=this[_0x2581c5(0x1e7)]();}}catch(_0x14e376){if(_0x2581c5(0x32a)===_0x2581c5(0x1ba))this[_0x2581c5(0x22c)][_0x2581c5(0x26e)]=_0x162f8c[_0x2581c5(0x28c)](_0x47238e[_0x2581c5(0x26e)]*_0x40aa76);else return![];}}}}}},VisuMZ[_0x19ee20(0x2bb)]['convertConditionToCode']=function(_0x551ae9,_0x476b63){const _0x16de22=_0x19ee20;while(_0x476b63[_0x16de22(0x24a)](/\b\\V\[(\d+)\]\b/gi)){if(_0x16de22(0x2cd)===_0x16de22(0x2b4)){if(_0x4a8839['isItem'](_0x4e0b4d))_0x473f75[_0x16de22(0x2ae)](_0x405f75[_0x16de22(0x1f8)]);else{if(_0x595595['isWeapon'](_0x3f8bf2))_0x3d695c[_0x16de22(0x2ae)](_0x48941c[_0x16de22(0x22e)]);else _0x42f7a1[_0x16de22(0x2fe)](_0x4d5355)&&_0x3a018a['push'](_0x29c49c[_0x16de22(0x24b)]);}}else _0x476b63=_0x476b63[_0x16de22(0x21f)](/\b\\V\[(\d+)\]\b/gi,(_0x4246e1,_0x5d506b)=>$gameVariables[_0x16de22(0x2ee)](parseInt(_0x5d506b)));}while(_0x476b63[_0x16de22(0x24a)](/\bVARIABLE (\d+)\b/gi)){_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bVARIABLE (\d+)\b/gi,(_0x2596e5,_0x5c3f80)=>$gameVariables[_0x16de22(0x2ee)](parseInt(_0x5c3f80)));}return _0x476b63=_0x476b63[_0x16de22(0x21f)](/\\S\[(\d+)\] ON/gi,(_0x2e7e3d,_0xca2b8f)=>String($gameSwitches['value'](parseInt(_0xca2b8f))===!![])),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\\S\[(\d+)\] OFF/gi,(_0x5860bb,_0x26e38b)=>String($gameSwitches[_0x16de22(0x2ee)](parseInt(_0x26e38b))===![])),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\\S\[(\d+)\]/gi,(_0x3cb6fb,_0x135218)=>String($gameSwitches[_0x16de22(0x2ee)](parseInt(_0x135218)))),_0x476b63=_0x476b63[_0x16de22(0x21f)](/SWITCH (\d+) ON/gi,(_0x11820d,_0x126fe7)=>String($gameSwitches['value'](parseInt(_0x126fe7))===!![])),_0x476b63=_0x476b63['replace'](/SWITCH (\d+) OFF/gi,(_0x14fe16,_0x14dda3)=>String($gameSwitches['value'](parseInt(_0x14dda3))===![])),_0x476b63=_0x476b63[_0x16de22(0x21f)](/SWITCH (\d+)/gi,(_0x1d6282,_0xe1ffc3)=>String($gameSwitches[_0x16de22(0x2ee)](parseInt(_0xe1ffc3)))),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bON\b/gi,'true'),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bOFF\b/gi,_0x16de22(0x1a0)),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bTRUE\b/gi,_0x16de22(0x331)),_0x476b63=_0x476b63['replace'](/\bFALSE\b/gi,_0x16de22(0x1a0)),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\b(ITEM|WEAPON|ARMOR)[ ](\d+)[ ]COUNT\b/gi,(_0x26a30b,_0x3b81f5,_0x80e194)=>{const _0xa48f4f=_0x16de22;if(_0xa48f4f(0x2e0)===_0xa48f4f(0x2e0)){const _0x2afff2=VisuMZ[_0xa48f4f(0x2bb)][_0xa48f4f(0x239)](_0x3b81f5),_0x116511=_0x2afff2[Number(_0x80e194)]||null;return _0x116511?$gameParty[_0xa48f4f(0x33e)](_0x116511):0x0;}else{let _0x22c5a4=_0x70444f(_0x1a105c['$1'])[_0xa48f4f(0x289)](',')[_0xa48f4f(0x2ad)](_0x14ee0c=>_0x577e22(_0x14ee0c)[_0xa48f4f(0x2cf)](-0xff,0xff));while(_0x22c5a4[_0xa48f4f(0x1a2)]<0x4)_0x22c5a4[_0xa48f4f(0x2ae)](0x0);_0x4a97a4['push'](_0x22c5a4);}}),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\b(ITEM|WEAPON|ARMOR)[ ](.*)[ ]COUNT\b/gi,(_0x4e5d7a,_0x4c851f,_0x1e2603)=>{const _0xd2ddf5=_0x16de22,_0x1e51f0=VisuMZ[_0xd2ddf5(0x2bb)]['getDatabaseItem'](_0x4c851f,_0x1e2603);return _0x1e51f0?$gameParty[_0xd2ddf5(0x33e)](_0x1e51f0):0x0;}),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bTIMES[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](\d+)[ ](?:STRIKE|STRUCK)\b/gi,(_0x8db51d,_0x3ca429,_0x26de6b)=>{const _0x1f58b6=_0x16de22;let _0x8c838d=_0x3ca429;const _0x4d5d0c=_0x26de6b;_0x8c838d=_0x8c838d[_0x1f58b6(0x301)](0x0)[_0x1f58b6(0x215)]()+_0x8c838d[_0x1f58b6(0x270)](0x1);if(_0x8c838d[_0x1f58b6(0x24a)](/STYPE/i))_0x8c838d='SType';const _0x50e53f=_0x1f58b6(0x25b)[_0x1f58b6(0x1c5)](_0x8c838d);if(_0x551ae9[_0x50e53f])return _0x551ae9[_0x50e53f](_0x4d5d0c);return 0x0;}),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bTIMES[ ](ELEMENT|ITEM|SKILL|STYPE|STATE)[ ](.*)[ ](?:STRIKE|STRUCK)\b/gi,(_0x511ebc,_0x58778e,_0x216ac3)=>{const _0x2ed756=_0x16de22;if(_0x2ed756(0x253)==='GcgkO'){let _0x2d4e25=_0x58778e;const _0x3710cf=_0x216ac3;let _0x34b470=0x0;switch(_0x2d4e25[_0x2ed756(0x215)]()[_0x2ed756(0x20c)]()){case _0x2ed756(0x2b0):_0x34b470=DataManager[_0x2ed756(0x2bf)](_0x3710cf);break;case _0x2ed756(0x19e):_0x34b470=DataManager[_0x2ed756(0x1b1)](_0x3710cf);break;case _0x2ed756(0x288):_0x34b470=DataManager[_0x2ed756(0x287)](_0x3710cf);break;case'STYPE':_0x34b470=DataManager[_0x2ed756(0x32f)](_0x3710cf);break;case'STATE':_0x34b470=DataManager['getStateIdWithName'](_0x3710cf);break;default:return 0x0;}_0x2d4e25=_0x2d4e25[_0x2ed756(0x301)](0x0)['toUpperCase']()+_0x2d4e25[_0x2ed756(0x270)](0x1);if(_0x2d4e25[_0x2ed756(0x24a)](/STYPE/i))_0x2d4e25='SType';const _0x37667b='timesStruck%1'[_0x2ed756(0x1c5)](_0x2d4e25);if(_0x551ae9[_0x37667b])return _0x551ae9[_0x37667b](_0x34b470);return 0x0;}else{const _0x545c44=this[_0x2ed756(0x31c)]()[_0x2ed756(0x1ec)];return _0x545c44[_0x2fad7f]||0x0;}}),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bALIVE MEMBERS\b/gi,$gameParty[_0x16de22(0x326)]()[_0x16de22(0x1a2)]),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bBATTLE MEMBERS\b/gi,$gameParty[_0x16de22(0x2f6)]()[_0x16de22(0x1a2)]),_0x476b63=_0x476b63['replace'](/\bBATTLE TURNS\b/gi,$gameTroop[_0x16de22(0x1e7)]()),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bDEAD MEMBERS\b/gi,$gameParty[_0x16de22(0x1ad)]()[_0x16de22(0x1a2)]),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bDEATH TURN\b/gi,_0x551ae9[_0x16de22(0x1e0)]()||0x1),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bENEMY LEVEL\b/gi,_0x551ae9[_0x16de22(0x2ab)]||0x1),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bPARTY GOLD\b/gi,$gameParty[_0x16de22(0x1d1)]()),_0x476b63=_0x476b63[_0x16de22(0x21f)](/\bPARTY MEMBERS\b/gi,$gameParty[_0x16de22(0x205)]()[_0x16de22(0x1a2)]),_0x476b63;},VisuMZ[_0x19ee20(0x2bb)][_0x19ee20(0x2ff)]=Game_Troop['prototype'][_0x19ee20(0x2e5)],Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x2e5)]=function(){const _0xbd9c5c=_0x19ee20;VisuMZ[_0xbd9c5c(0x2bb)][_0xbd9c5c(0x2ff)]['call'](this),this[_0xbd9c5c(0x2d2)](),this['clearBonusRewards']();},Game_Troop['prototype'][_0x19ee20(0x2d2)]=function(){const _0x16c298=_0x19ee20;this[_0x16c298(0x1d4)]={'exp':undefined,'gold':undefined,'drops':undefined};},Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x210)]=function(){const _0x4e8d11=_0x19ee20;this[_0x4e8d11(0x340)]={'exp':0x0,'gold':0x0,'drops':[]};},VisuMZ['ExtraEnemyDrops']['Game_Troop_expTotal']=Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x26a)],Game_Troop['prototype'][_0x19ee20(0x26a)]=function(){const _0x4d62a3=_0x19ee20;if(this[_0x4d62a3(0x1d4)]===undefined)this[_0x4d62a3(0x2d2)]();if(this['_bonusRewards']===undefined)this[_0x4d62a3(0x210)]();let _0x87949c=this[_0x4d62a3(0x2c6)]?this[_0x4d62a3(0x2c6)]():0x1,_0xcf3b61=this[_0x4d62a3(0x1d4)][_0x4d62a3(0x2c9)]===undefined?VisuMZ[_0x4d62a3(0x2bb)][_0x4d62a3(0x24c)][_0x4d62a3(0x1aa)](this):this[_0x4d62a3(0x1d4)][_0x4d62a3(0x2c9)]*_0x87949c;return Math[_0x4d62a3(0x28c)](Math['max'](_0xcf3b61+(this[_0x4d62a3(0x340)]['exp']||0x0),0x0));},VisuMZ['ExtraEnemyDrops']['Game_Troop_goldTotal']=Game_Troop[_0x19ee20(0x298)]['goldTotal'],Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x233)]=function(){const _0x3fc11d=_0x19ee20;if(this[_0x3fc11d(0x1d4)]===undefined)this[_0x3fc11d(0x2d2)]();if(this[_0x3fc11d(0x340)]===undefined)this[_0x3fc11d(0x210)]();let _0x9caf67=this['goldRate']?this['goldRate']():0x1,_0x1ae0b9=this[_0x3fc11d(0x1d4)][_0x3fc11d(0x1d1)]===undefined?VisuMZ['ExtraEnemyDrops'][_0x3fc11d(0x1ab)][_0x3fc11d(0x1aa)](this):this[_0x3fc11d(0x1d4)][_0x3fc11d(0x1d1)]*_0x9caf67;return Math[_0x3fc11d(0x28c)](Math[_0x3fc11d(0x268)](_0x1ae0b9+(this['_bonusRewards']['gold']||0x0)*this[_0x3fc11d(0x274)](),0x0));},VisuMZ[_0x19ee20(0x2bb)][_0x19ee20(0x1a1)]=Game_Troop[_0x19ee20(0x298)]['makeDropItems'],Game_Troop[_0x19ee20(0x298)]['makeDropItems']=function(){const _0x427f97=_0x19ee20;if(this[_0x427f97(0x1d4)]===undefined)this[_0x427f97(0x2d2)]();if(this[_0x427f97(0x340)]===undefined)this[_0x427f97(0x210)]();let _0x4ede09=this['_forcedRewards'][_0x427f97(0x1f5)]===undefined?VisuMZ[_0x427f97(0x2bb)]['Game_Troop_makeDropItems'][_0x427f97(0x1aa)](this):this[_0x427f97(0x1d4)]['drops'];return _0x4ede09[_0x427f97(0x263)](this[_0x427f97(0x340)][_0x427f97(0x1f5)]);},Game_Troop['prototype']['setForcedExp']=function(_0x38376e){const _0x18ad21=_0x19ee20;if(this[_0x18ad21(0x1d4)]===undefined)this[_0x18ad21(0x2d2)]();if(this[_0x18ad21(0x340)]===undefined)this['clearBonusRewards']();this[_0x18ad21(0x1d4)]['exp']=Math[_0x18ad21(0x268)](0x0,Math[_0x18ad21(0x28c)](_0x38376e));},Game_Troop[_0x19ee20(0x298)]['setBonusExp']=function(_0x326ce9){const _0x534602=_0x19ee20;if(this[_0x534602(0x1d4)]===undefined)this[_0x534602(0x2d2)]();if(this[_0x534602(0x340)]===undefined)this[_0x534602(0x210)]();this[_0x534602(0x340)][_0x534602(0x2c9)]=Math['max'](0x0,Math[_0x534602(0x28c)](_0x326ce9));},Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x1f9)]=function(_0xb6fd59){const _0x161a85=_0x19ee20;if(this[_0x161a85(0x1d4)]===undefined)this['clearForcedRewards']();if(this[_0x161a85(0x340)]===undefined)this[_0x161a85(0x210)]();this[_0x161a85(0x1d4)][_0x161a85(0x1d1)]=Math[_0x161a85(0x268)](0x0,Math[_0x161a85(0x28c)](_0xb6fd59));},Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x2e8)]=function(_0x2241cc){const _0x10233c=_0x19ee20;if(this[_0x10233c(0x1d4)]===undefined)this[_0x10233c(0x2d2)]();if(this[_0x10233c(0x340)]===undefined)this[_0x10233c(0x210)]();this[_0x10233c(0x340)][_0x10233c(0x1d1)]=Math[_0x10233c(0x268)](0x0,Math[_0x10233c(0x28c)](_0x2241cc));},Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x308)]=function(_0x49a27d,_0x40047c){const _0x444819=_0x19ee20;if(this[_0x444819(0x1d4)]===undefined)this[_0x444819(0x2d2)]();if(this['_bonusRewards']===undefined)this[_0x444819(0x210)]();_0x40047c=_0x40047c||0x1,this[_0x444819(0x1d4)][_0x444819(0x1f5)]=this[_0x444819(0x1d4)][_0x444819(0x1f5)]||[];while(_0x40047c--){const _0x31d676=$dataItems[_0x49a27d];if(_0x31d676)this[_0x444819(0x1d4)][_0x444819(0x1f5)][_0x444819(0x2ae)](_0x31d676);}},Game_Troop[_0x19ee20(0x298)]['addForcedWeaponDrop']=function(_0xb16d23,_0x45e64c){const _0x23469f=_0x19ee20;if(this['_forcedRewards']===undefined)this[_0x23469f(0x2d2)]();if(this[_0x23469f(0x340)]===undefined)this[_0x23469f(0x210)]();_0x45e64c=_0x45e64c||0x1,this[_0x23469f(0x1d4)][_0x23469f(0x1f5)]=this[_0x23469f(0x1d4)][_0x23469f(0x1f5)]||[];while(_0x45e64c--){const _0x1820fc=$dataWeapons[_0xb16d23];if(_0x1820fc)this['_forcedRewards'][_0x23469f(0x1f5)][_0x23469f(0x2ae)](_0x1820fc);}},Game_Troop['prototype']['addForcedArmorDrop']=function(_0x24fab0,_0x5a75f8){const _0x5cad6f=_0x19ee20;if(this[_0x5cad6f(0x1d4)]===undefined)this[_0x5cad6f(0x2d2)]();if(this[_0x5cad6f(0x340)]===undefined)this[_0x5cad6f(0x210)]();_0x5a75f8=_0x5a75f8||0x1,this[_0x5cad6f(0x1d4)][_0x5cad6f(0x1f5)]=this[_0x5cad6f(0x1d4)]['drops']||[];while(_0x5a75f8--){const _0x41427e=$dataArmors[_0x24fab0];if(_0x41427e)this[_0x5cad6f(0x1d4)]['drops'][_0x5cad6f(0x2ae)](_0x41427e);}},Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x2a6)]=function(_0x2a510d,_0x1bd612){const _0x932eb1=_0x19ee20;if(this[_0x932eb1(0x1d4)]===undefined)this['clearForcedRewards']();if(this[_0x932eb1(0x340)]===undefined)this['clearBonusRewards']();_0x1bd612=_0x1bd612||0x1;while(_0x1bd612--){const _0x10cc2e=$dataItems[_0x2a510d];if(_0x10cc2e)this[_0x932eb1(0x340)][_0x932eb1(0x1f5)][_0x932eb1(0x2ae)](_0x10cc2e);}},Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x218)]=function(_0x2aa7a8,_0x1e92a5){const _0x2f4564=_0x19ee20;if(this[_0x2f4564(0x1d4)]===undefined)this[_0x2f4564(0x2d2)]();if(this[_0x2f4564(0x340)]===undefined)this['clearBonusRewards']();_0x1e92a5=_0x1e92a5||0x1;while(_0x1e92a5--){if(_0x2f4564(0x299)===_0x2f4564(0x2ea)){_0x5aebb7[_0x2f4564(0x298)]['update'][_0x2f4564(0x1aa)](this),this[_0x2f4564(0x2ec)]();if(this[_0x2f4564(0x1d2)]<=0x0)return;this[_0x2f4564(0x320)](),this[_0x2f4564(0x2a5)](),this[_0x2f4564(0x30d)](),this[_0x2f4564(0x2d0)](),this[_0x2f4564(0x201)](),this['updateTint'](),this[_0x2f4564(0x1c9)]();}else{const _0x4b60bb=$dataWeapons[_0x2aa7a8];if(_0x4b60bb)this['_bonusRewards'][_0x2f4564(0x1f5)][_0x2f4564(0x2ae)](_0x4b60bb);}}},Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x234)]=function(_0x2b7aa1,_0x558294){const _0x51ccf2=_0x19ee20;if(this[_0x51ccf2(0x1d4)]===undefined)this[_0x51ccf2(0x2d2)]();if(this[_0x51ccf2(0x340)]===undefined)this['clearBonusRewards']();_0x558294=_0x558294||0x1;while(_0x558294--){const _0x589235=$dataArmors[_0x2b7aa1];if(_0x589235)this['_bonusRewards']['drops']['push'](_0x589235);}},Game_Troop[_0x19ee20(0x298)][_0x19ee20(0x266)]=function(){const _0x322c60=_0x19ee20;if(this[_0x322c60(0x1d4)]===undefined)this[_0x322c60(0x2d2)]();return this[_0x322c60(0x1d4)][_0x322c60(0x1f5)]!==undefined;};if(Imported[_0x19ee20(0x21a)]&&VisuMZ[_0x19ee20(0x2bb)][_0x19ee20(0x217)][_0x19ee20(0x249)][_0x19ee20(0x260)]){VisuMZ['VisualDrops']=VisuMZ['VisualDrops']||{},VisuMZ[_0x19ee20(0x2f9)][_0x19ee20(0x26d)]=BattleManager[_0x19ee20(0x1e6)],BattleManager[_0x19ee20(0x1e6)]=function(){const _0x74ac52=_0x19ee20;$gameTemp[_0x74ac52(0x265)]=[],BattleManager[_0x74ac52(0x290)]=!![],VisuMZ[_0x74ac52(0x2f9)][_0x74ac52(0x26d)][_0x74ac52(0x1aa)](this);},VisuMZ[_0x19ee20(0x2f9)][_0x19ee20(0x2e4)]=Game_BattlerBase[_0x19ee20(0x298)][_0x19ee20(0x29b)],Game_BattlerBase['prototype']['addNewState']=function(_0x2556f7){const _0x238aad=_0x19ee20,_0x1294fb=this[_0x238aad(0x213)]();VisuMZ[_0x238aad(0x2f9)][_0x238aad(0x2e4)][_0x238aad(0x1aa)](this,_0x2556f7);if(!Imported[_0x238aad(0x21a)])return;if(!this[_0x238aad(0x1a5)]())return;if(!SceneManager[_0x238aad(0x2eb)]())return;const _0x4c1ed3=SceneManager['_scene'][_0x238aad(0x2df)];if(!_0x4c1ed3)return;_0x1294fb&&this[_0x238aad(0x280)]()&&(_0x238aad(0x1f1)!==_0x238aad(0x1f4)?_0x4c1ed3[_0x238aad(0x316)](this):(this[_0x238aad(0x22c)]=_0x3344a1,this[_0x238aad(0x1da)]=this[_0x238aad(0x22c)][_0x238aad(0x1a9)],this[_0x238aad(0x242)]=this[_0x238aad(0x22c)]['baseY']));},VisuMZ[_0x19ee20(0x2f9)][_0x19ee20(0x1c6)]=Game_BattlerBase[_0x19ee20(0x298)][_0x19ee20(0x238)],Game_BattlerBase[_0x19ee20(0x298)]['eraseState']=function(_0x536945){const _0x24e717=_0x19ee20,_0x467350=this[_0x24e717(0x280)]();VisuMZ[_0x24e717(0x2f9)][_0x24e717(0x1c6)][_0x24e717(0x1aa)](this,_0x536945);if(!Imported[_0x24e717(0x21a)])return;if(!this['isEnemy']())return;if(!SceneManager[_0x24e717(0x2eb)]())return;const _0x1d3026=SceneManager['_scene'][_0x24e717(0x2df)];if(!_0x1d3026)return;if(_0x467350&&this['isAlive']()){_0x1d3026[_0x24e717(0x225)](this);if(VisuMZ[_0x24e717(0x2bb)][_0x24e717(0x217)]['General']['resetOnRevive'])this['resetVisualDrops']();}},VisuMZ[_0x19ee20(0x2f9)]['Game_Enemy_setup']=Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x291)],Game_Enemy[_0x19ee20(0x298)]['setup']=function(_0x416b71,_0x27b4d4,_0x540844){const _0x107817=_0x19ee20;VisuMZ['VisualDrops'][_0x107817(0x2c5)]['call'](this,_0x416b71,_0x27b4d4,_0x540844);},Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x26b)]=function(){const _0xd68ffe=_0x19ee20;this[_0xd68ffe(0x1ac)]={};},VisuMZ[_0x19ee20(0x2f9)][_0x19ee20(0x318)]=Game_Enemy['prototype'][_0x19ee20(0x2c9)],Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x2c9)]=function(){const _0x222e9d=_0x19ee20;this[_0x222e9d(0x1ac)]=this['_visualDrops']||{};if(this['_visualDrops'][_0x222e9d(0x2c9)]!==undefined)return this[_0x222e9d(0x1ac)]['exp'];return this[_0x222e9d(0x1ac)][_0x222e9d(0x2c9)]=VisuMZ[_0x222e9d(0x2f9)]['Game_Enemy_exp'][_0x222e9d(0x1aa)](this),this[_0x222e9d(0x1ac)][_0x222e9d(0x2c9)];},VisuMZ[_0x19ee20(0x2f9)]['Game_Enemy_gold']=Game_Enemy[_0x19ee20(0x298)]['gold'],Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x1d1)]=function(){const _0x53bf12=_0x19ee20;this[_0x53bf12(0x1ac)]=this[_0x53bf12(0x1ac)]||{};if(this['_visualDrops'][_0x53bf12(0x1d1)]!==undefined)return this[_0x53bf12(0x1ac)][_0x53bf12(0x1d1)];return this[_0x53bf12(0x1ac)][_0x53bf12(0x1d1)]=VisuMZ[_0x53bf12(0x2f9)][_0x53bf12(0x19d)][_0x53bf12(0x1aa)](this),this[_0x53bf12(0x1ac)]['gold'];},VisuMZ['VisualDrops'][_0x19ee20(0x2b5)]=Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x1ee)],Game_Enemy[_0x19ee20(0x298)][_0x19ee20(0x1ee)]=function(){const _0x328a0e=_0x19ee20;this['_visualDrops']=this[_0x328a0e(0x1ac)]||{};if(this[_0x328a0e(0x1ac)][_0x328a0e(0x1f5)]!==undefined)return this['_visualDrops'][_0x328a0e(0x1f5)];return this[_0x328a0e(0x1ac)][_0x328a0e(0x1f5)]=VisuMZ[_0x328a0e(0x2f9)][_0x328a0e(0x2b5)][_0x328a0e(0x1aa)](this),this[_0x328a0e(0x1ac)]['drops'];},Spriteset_Battle[_0x19ee20(0x298)]['removeVisualDrops']=function(_0x11f73f){const _0x2202b9=_0x19ee20;if(!_0x11f73f)return;$gameTemp[_0x2202b9(0x265)]=$gameTemp[_0x2202b9(0x265)]||[];const _0x1b25f2=[];for(const _0x35bb13 of $gameTemp[_0x2202b9(0x265)]){if(_0x2202b9(0x2e2)===_0x2202b9(0x2e1))_0x415ec3[_0x2202b9(0x2bb)]['Scene_Boot_onDatabaseLoaded'][_0x2202b9(0x1aa)](this),this['process_VisuMZ_ExtraEnemyDrops_Notetags']();else{if(!_0x35bb13)continue;if(_0x35bb13['enemy']!==_0x11f73f)continue;const _0xf4598b=this[_0x2202b9(0x1b8)](_0x35bb13);if(!_0xf4598b)continue;_0xf4598b[_0x2202b9(0x1a4)](),_0x1b25f2[_0x2202b9(0x2ae)](_0x35bb13);}}for(const _0x4c53ea of _0x1b25f2){$gameTemp['_visualDropSprites']['remove'](_0x4c53ea);}},Spriteset_Battle[_0x19ee20(0x298)][_0x19ee20(0x1b8)]=function(_0x11adea){const _0x1cf9c3=_0x19ee20;return this[_0x1cf9c3(0x272)][_0x1cf9c3(0x21b)][_0x1cf9c3(0x1f7)](_0x4a6936=>_0x4a6936[_0x1cf9c3(0x22c)]===_0x11adea);},Spriteset_Battle[_0x19ee20(0x298)]['createVisualDrops']=function(_0x36a641){const _0x290267=_0x19ee20,_0x24f272=VisuMZ[_0x290267(0x2bb)][_0x290267(0x217)];if(!_0x36a641)return;let _0x5dcd54=[];_0x24f272[_0x290267(0x330)][_0x290267(0x2a3)]&&(_0x290267(0x2af)!==_0x290267(0x2a9)?_0x5dcd54[_0x290267(0x2ae)](VisuMZ['VisualDrops'][_0x290267(0x309)](_0x36a641,_0x290267(0x330))):_0x15326b=_0x54bca4['replace'](/\bVARIABLE (\d+)\b/gi,(_0x24f0ce,_0x11007a)=>_0x1b4fc7[_0x290267(0x2ee)](_0x130e9c(_0x11007a))));_0x24f272['Gold']['show']&&_0x5dcd54['push'](VisuMZ[_0x290267(0x2f9)][_0x290267(0x309)](_0x36a641,_0x290267(0x2c1)));_0x24f272['Drop'][_0x290267(0x2a3)]&&(_0x5dcd54=_0x5dcd54[_0x290267(0x263)](VisuMZ[_0x290267(0x2f9)][_0x290267(0x1b6)](_0x36a641)));const _0x5302b3=VisuMZ[_0x290267(0x2f9)]['createSprites'](_0x36a641,_0x5dcd54);$gameTemp[_0x290267(0x265)]=$gameTemp['_visualDropSprites']||[];let _0x2b8618=0x0;for(const _0x2b8d5a of _0x5302b3){if('YXReF'===_0x290267(0x262)){_0x4252e4[_0x290267(0x1f3)](_0x57b792,_0x3e6fae);const _0x86d049=_0x1b1722['id'],_0x1efff1=_0x29e804[_0x290267(0x314)];_0x3c9905[_0x290267(0x218)](_0x86d049,_0x1efff1);}else{if(!_0x2b8d5a)continue;$gameTemp[_0x290267(0x265)][_0x290267(0x2ae)](_0x2b8d5a[_0x290267(0x22c)]),setTimeout(this['addVisualDrops'][_0x290267(0x283)](this,_0x2b8d5a),_0x2b8618),_0x2b8618+=_0x24f272['General'][_0x290267(0x2dc)];}}},Spriteset_Battle[_0x19ee20(0x298)]['addVisualDrops']=function(_0xdcd700){const _0x49d4de=_0x19ee20;if(!SceneManager[_0x49d4de(0x2eb)]())return;this[_0x49d4de(0x272)][_0x49d4de(0x29e)](_0xdcd700),_0xdcd700[_0x49d4de(0x1d7)]();},VisuMZ[_0x19ee20(0x2f9)][_0x19ee20(0x309)]=function(_0x7cdaa6,_0x13e776){const _0x98edd6=_0x19ee20;if(!_0x7cdaa6)return 0x0;const _0x9c6ae2=VisuMZ[_0x98edd6(0x2bb)]['Settings'][_0x13e776],_0xab2cbe=VisuMZ[_0x98edd6(0x2bb)][_0x98edd6(0x217)]['Rarity'],_0x52d65d=_0x13e776===_0x98edd6(0x330)?_0x7cdaa6[_0x98edd6(0x2c9)]():_0x7cdaa6[_0x98edd6(0x1d1)]();let _0x4c9d06=0x0,_0x58204e=0x0,_0x296f85=_0xab2cbe[_0x98edd6(0x19b)],_0x29a597=_0xab2cbe[_0x98edd6(0x337)],_0x5600f1=JsonEx['makeDeepCopy'](_0xab2cbe[_0x98edd6(0x230)]);for(let _0x1aef11=0x1;_0x1aef11<=0xa;_0x1aef11++){if('MAlAd'!=='TPYtv'){const _0x9d6e0f=_0x98edd6(0x2f8)['format'](_0x1aef11),_0x1e07e9=_0x98edd6(0x33d)['format'](_0x1aef11),_0x5c185d=_0x98edd6(0x20b)['format'](_0x1aef11);if(_0x9c6ae2[_0x9d6e0f]<_0x4c9d06)continue;if(_0x52d65d<_0x9c6ae2[_0x9d6e0f])continue;_0x4c9d06=_0x9c6ae2[_0x9d6e0f],_0x58204e=_0x9c6ae2[_0x1e07e9];const _0x2156e=_0x9c6ae2[_0x5c185d]['clamp'](0x0,0xa);_0x296f85=_0xab2cbe[_0x98edd6(0x297)['format'](_0x2156e)]||[0x0,0x0,0x0,0x0],_0x29a597=_0xab2cbe[_0x98edd6(0x209)[_0x98edd6(0x1c5)](_0x2156e)]||0x1,_0x5600f1=_0xab2cbe[_0x98edd6(0x1dc)[_0x98edd6(0x1c5)](_0x2156e)]||[];}else _0x52622f[_0x98edd6(0x2f9)][_0x98edd6(0x28e)][_0x98edd6(0x1aa)](this),this['restoreVisualDrops']();}return[_0x58204e,_0x296f85,_0x29a597,_0x5600f1];},VisuMZ[_0x19ee20(0x2f9)][_0x19ee20(0x1b6)]=function(_0x2dbb1c){const _0x51c916=_0x19ee20,_0x166399=[],_0x19a7ec=_0x2dbb1c[_0x51c916(0x1ee)](),_0x2955ee=VisuMZ[_0x51c916(0x2bb)][_0x51c916(0x217)][_0x51c916(0x306)],_0x22f213=VisuMZ[_0x51c916(0x2bb)][_0x51c916(0x217)]['Rarity'];for(const _0x477c96 of _0x19a7ec){if(!_0x477c96)continue;const _0x33d2af=[];if(_0x477c96['note'][_0x51c916(0x24a)](/<VISUAL DROP ICON:[ ](\d+)>/i))_0x33d2af['push'](Number(RegExp['$1'])||0x0);else{if(_0x2955ee[_0x51c916(0x1ce)])_0x33d2af[_0x51c916(0x2ae)](_0x477c96['iconIndex']);else{if(_0x51c916(0x246)==='QZvOg')this[_0x51c916(0x1d0)](_0x51c916(0x1b2),_0x35843c['id']);else{if(DataManager[_0x51c916(0x1d8)](_0x477c96))_0x33d2af[_0x51c916(0x2ae)](_0x2955ee[_0x51c916(0x1f8)]);else{if(DataManager[_0x51c916(0x1bc)](_0x477c96)){if('Ltalp'===_0x51c916(0x325))_0x33d2af[_0x51c916(0x2ae)](_0x2955ee['commonWeaponIcon']);else{_0x3950c6[_0x51c916(0x1f3)](_0x2f5614,_0x48e883);const _0x1c17b5=_0x5d584c['id'],_0x270302=_0x123186[_0x51c916(0x314)];_0x28e8ea[_0x51c916(0x234)](_0x1c17b5,_0x270302);}}else DataManager[_0x51c916(0x2fe)](_0x477c96)&&_0x33d2af[_0x51c916(0x2ae)](_0x2955ee['commonArmorsIcon']);}}}}if(_0x477c96[_0x51c916(0x21c)]['match'](/<VISUAL DROP RARITY:[ ](\d+)>/i)){const _0xe7cfbc=Number(RegExp['$1'])[_0x51c916(0x2cf)](0x0,0xa);_0x33d2af[_0x51c916(0x2ae)](_0x22f213[_0x51c916(0x297)[_0x51c916(0x1c5)](_0xe7cfbc)]||[0x0,0x0,0x0,0x0]),_0x33d2af[_0x51c916(0x2ae)](_0x22f213['Duration%1'[_0x51c916(0x1c5)](_0xe7cfbc)]||0xb4),_0x33d2af[_0x51c916(0x2ae)](_0x22f213[_0x51c916(0x1dc)[_0x51c916(0x1c5)](_0xe7cfbc)]||[]);}else{if(_0x477c96[_0x51c916(0x21c)][_0x51c916(0x24a)](/<VISUAL DROP TINT COLOR:[ ](.*)>/i)){let _0x5bc329=String(RegExp['$1'])[_0x51c916(0x289)](',')['map'](_0x348f3e=>Number(_0x348f3e)[_0x51c916(0x2cf)](-0xff,0xff));while(_0x5bc329['length']<0x4)_0x5bc329[_0x51c916(0x2ae)](0x0);_0x33d2af['push'](_0x5bc329);}else _0x33d2af['push'](_0x22f213['Tint0']);if(_0x477c96[_0x51c916(0x21c)][_0x51c916(0x24a)](/<VISUAL DROP TINT DURATION:[ ](\d+)>/i)){if(_0x51c916(0x31b)===_0x51c916(0x31b))_0x33d2af[_0x51c916(0x2ae)](Number(RegExp['$1'])||0xb4);else{_0x323e84[_0x51c916(0x1f3)](_0x3ad6d6,_0xeab83a);const _0x36e8bc=_0x56402d['id'],_0x36bcba=_0x4c8658[_0x51c916(0x314)];_0x5c35a3[_0x51c916(0x1fd)](_0x36e8bc,_0x36bcba);}}else _0x33d2af[_0x51c916(0x2ae)](_0x22f213['TintDuration0']);_0x33d2af[_0x51c916(0x2ae)](JsonEx[_0x51c916(0x1bf)](_0x22f213['Flags0']));}const _0x5a1c9a=_0x477c96[_0x51c916(0x21c)][_0x51c916(0x24a)](/<VISUAL DROP FLAG:[ ](.*)>/gi);if(_0x5a1c9a){if('cuVTn'!==_0x51c916(0x200))for(const _0x459f42 of _0x5a1c9a){if('ZsUVm'===_0x51c916(0x29d)){_0x459f42[_0x51c916(0x24a)](/<VISUAL DROP FLAG:[ ](.*)>/i);const _0x4e9928=String(RegExp['$1']);_0x33d2af[_0x33d2af[_0x51c916(0x1a2)]-0x1]['push'](_0x4e9928);}else _0x4a4f64[_0x51c916(0x2ae)](_0x33a222(_0x5ad69a['$1'])||0xb4);}else _0x4c9181[_0x51c916(0x2f9)]['Game_Enemy_setup'][_0x51c916(0x1aa)](this,_0xe446ca,_0x4fd8df,_0x5177d4);}if(_0x477c96['note'][_0x51c916(0x24a)](/<VISUAL DROP SFX:[ ](.*)>/i)){if(_0x51c916(0x33c)!==_0x51c916(0x334)){const _0x36c22d=_0x51c916(0x313)[_0x51c916(0x1c5)](String(RegExp['$1']));_0x33d2af[_0x33d2af[_0x51c916(0x1a2)]-0x1][_0x51c916(0x2ae)](_0x36c22d);}else this[_0x51c916(0x31e)](...arguments);}if(_0x477c96[_0x51c916(0x21c)][_0x51c916(0x24a)](/<VISUAL DROP SPAWN SFX:[ ](.*)>/i)){const _0x6f2575=_0x51c916(0x313)[_0x51c916(0x1c5)](String(RegExp['$1']));_0x33d2af[_0x33d2af[_0x51c916(0x1a2)]-0x1]['push'](_0x6f2575);}if(_0x477c96[_0x51c916(0x21c)][_0x51c916(0x24a)](/<VISUAL DROP BOUNCE HEIGHT:[ ](\d+)([%％])>/i)){const _0x1558ef=_0x51c916(0x1cb)['format'](Number(RegExp['$1']));_0x33d2af[_0x33d2af[_0x51c916(0x1a2)]-0x1][_0x51c916(0x2ae)](_0x1558ef);}if(_0x477c96[_0x51c916(0x21c)][_0x51c916(0x24a)](/<VISUAL DROP BOUNCE SFX:[ ](.*)>/i)){const _0x380e9e='BOUNCE\x20SFX:\x20%1'[_0x51c916(0x1c5)](String(RegExp['$1']));_0x33d2af[_0x33d2af['length']-0x1][_0x51c916(0x2ae)](_0x380e9e);}_0x166399['push'](_0x33d2af);}return _0x166399;},VisuMZ['VisualDrops'][_0x19ee20(0x2f2)]=function(_0xb9c062,_0x34adf7){const _0x58edfd=_0x19ee20;_0x34adf7=_0x34adf7[_0x58edfd(0x307)](_0xc68f3c=>_0xc68f3c[0x0]!==0x0);if(_0x34adf7[_0x58edfd(0x1a2)]<=0x0)return[];const _0x1a6d1d=VisuMZ['ExtraEnemyDrops'][_0x58edfd(0x217)][_0x58edfd(0x249)],_0x66a136=0x168/_0x34adf7[_0x58edfd(0x1a2)],_0x38a1c5=_0xb9c062[_0x58edfd(0x214)](),_0x50649b=[];let _0x12e114=Math['randomInt'](0x168);for(const _0x4b17c8 of _0x34adf7){if(_0x4b17c8[0x0]<=0x0)continue;const _0x10d934=new Sprite_VisualDrop(_0xb9c062,_0x4b17c8);_0x50649b[_0x58edfd(0x2ae)](_0x10d934);if(_0x38a1c5&&_0x34adf7[_0x58edfd(0x1a2)]>0x1){const _0x40b85e=_0x1a6d1d['radius']+_0x1a6d1d[_0x58edfd(0x1b4)]*_0x34adf7[_0x58edfd(0x1a2)],_0x41822c=_0x40b85e*Math['cos'](_0x12e114*Math['PI']/0xb4),_0xfe722d=_0x40b85e*(Math[_0x58edfd(0x285)](_0x12e114*Math['PI']/0xb4)*_0x1a6d1d[_0x58edfd(0x2d1)]);_0x10d934[_0x58edfd(0x2b7)](_0x41822c+_0x38a1c5[_0x58edfd(0x1da)],_0xfe722d+_0x38a1c5['_baseY']),_0x12e114+=_0x66a136;}}return _0x50649b;},VisuMZ[_0x19ee20(0x2f9)][_0x19ee20(0x28e)]=Spriteset_Battle['prototype'][_0x19ee20(0x322)],Spriteset_Battle[_0x19ee20(0x298)][_0x19ee20(0x322)]=function(){const _0xffe9c7=_0x19ee20;VisuMZ[_0xffe9c7(0x2f9)][_0xffe9c7(0x28e)][_0xffe9c7(0x1aa)](this),this[_0xffe9c7(0x1c7)]();},Spriteset_Battle[_0x19ee20(0x298)][_0x19ee20(0x1c7)]=function(){const _0x4144fe=_0x19ee20;$gameTemp[_0x4144fe(0x265)]=$gameTemp[_0x4144fe(0x265)]||[];for(const _0x1935ff of $gameTemp[_0x4144fe(0x265)]){if(_0x4144fe(0x1e1)!==_0x4144fe(0x1e1))_0x2130a6[_0x4144fe(0x2ae)](_0x2ba76b[_0x4144fe(0x1f8)]);else{if(!_0x1935ff)continue;const _0x205db8=new Sprite_VisualDrop(_0x1935ff[_0x4144fe(0x23e)],_0x1935ff[_0x4144fe(0x282)],_0x1935ff);this[_0x4144fe(0x272)][_0x4144fe(0x29e)](_0x205db8);}}};function Sprite_VisualDrop(){const _0x3cf6c4=_0x19ee20;this[_0x3cf6c4(0x31e)](...arguments);}Sprite_VisualDrop[_0x19ee20(0x298)]=Object['create'](Sprite['prototype']),Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x281)]=Sprite_VisualDrop,Sprite_VisualDrop['prototype'][_0x19ee20(0x31e)]=function(_0xbcd6fb,_0x39e07d,_0x1b6038){const _0x12c590=_0x19ee20;_0x1b6038?_0x12c590(0x208)!==_0x12c590(0x33b)?(this[_0x12c590(0x22c)]=_0x1b6038,this['_baseX']=this[_0x12c590(0x22c)][_0x12c590(0x1a9)],this[_0x12c590(0x242)]=this['_data']['baseY']):_0x3e4bbd['push'](_0x4fe166):this['_data']=this[_0x12c590(0x310)](_0xbcd6fb,_0x39e07d),Sprite[_0x12c590(0x298)]['initialize'][_0x12c590(0x1aa)](this),this['createChildren']();},Sprite_VisualDrop[_0x19ee20(0x298)]['createInitialPosition']=function(_0x735778,_0x453926){const _0x24e3af=_0x19ee20,_0x50c9a6=VisuMZ[_0x24e3af(0x2bb)][_0x24e3af(0x217)]['General'],_0x226e15=_0x735778['battler']();_0x453926=JsonEx[_0x24e3af(0x1bf)](_0x453926);const _0x11c444={'enemy':_0x735778,'iconIndex':_0x453926[0x0],'duration':_0x50c9a6[_0x24e3af(0x26e)],'angle':_0x50c9a6[_0x24e3af(0x1cc)],'jumpHeight':0x0,'bounces':_0x50c9a6[_0x24e3af(0x1f2)],'bounceSFX':_0x50c9a6[_0x24e3af(0x332)],'targetX':_0x226e15[_0x24e3af(0x1da)],'targetY':_0x226e15[_0x24e3af(0x242)],'targetOpacity':0xff,'opacityModifier':0x1,'rarityFrames':0x0,'rarityTint':_0x453926[0x1]||[0x0,0x0,0x0,0x0],'rarityDuration':_0x453926[0x2]||0xb4,'flags':_0x453926[0x3]||[]};this[_0x24e3af(0x1da)]=_0x226e15[_0x24e3af(0x1da)],this[_0x24e3af(0x242)]=_0x226e15[_0x24e3af(0x242)],_0x11c444[_0x24e3af(0x1a9)]=this[_0x24e3af(0x1da)],_0x11c444[_0x24e3af(0x1f0)]=this[_0x24e3af(0x242)],_0x11c444['flags']=_0x11c444[_0x24e3af(0x1e4)][_0x24e3af(0x2ad)](_0x1ea81e=>String(_0x1ea81e));for(const _0x28423e of _0x11c444[_0x24e3af(0x1e4)]){if(_0x24e3af(0x216)===_0x24e3af(0x216)){if(!_0x28423e)continue;if(_0x28423e[_0x24e3af(0x24a)](/BOUNCE SFX: (.*)/i)){const _0x26f968=String(RegExp['$1']);_0x11c444[_0x24e3af(0x203)]=_0x26f968;}}else return _0x28cdfd=this[_0x24e3af(0x300)](_0x11fd0a),_0x346047=this['addExtraEnemyDropsBatch'](_0x103fb3),_0x314088=this[_0x24e3af(0x261)](_0xa3f335),_0x33d806=this[_0x24e3af(0x2c3)](_0x11c835),_0x580aaf;}return _0x11c444;},Sprite_VisualDrop[_0x19ee20(0x298)]['createChildren']=function(){const _0x523e7a=_0x19ee20;this[_0x523e7a(0x1fb)](),this['createIconSprite'](),this[_0x523e7a(0x2ec)](!![]);},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x1fb)]=function(){const _0x15a1ed=_0x19ee20,_0x339dfc=VisuMZ[_0x15a1ed(0x2bb)][_0x15a1ed(0x217)][_0x15a1ed(0x249)];if(!_0x339dfc[_0x15a1ed(0x24e)])return;this[_0x15a1ed(0x2be)]=new Sprite(),this['_shadowSprite']['bitmap']=ImageManager['loadSystem'](_0x339dfc['shadowFilename']),this[_0x15a1ed(0x2be)][_0x15a1ed(0x1ae)]['x']=0.5,this[_0x15a1ed(0x2be)][_0x15a1ed(0x1ae)]['y']=0x1,this[_0x15a1ed(0x2be)]['x']=_0x339dfc['shadowOffsetX'],this['_shadowSprite']['y']=_0x339dfc[_0x15a1ed(0x202)],this[_0x15a1ed(0x2be)]['opacity']=_0x339dfc[_0x15a1ed(0x277)],this[_0x15a1ed(0x29e)](this[_0x15a1ed(0x2be)]);},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x241)]=function(){const _0x1e7461=_0x19ee20,_0x77b0ac=VisuMZ[_0x1e7461(0x2bb)][_0x1e7461(0x217)][_0x1e7461(0x249)];this[_0x1e7461(0x2a2)]=new Sprite(),this['_iconSprite'][_0x1e7461(0x30f)]=ImageManager[_0x1e7461(0x19a)]('IconSet'),this['_iconSprite'][_0x1e7461(0x1ae)]['x']=0.5,this[_0x1e7461(0x2a2)][_0x1e7461(0x1ae)]['y']=0.5,this[_0x1e7461(0x2a2)][_0x1e7461(0x1f0)]=Math[_0x1e7461(0x28c)](ImageManager[_0x1e7461(0x335)]/_0x77b0ac[_0x1e7461(0x2f4)]),this[_0x1e7461(0x2a2)]['y']=this[_0x1e7461(0x2a2)][_0x1e7461(0x1f0)];const _0x28f75e=this['_data'][_0x1e7461(0x282)],_0x558b4b=ImageManager[_0x1e7461(0x1de)],_0x13bce0=ImageManager[_0x1e7461(0x335)],_0x4b6140=_0x28f75e%0x10*_0x558b4b,_0xdc90a9=Math[_0x1e7461(0x1e8)](_0x28f75e/0x10)*_0x13bce0;this[_0x1e7461(0x2a2)][_0x1e7461(0x2bc)](_0x4b6140,_0xdc90a9,_0x558b4b,_0x13bce0),this['addChild'](this['_iconSprite']);},Sprite_VisualDrop['prototype'][_0x19ee20(0x2b7)]=function(_0x3bba51,_0x18c32f){const _0x3569d3=_0x19ee20;this[_0x3569d3(0x22c)]['targetX']=Math[_0x3569d3(0x28c)](_0x3bba51),this[_0x3569d3(0x22c)][_0x3569d3(0x2e3)]=Math[_0x3569d3(0x28c)](_0x18c32f);},Sprite_VisualDrop['prototype'][_0x19ee20(0x2b3)]=function(_0x48956d){const _0x1e6ee3=_0x19ee20,_0x2cbaaf=VisuMZ[_0x1e6ee3(0x2bb)][_0x1e6ee3(0x217)]['Rarity'],_0x39b978=(_0x2cbaaf[_0x1e6ee3(0x297)[_0x1e6ee3(0x1c5)](_0x48956d)]||[0x0,0x0,0x0,0x0])[_0x1e6ee3(0x2ad)](_0x9af11d=>Number(_0x9af11d)[_0x1e6ee3(0x2cf)](-0xff,0xff)),_0x1dc237=_0x2cbaaf[_0x1e6ee3(0x209)['format'](_0x48956d)]||0x0;this['setTintInformation'](_0x39b978,_0x1dc237);},Sprite_VisualDrop[_0x19ee20(0x298)]['setTintInformation']=function(_0x3de4c4,_0x3e69dc){const _0x383630=_0x19ee20;this[_0x383630(0x22c)][_0x383630(0x1a7)]=JsonEx['makeDeepCopy'](_0x3de4c4),this[_0x383630(0x22c)][_0x383630(0x232)]=_0x3e69dc;},Sprite_VisualDrop[_0x19ee20(0x298)]['setFlags']=function(_0xad4eaa){const _0x43d1c5=_0x19ee20;this[_0x43d1c5(0x22c)][_0x43d1c5(0x1e4)]=JsonEx[_0x43d1c5(0x1bf)](_0xad4eaa)['map'](_0x1449cd=>String(_0x1449cd));},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x1a4)]=function(){const _0x2d9abb=_0x19ee20;this[_0x2d9abb(0x22c)][_0x2d9abb(0x22f)]=0x0;},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x1d7)]=function(){const _0x3cf8d1=_0x19ee20;for(const _0x147220 of this[_0x3cf8d1(0x22c)]['flags']){if(!_0x147220)continue;if(_0x147220['match'](/\bSPAWN SFX:[ ](.*)\b/i)){if(_0x3cf8d1(0x255)==='xoHWh'){const _0x1635a1={'name':String(RegExp['$1']),'volume':0x5a,'pitch':0x64,'pan':0x0};AudioManager[_0x3cf8d1(0x339)](_0x1635a1);}else return _0x27b36d[_0xc9bad9[_0x3cf8d1(0x2a8)](_0x49f0ad)];}}},Sprite_VisualDrop[_0x19ee20(0x298)]['update']=function(){const _0x1030e3=_0x19ee20;Sprite[_0x1030e3(0x298)][_0x1030e3(0x1e3)][_0x1030e3(0x1aa)](this),this[_0x1030e3(0x2ec)]();if(this[_0x1030e3(0x1d2)]<=0x0)return;this[_0x1030e3(0x320)](),this['updateRotation'](),this['updateJumpHeight'](),this['calculatePosition'](),this[_0x1030e3(0x201)](),this[_0x1030e3(0x279)](),this[_0x1030e3(0x1c9)]();},Sprite_VisualDrop['prototype']['updateFlags']=function(){const _0x2e008f=_0x19ee20;for(const _0x486d3a of this[_0x2e008f(0x22c)][_0x2e008f(0x1e4)]){if(_0x2e008f(0x2e6)==='sttex'){if(!_0x486d3a)continue;this[_0x2e008f(0x286)](_0x486d3a);}else this['registerDeathTurn']();}},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x286)]=function(_0xef79fd){const _0x1d57b0=_0x19ee20,_0x26e07e=VisuMZ[_0x1d57b0(0x2bb)][_0x1d57b0(0x217)][_0x1d57b0(0x1af)];switch(_0xef79fd[_0x1d57b0(0x215)]()[_0x1d57b0(0x20c)]()){case _0x1d57b0(0x293):this[_0x1d57b0(0x22c)][_0x1d57b0(0x317)]=this[_0x1d57b0(0x22c)]['hue']||0x0,this[_0x1d57b0(0x22c)][_0x1d57b0(0x317)]+=_0x26e07e[_0x1d57b0(0x256)],this[_0x1d57b0(0x2a2)][_0x1d57b0(0x1c0)](this[_0x1d57b0(0x22c)][_0x1d57b0(0x317)]);break;case _0x1d57b0(0x1e2):this[_0x1d57b0(0x2a2)][_0x1d57b0(0x1d6)]=0x1;break;case _0x1d57b0(0x25f):this['_iconSprite'][_0x1d57b0(0x1d6)]=0x2;break;case _0x1d57b0(0x226):this[_0x1d57b0(0x2a2)][_0x1d57b0(0x1d6)]=0x3;break;};},Sprite_VisualDrop['prototype'][_0x19ee20(0x2ec)]=function(_0x305c56){const _0x3c5589=_0x19ee20,_0x382a15=VisuMZ[_0x3c5589(0x2bb)][_0x3c5589(0x217)][_0x3c5589(0x249)],_0x139a30=this[_0x3c5589(0x22c)][_0x3c5589(0x22f)]['clamp'](0x0,0xff)*this['opacityRate']();if(this[_0x3c5589(0x1d2)]>_0x139a30)this[_0x3c5589(0x1d2)]=Math[_0x3c5589(0x268)](this[_0x3c5589(0x1d2)]-_0x382a15[_0x3c5589(0x252)],_0x139a30);else this[_0x3c5589(0x1d2)]<_0x139a30&&(this['opacity']=Math['min'](this[_0x3c5589(0x1d2)]+_0x382a15['opacityFadeOut'],_0x139a30));if(_0x305c56)this[_0x3c5589(0x1d2)]=_0x139a30;},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x1db)]=function(){const _0x4e7a81=_0x19ee20;if(!BattleManager['_visualDropsVisible'])return 0x0;if($gameTroop[_0x4e7a81(0x266)]())return 0x0;return this[_0x4e7a81(0x22c)][_0x4e7a81(0x26f)];},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x2a5)]=function(){const _0x465366=_0x19ee20;this[_0x465366(0x22c)][_0x465366(0x26e)]>0x0?_0x465366(0x319)===_0x465366(0x20e)?(_0x3d6967[_0x465366(0x2d3)]=_0xebc957['ExtraEnemyDrops']['getDatabaseKind'](_0x23af6d['$1']),_0x7cae2c['dataId']=_0x33b5e8(_0xe8371c['$2']),_0x473a68[_0x465366(0x231)]=0x1/(_0x4f12ff(_0x493b24['$3'])*0.01)):this['_iconSprite'][_0x465366(0x1cc)]-=this[_0x465366(0x2a0)]():this[_0x465366(0x2a2)][_0x465366(0x1cc)]=0x0;},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x2a0)]=function(){const _0x1f8f4f=_0x19ee20;if(this['_rotationConstant']!==undefined)return this[_0x1f8f4f(0x259)];const _0x3c538e=VisuMZ[_0x1f8f4f(0x2bb)][_0x1f8f4f(0x217)]['General'];return this[_0x1f8f4f(0x259)]=_0x3c538e['angle']/_0x3c538e[_0x1f8f4f(0x26e)],this[_0x1f8f4f(0x259)];},Sprite_VisualDrop['prototype'][_0x19ee20(0x30d)]=function(){const _0x725f6a=_0x19ee20;this['_data']['duration']>0x0?this[_0x725f6a(0x22c)][_0x725f6a(0x23d)]=this[_0x725f6a(0x2a4)]():this[_0x725f6a(0x22c)][_0x725f6a(0x23d)]=0x0,this[_0x725f6a(0x2a2)]['y']=this[_0x725f6a(0x2a2)][_0x725f6a(0x1f0)]-this[_0x725f6a(0x22c)]['jumpHeight'];},Sprite_VisualDrop['prototype'][_0x19ee20(0x2a4)]=function(){const _0x1083cb=_0x19ee20,_0x3e391d=VisuMZ['ExtraEnemyDrops'][_0x1083cb(0x217)][_0x1083cb(0x249)],_0x255129=_0x3e391d['bounces'],_0x4c9f93=this['_data'][_0x1083cb(0x1f2)],_0x15a112=Math[_0x1083cb(0x1fc)](_0x3e391d[_0x1083cb(0x2d4)],_0x255129-_0x4c9f93),_0x286838=Math[_0x1083cb(0x28c)](_0x3e391d['height']*_0x15a112),_0x361ded=Math[_0x1083cb(0x28c)](_0x3e391d[_0x1083cb(0x26e)]*_0x15a112),_0x1bfe75=this[_0x1083cb(0x22c)]['duration'],_0x26abc5=_0x1bfe75,_0x19f87e=_0x361ded-_0x26abc5,_0x3523f1=_0x361ded/0x2,_0x1ac1a7=_0x286838,_0x5b6548=-_0x1ac1a7/Math[_0x1083cb(0x1fc)](_0x3523f1,0x2),_0x47bea2=_0x5b6548*Math[_0x1083cb(0x1fc)](_0x19f87e-_0x3523f1,0x2)+_0x1ac1a7;let _0x54b9dc=0x1;for(const _0x1ef327 of this[_0x1083cb(0x22c)][_0x1083cb(0x1e4)]){if(!_0x1ef327)continue;_0x1ef327['match'](/BOUNCE HEIGHT (\d+)([%％])/i)&&(_0x54b9dc*=Number(RegExp['$1'])/0x64);}return _0x47bea2*_0x54b9dc;},Sprite_VisualDrop['prototype'][_0x19ee20(0x2d0)]=function(){const _0x4a95e5=_0x19ee20;if(this[_0x4a95e5(0x22c)][_0x4a95e5(0x26e)]>0x0){if(_0x4a95e5(0x2ef)!==_0x4a95e5(0x221)){const _0x30aa2b=VisuMZ[_0x4a95e5(0x2bb)]['Settings']['General'],_0x554fc9=this[_0x4a95e5(0x22c)][_0x4a95e5(0x26e)],_0x12939b=_0x30aa2b[_0x4a95e5(0x26e)],_0xd0fe51=_0x30aa2b[_0x4a95e5(0x2bd)];Imported['VisuMZ_0_CoreEngine']?(this['_baseX']=this[_0x4a95e5(0x23a)](this[_0x4a95e5(0x1da)],this[_0x4a95e5(0x22c)][_0x4a95e5(0x328)],_0x554fc9,_0x12939b,_0xd0fe51),this[_0x4a95e5(0x242)]=this[_0x4a95e5(0x23a)](this['_baseY'],this[_0x4a95e5(0x22c)][_0x4a95e5(0x2e3)],_0x554fc9,_0x12939b,_0xd0fe51)):(this[_0x4a95e5(0x1da)]=(this[_0x4a95e5(0x1da)]*(_0x554fc9-0x1)+this[_0x4a95e5(0x22c)][_0x4a95e5(0x328)])/_0x554fc9,this[_0x4a95e5(0x242)]=(this[_0x4a95e5(0x242)]*(_0x554fc9-0x1)+this[_0x4a95e5(0x22c)][_0x4a95e5(0x2e3)])/_0x554fc9);}else this[_0x4a95e5(0x2a2)]['angle']-=this[_0x4a95e5(0x2a0)]();}else this[_0x4a95e5(0x1da)]=this[_0x4a95e5(0x22c)][_0x4a95e5(0x328)],this[_0x4a95e5(0x242)]=this[_0x4a95e5(0x22c)][_0x4a95e5(0x2e3)];this[_0x4a95e5(0x22c)]['baseX']=this[_0x4a95e5(0x1da)],this[_0x4a95e5(0x22c)][_0x4a95e5(0x1f0)]=this['_baseY'];},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x23a)]=function(_0x2c9fb7,_0x512113,_0x25bc6c,_0x54eee2,_0x2073bb){const _0x3b3194=_0x19ee20,_0x3f82c5=VisuMZ[_0x3b3194(0x315)]((_0x54eee2-_0x25bc6c)/_0x54eee2,_0x2073bb||_0x3b3194(0x341)),_0x1e7a63=VisuMZ[_0x3b3194(0x315)]((_0x54eee2-_0x25bc6c+0x1)/_0x54eee2,_0x2073bb||'Linear'),_0x1c32b2=(_0x2c9fb7-_0x512113*_0x3f82c5)/(0x1-_0x3f82c5);return _0x1c32b2+(_0x512113-_0x1c32b2)*_0x1e7a63;},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x201)]=function(){const _0x5c6122=_0x19ee20;this['x']=this[_0x5c6122(0x1da)],this['y']=this['_baseY'];},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x279)]=function(){const _0xce8148=_0x19ee20;if(!VisuMZ[_0xce8148(0x2bb)][_0xce8148(0x217)][_0xce8148(0x1af)][_0xce8148(0x2a3)])return;const _0x1f32fb=this['_data'];_0x1f32fb[_0xce8148(0x27d)]++;const _0x210f30=_0x1f32fb[_0xce8148(0x27d)]%_0x1f32fb[_0xce8148(0x232)],_0x73321f=_0x1f32fb[_0xce8148(0x232)]-_0x210f30,_0x244869=_0x1f32fb[_0xce8148(0x232)]/0x2,_0x2b97ee=0x1,_0x544805=-_0x2b97ee/Math[_0xce8148(0x1fc)](_0x244869,0x2),_0x2c056c=_0x544805*Math[_0xce8148(0x1fc)](_0x73321f-_0x244869,0x2)+_0x2b97ee,_0x2dee4b=_0x1f32fb['rarityTint'][_0xce8148(0x2ad)](_0x511030=>_0x511030*_0x2c056c);this[_0xce8148(0x2a2)]['setColorTone'](_0x2dee4b);},Sprite_VisualDrop[_0x19ee20(0x298)][_0x19ee20(0x1c9)]=function(){const _0x2c7ad3=_0x19ee20;this[_0x2c7ad3(0x22c)][_0x2c7ad3(0x26e)]--;if(this[_0x2c7ad3(0x22c)]['duration']===0x0&&this[_0x2c7ad3(0x22c)][_0x2c7ad3(0x1f2)]>=0x0){if(_0x2c7ad3(0x2ca)===_0x2c7ad3(0x275)){_0x3c8fe5=_0x5bad91[_0x2c7ad3(0x215)]()[_0x2c7ad3(0x20c)]();if(['I',_0x2c7ad3(0x19e),_0x2c7ad3(0x240)][_0x2c7ad3(0x324)](_0x4231b6))return 0x1;if(['W',_0x2c7ad3(0x278),_0x2c7ad3(0x304)][_0x2c7ad3(0x324)](_0x6f93d))return 0x2;if(['A',_0x2c7ad3(0x1c1),_0x2c7ad3(0x32b)][_0x2c7ad3(0x324)](_0x34b1dd))return 0x3;return 0x0;}else{this[_0x2c7ad3(0x22c)][_0x2c7ad3(0x1f2)]-=0x1;const _0x2c9235=VisuMZ[_0x2c7ad3(0x2bb)][_0x2c7ad3(0x217)][_0x2c7ad3(0x249)],_0x62fdab=_0x2c9235[_0x2c7ad3(0x1f2)],_0xe73c77=this[_0x2c7ad3(0x22c)]['bounces'],_0x3d6186=Math[_0x2c7ad3(0x1fc)](_0x2c9235[_0x2c7ad3(0x2d4)],_0x62fdab-_0xe73c77);if(this['_data'][_0x2c7ad3(0x1f2)]>=0x0)this[_0x2c7ad3(0x22c)][_0x2c7ad3(0x26e)]=Math['round'](_0x2c9235[_0x2c7ad3(0x26e)]*_0x3d6186);else _0x2c9235[_0x2c7ad3(0x1b3)]&&setTimeout(this[_0x2c7ad3(0x1a4)][_0x2c7ad3(0x283)](this),_0x2c9235[_0x2c7ad3(0x311)]);if(_0x2c9235['sfxFilename']){const _0x14acd8={'name':this[_0x2c7ad3(0x22c)][_0x2c7ad3(0x203)],'volume':Math[_0x2c7ad3(0x28c)](_0x2c9235['sfxVolume']*_0x3d6186),'pitch':_0x2c9235[_0x2c7ad3(0x2c4)],'pan':_0x2c9235[_0x2c7ad3(0x32e)]};AudioManager[_0x2c7ad3(0x339)](_0x14acd8);}}}};};