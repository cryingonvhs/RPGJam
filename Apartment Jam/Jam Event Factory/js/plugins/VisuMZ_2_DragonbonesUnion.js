//=============================================================================
// VisuStella MZ - Dragonbones Union
// VisuMZ_2_DragonbonesUnion.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_DragonbonesUnion = true;

var VisuMZ = VisuMZ || {};
VisuMZ.DragonbonesUnion = VisuMZ.DragonbonesUnion || {};
VisuMZ.DragonbonesUnion.version = 1.31;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.31] [DragonbonesUnion]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Dragonbones_Union_VisuStella_MZ
 * @base Public_0_Dragonbones
 * @orderAfter VisuMZ_0_CoreEngine
 * @orderAfter Public_0_Dragonbones
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * DragonBones allows your games to use skeletal animation, a type of computer
 * animation in which a character (or object) is represented by skins/textures
 * and a digital set of interconnected bones (called the skeleton). Using a set
 * of instructions, the game will create animations based off these skins,
 * skeletons, and instructions to create beautifully smooth and light-weight
 * movements.
 *
 * This plugin gives you such control over various facets of your game: the
 * battle system, event pictures, and map sprites for characters. Various
 * plugin commands, notetags, and comment tags are added through this plugin to
 * give you as much control as you need over Dragonbones from the RPG Maker MZ
 * editor itself.
 *
 * The version of Dragonbones used for this plugin is 5.7.002b.
 * More information can be found at http://dragonbones.com/
 *
 * Features include all (but not limited to) the following:
 * 
 * - Adds Dragonbones support to RPG Maker MZ.
 * - Dragonbones armatures can be used as battler sprites.
 * - Dragonbones armatures can be attached to event pictures.
 * - Dragonbones armatures can be inserted into the map as character sprites.
 * - A variety of Plugin Parameters, Notetags, and Plugin Commands to control
 *   the Dragonbones armatures and their animations.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * - Dragonbones*
 *
 * *Note* You can download this library from the below URL or from the
 * Dragonbones Union product page. Install it as a Tier 0 plugin.
 *
 * URL: https://www.npmjs.com/package/pixi5-dragonbones/v/5.7.0-2b
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Dragonbones Naming
 * ============================================================================
 *
 * If you are trying to set up a Dragonbones armature through notetags, Plugin
 * Commands, etc., and are getting the error message "Cannot Read property
 * 'parent' of null", then most likely, the incorrect Dragonbones armature name
 * is being used.
 *
 * ---
 * 
 * To find the Proper Name:
 * 
 * 1. Open up the Dragonbones armature in the Dragonbones editor.
 * 
 * ---
 * 
 * 2. Open the armature's Properties.
 * 
 * ---
 * 
 * 3. Look at what the "Name:" field lists. This is the name to use with the
 *    Dragonbones Union plugin.
 * 
 * ---
 *
 * ============================================================================
 * Dragonbones Armature Behaviors
 * ============================================================================
 *
 * Dragonbones armatures have certain behaviors when used with battlers,
 * pictures, and/or map sprites.
 *
 * ---
 *
 * 1. When a Dragonbones armature is loaded, it will play the 'idle' animation
 *    or whatever is set inside the Plugin Parameters => General Settings =>
 *    Loaded Animation field upon loading. Make your Dragonbones armatures with
 *    this in mind. At other times, the 'idle' animation will be used as a base
 *    defaulting animation.
 *
 * ---
 *
 * 2. The Dragonbones armature will always be anchored at the X, Y coordinates
 *    of the target. This X, Y coordinate point will be where the root/pivot
 *    point of the Dragonbones armature will be located.
 *
 * ---
 *
 * 3. The properties used by a sprite (ie the opacity, scale, rotation, and
 *    tint) will also be shared and/or amplified with the Dragonbones armature.
 *    The exception to this will be Blend Modes aren't supported.
 *
 * ---
 *
 * ============================================================================
 * IMPORTANT!! Dragonbones Armatures as Map Sprites
 * ============================================================================
 *
 * If you plan on using Dragonbones armatures as map sprites, please keep in
 * mind that there will be certain limitations and properties regarding them,
 * which will be listed below:
 *
 * ---
 *
 * 1. Try not to use more than 99 vertices for meshes. The reason behind this
 *    is because the Dragonbones armature is added as a sprite to the game's
 *    Tilemap. Any and all sprites added to the Tilemap have some restrictions
 *    placed on them as per Pixi JS's design. The Dragonbones armatures are no
 *    exception to this.
 *
 *    If the number of vertices exceeds 99, strange things will occur to the
 *    Dragonbones armature that are outside of this plugin's control. While it
 *    won't stop the plugin from functioning properly, expected behaviors may
 *    happen due to the threshold.
 *
 * ---
 *
 * 2. When using Dragonbones armatures that are too tall or wide, they may clip
 *    into the tile layer above or to the side due to how the Tilemap works.
 *    Things that you would see happen would include clipping into the tops of
 *    trees and structures.
 *
 * ---
 *
 * 3. Certain motions will request specific animations from the Dragonbones
 *    armature. If the animations exist, it will play those motions. If they
 *    don't, the motions may request a different animation down the line. The
 *    request orders are as follows:
 *
 *    Jumping:
 *    - jump, walk, idle
 *
 *    Rope (Climbing) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeclimb, ladderclimb, walk, ropeidle, ladderidle, idle
 *
 *    Rope (Idle) (Requires: VisuMZ_1_EventsMoveCore):
 *    - ropeidle, ladderidle, idle
 *
 *    Ladder (Climbing):
 *    - ladderclimb, walk, ladderidle, idle
 *
 *    Ladder (Idle):
 *    - ladderidle, idle
 *
 *    Dashing:
 *    - dash, walk, idle
 *
 *    Walking:
 *    - walk, idle
 *
 *    Idle:
 *    - idle
 *
 *    Name the animations for the Dragonbones armature as such to make the most
 *    out of the motion priority lists.
 *
 * ---
 *
 * 4. You can add directional animations for your Dragonbones armature motion
 *    animations. To do so, add a number after the animation's name like such:
 *    walk2, walk4, walk6, walk8. These numbers are based off the NumPad
 *    directions to determine which way to face:
 *
 *    7 8 9
 *    4   6
 *    1 2 3
 *
 *    These numbers are added onto the priority system listed in #3 above, too.
 *    Diagonal directions also become split and added multiple times for better
 *    streamlining, with a priority given to the horizontal direction before
 *    the vertical direction. For example, dashing becomes the following:
 *
 *    Dashing (Upper Left):
 *    - dash7, dash4, dash8, dash,
 *      walk7, walk4, walk8, walk,
 *      idle7, idle4, idle8, idle
 *
 *    Dashing (Right):
 *    - dash6, dash,
 *      walk6, walk,
 *      idle6, idle
 *
 * ---
 *
 * 5. When a Dragonbones armature is moving, it will animate slower or faster
 *    depending on the character's current movement speed. At speed
 *    '4: Normal', it will animation 4x faster than what's seen in Dragonbones.
 *    At speed '6: x4 Faster', it will animate 6x faster while '1: x8 Slower'
 *    will be at x1 speed seen in Dragonbones. In other words, the speed
 *    animated is equal to the number written on the left of the
 *    movement speed.
 *
 *    When dashing, that multiplier increases by 1 in order to match movement
 *    speeds and the Dragonbones armature will do the same to follow.
 *
 * ---
 *
 * You will need to create your Dragonbones armatures with these 5 key rules in
 * mind in order to make the armatures animate smoothly within your game.
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 *
 * VisuMZ_3_StateTooltips
 *
 * If you are using a Dragonbones Battler and want to apply a state tooltip to
 * it, the access area of the battler will be based on the hitbox size you
 * declare for the Dragonbones Battler with notetags. This is because all
 * Dragonbones battlers do not have innate automatically calculated hitbox
 * sizes as a result of their dynamically animated nature.
 * 
 * Please refer to the notetag section of the Dragonbones Union plugin for
 * Dragonbones Battler hitboxes to learn how to apply hitbox sizes.
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
 * === Dragonbones Battler Notetags ===
 *
 * The following notetags are to be assigned to either actors and/or enemies.
 * An assigned actor/enemy will have their original sprite hidden from view in
 * favor of the Dragonbones armature to be displayed. Use these notetags to
 * declare various settings for your Dragonbones armatures.
 *
 * ---
 *
 * <Dragonbones Battler: filename>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the DragonBones associated with this actor/enemy to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Battler: Demon>
 * <Dragonbones Battler: DragonBoy>
 * <Dragonbones Battler: Swordsman>
 * <Dragonbones Battler: Ubbie>
 *
 * ---
 *
 * <Dragonbones Battler Scale: x, y>
 *
 * <Dragonbones Battler Scale X: x>
 * <Dragonbones Battler Scale Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets the base scale for the Dragonbones associated with this actor/enemy.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the actor/enemy's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Battler Scale: -0.3, 0.3>
 *
 * <Dragonbones Battler Scale X: -0.3>
 * <Dragonbones Battler Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Battler Offset: x, y>
 *
 * <Dragonbones Battler Offset X: x>
 * <Dragonbones Battler Offset Y: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - When a Dragonbones armature is attached to an actor/enemy's sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Battler Offset: -10, 5>
 *
 * <Dragonbones Battler Offset X: -10>
 * <Dragonbones Battler Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Battler Size: width, height>
 *
 * <Dragonbones Battler Width: x>
 * <Dragonbones Battler Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for Action
 *   Sequences and the like. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   Plugin Parameters => Battler Settings => Default => Width/Height.
 *
 * Examples:
 *
 * <Dragonbones Battler Size: 50, 100>
 *
 * <Dragonbones Battler Width: 50>
 * <Dragonbones Battler Height: 100>
 *
 * ---
 *
 * <Dragonbones Battler Time Scale: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Battler Time Scale: 1.5>
 *
 * ---
 *
 * <Dragonbones Battler Motion Walk: animation>
 * <Dragonbones Battler Motion Wait: animation>
 * <Dragonbones Battler Motion Chant: animation>
 * <Dragonbones Battler Motion Guard: animation>
 * <Dragonbones Battler Motion Damage: animation>
 * <Dragonbones Battler Motion Evade: animation>
 * <Dragonbones Battler Motion Thrust: animation>
 * <Dragonbones Battler Motion Swing: animation>
 * <Dragonbones Battler Motion Missile: animation>
 * <Dragonbones Battler Motion Skill: animation>
 * <Dragonbones Battler Motion Spell: animation>
 * <Dragonbones Battler Motion Item: animation>
 * <Dragonbones Battler Motion Escape: animation>
 * <Dragonbones Battler Motion Victory: animation>
 * <Dragonbones Battler Motion Dying: animation>
 * <Dragonbones Battler Motion Abnormal: animation>
 * <Dragonbones Battler Motion Sleep: animation>
 * <Dragonbones Battler Motion Dead: animation>
 *
 * - Used for: Actor, Enemy Notetags
 * - Use these notetags to assign Dragonbones animations to play when the
 *   actor/enemy sprite is supposed to play such a motion.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Examples:
 *
 * <Dragonbones Battler Motion Wait: idle>
 * <Dragonbones Battler Motion Swing: attack>
 * <Dragonbones Battler Motion Thrust: attack>
 * <Dragonbones Battler Motion Missle: attack>
 * <Dragonbones Battler Motion Skill: special>
 * <Dragonbones Battler Motion Spell: special>
 * <Dragonbones Battler Motion Dead: defeated>
 *
 * ---
 *
 * <Dragonbones Battler Settings>
 *  Battler: filename
 *  
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Size: width, height
 *
 *  Width: x
 *  Height: x
 *
 *  Time Scale: x
 *
 *  Motion Walk: animation
 *  Motion Wait: animation
 *  Motion Chant: animation
 *  Motion Guard: animation
 *  Motion Damage: animation
 *  Motion Evade: animation
 *  Motion Thrust: animation
 *  Motion Swing: animation
 *  Motion Missile: animation
 *  Motion Skill: animation
 *  Motion Spell: animation
 *  Motion Item: animation
 *  Motion Escape: animation
 *  Motion Victory: animation
 *  Motion Dying: animation
 *  Motion Abnormal: animation
 *  Motion Sleep: animation
 *  Motion Dead: animation
 * </Dragonbones Battler Settings>
 *
 * - Used for: Actor, Enemy Notetags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Battler: filename' line.
 *
 * Example:
 *
 * <Dragonbones Battler Settings>
 *  Battler: Demon
 *  
 *  Scale: 0.3, 0.3
 *
 *  Size: 80, 80
 *
 *  Motion Wait: idle
 *  Motion Damage: hit
 *  Motion Swing: attack
 *  Motion Thrust: attack
 *  Motion Missile: attack
 *  Motion Skill: special
 *  Motion spell: special
 *  Motion Dead: defeated
 * </Dragonbones Battler Settings>
 *
 * ---
 * 
 * <Dragonbones Hue Affected>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag enables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 * 
 * <Dragonbones No Hue>
 * 
 * - Used for: Enemy Notetags
 * - The above notetag disables hues to affect enemy battlers.
 * - This will bypass the Plugin Parameter default settings.
 * 
 * ---
 *
 * === Dragonbones Map Sprite Notetags & Comment Tags ===
 *
 * You can also use Dragonbones armatures as map sprites. When used, any of the
 * original sprites before will become invisible and will be replaced with the
 * Dragonbones armature.
 *
 * These notetags can be used for actors and events. In the case of events,
 * both notetags and comment tags can be used to determine what settings to use
 * for the Dragonbones armatures.
 *
 * Be cautious when using Comment Tags for event pages since comments contain a
 * maximum line count of 6.
 *
 * ---
 *
 * <Dragonbones Sprite: filename>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the DragonBones associated with this map sprite to be 'filename'.
 * - The name will be associated with the assets used.
 * - It will be used to check for associated filenames that end with _ske.json,
 *   _tex.json, and _tex.png.
 * - The listed assets must be found in the assigned assets folder.
 *
 * Examples:
 *
 * <Dragonbones Sprite: Demon>
 * <Dragonbones Sprite: DragonBoy>
 * <Dragonbones Sprite: Swordsman>
 * <Dragonbones Sprite: Ubbie>
 *
 * ---
 *
 * <Dragonbones Sprite Scale: x, y>
 *
 * <Dragonbones Sprite Scale X: x>
 * <Dragonbones Sprite Scale Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Sets the base scale for the Dragonbones associated with this map sprite.
 *   This is for those instances where a Dragonbones armature is too large or
 *   small and needs to be scaled down/up.
 * - This scale will be amplified by the character's sprite's scale value.
 * - Use the 1st notetag to assign values to both Scale X and Scale Y.
 * - Use the 2nd/3rd notetags to assign Scale X and Y values separately.
 * - Use negative values to flip the Dragonbones armature around.
 *
 * Examples:
 * 
 * <Dragonbones Sprite Scale: -0.3, 0.3>
 *
 * <Dragonbones Sprite Scale X: -0.3>
 * <Dragonbones Sprite Scale Y: 0.3>
 *
 * ---
 *
 * <Dragonbones Sprite Offset: x, y>
 *
 * <Dragonbones Sprite Offset X: x>
 * <Dragonbones Sprite Offset Y: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - When a Dragonbones armature is attached to an character's map sprite, it
 *   will always be attached at the root point assigned within the Dragonbones
 *   data. If a Dragonbones armature has a root point that does not fit well
 *   with your battler sprite, you can offset it using these notetags.
 * - Replace 'x' and 'y' with number values representing how many pixels you
 *   want to offset the Dragonbones armature by.
 * - Use the 1st notetag to assign values to both Offset X and Offset Y.
 * - Use the 2nd/3rd notetags to assign Offset X and Y values separately.
 * - Use negative values to offset to the left (X) or up (Y) directions.
 *
 * Examples:
 *
 * <Dragonbones Sprite Offset: -10, 5>
 *
 * <Dragonbones Sprite Offset X: -10>
 * <Dragonbones Sprite Offset Y: 5>
 *
 * ---
 *
 * <Dragonbones Sprite Time Scale: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the time scale for the Dragonbones armature.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 *
 * Example:
 *
 * <Dragonbones Sprite Time Scale: 1.5>
 *
 * ---
 * 
 * <Dragonbones Sprite Walk Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is walking.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Walk Rate: 1.5>
 * 
 * ---
 * 
 * <Dragonbones Sprite Dash Rate: x>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you adjust the animation speed for the Dragonbones armature only
 *   when it is dashing.
 * - Replace 'x' with a number value depicting how fast the armature should
 *   animate.
 *   - 1.0 is the default value.
 *   - Higher numbers animate faster.
 *   - Lower numbers animate slower.
 *   - If a number is too small, it may not animate at all.
 * - If used with the <Dragonbones Sprite Time Scale: x>, the speed will stack
 *   multiplicatively.
 *
 * Example:
 *
 * <Dragonbones Sprite Dash Rate: 1.5>
 * 
 * ---
 *
 * <Dragonbones Sprite Size: width, height>
 *
 * <Dragonbones Sprite Width: x>
 * <Dragonbones Sprite Height: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Dragonbones armatures have no standard width or height. This makes it
 *   problematic when trying to calculate the sprite's width/height for various
 *   plugins that use it. These notetags allow you to assign a width and
 *   height value to the sprite, despite the fact the Dragonbones armatures
 *   have no such thing.
 * - Replace 'width', 'height', or 'x' with number values representing the
 *   dimension values in pixels.
 * - Use the 1st notetag to assign values to both Width and Height.
 * - Use the 2nd/3rd notetags to assign Width and Height values separately.
 * - If these notetags aren't used, then use the values defined by default in
 *   the Plugin Parameters.
 *
 * Examples:
 *
 * <Dragonbones Sprite Size: 48, 64>
 *
 * <Dragonbones Sprite Width: 48>
 * <Dragonbones Sprite Height: 64>
 *
 * ---
 *
 * <Dragonbones Sprite Flip Left>
 * <Dragonbones Sprite Flip Right>
 *
 * <Dragonbones Sprite No Flip Left>
 * <Dragonbones Sprite No Flip Right>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets the map sprite know to flip itself when facing either the left/right
 *   directions in order to reuse animations.
 * - The 'No' variants will prevent flipping from occuring.
 * - These notetags will override settings applied in the Plugin Parameters.
 *
 * ---
 *
 * <Dragonbones Sprite Motion Idle: animation>
 * <Dragonbones Sprite Motion Walk: animation>
 * <Dragonbones Sprite Motion Dash: animation>
 * <Dragonbones Sprite Motion Jump: animation>
 * <Dragonbones Sprite Motion LadderIdle: animation>
 * <Dragonbones Sprite Motion LadderClimb: animation>
 * <Dragonbones Sprite Motion RopeIdle: animation>
 * <Dragonbones Sprite Motion RopeClimb: animation>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - Lets you set specific animations different from the ones listed in the
 *   Plugin Parameters for specific motions.
 * - Replace 'animation' with the name of the Dragonbones animation.
 * - If this notetag is not used, when such a motion is rquested, it will
 *   default to attempting to play the animation name equal to the motion.
 * - Animation names do not need to be case sensitive.
 * - If no animation is found, then no animation will be played.
 *
 * Example:
 *
 * <Dragonbones Sprite Motion Idle: stand>
 * <Dragonbones Sprite Motion Walk: move>
 * <Dragonbones Sprite Motion Dash: run>
 * <Dragonbones Sprite Motion Jump: hop>
 *
 * ---
 *
 * <Dragonbones Sprite Settings>
 *  Filename: filename
 *
 *  Scale: x, y
 *
 *  Scale X: x
 *  Scale Y: x
 *
 *  Offset: x, y
 *
 *  Offset X: x
 *  Offset Y: x
 *
 *  Time Scale: x
 * 
 *  Walk Rate: x
 *  Dash Rate: x
 *
 *  Width: x
 *  Height: x
 *
 *  Flip Left
 *  Flip Right
 *
 *  No Flip Left
 *  No Flip Right
 *
 *  Motion Idle: animation
 *  Motion Walk: animation
 *  Motion Dash: animation
 *  Motion Jump: animation
 *  Motion LadderIdle: animation
 *  Motion LadderClimb: animation
 *  Motion RopeIdle: animation
 *  Motion RopeClimb: animation
 * </Dragonbones Sprite Settings>
 *
 * - Used for: Actor, Event Notetags and Event Page Comment Tags
 * - The above notetag allows to wrap up all the information you'd like to
 *   set for Dragonbones battler armatures needed inside a single notetag
 *   container.
 * - The settings are the same as the notetags listed above it.
 * - You may remove the settings you don't wish to change.
 * - The only necessary data is the 'Filename: filename' line.
 *
 * Example:
 *
 * <Dragonbones Sprite Settings>
 *  Filename: Ubbie
 *
 *  Scale: 0.1, 0.1
 *
 *  Flip Right
 *
 *  Motion Idle: stand
 *  Motion Walk: walk
 * </Dragonbones Sprite Settings>
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
 * === Battler Plugin Commands ===
 * 
 * ---
 *
 * Battler: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for battle.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Motion Settings:
 * 
 *     Anti-Loop Revert:
 *     - Prevent reverting non-looping animations with playtimes of 1.
 *     - This was added because some users prefer the prevention while others
 *       do not want it.
 *     - This only affects non-looping animations when they have playtime
 *       durations of 1.
 *     - Choose the style you want.
 *     - This will affect all map sprites that use Dragonbones.
 *
 *     Walk:
 *     Wait:
 *     Chant:
 *     Guard:
 *     Damage:
 *     Evade:
 *     Thrust:
 *     Swing:
 *     Missile:
 *     Skill:
 *     Spell:
 *     Item:
 *     Escape:
 *     Victory:
 *     Dying:
 *     Abnormal:
 *     Sleep:
 *     Dead:
 *     - Change the animation used for this motion.
 *
 * ---
 * 
 * === Map Sprite Plugin Commands ===
 * 
 * ---
 *
 * Map Sprite: Actor Change Settings
 * - Change target actor's Dragonbones armature settings for map sprites.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *     Filename:
 *     - Change the armature's filename.
 *
 *     Offset X:
 *     - Change the armature's Offset X value.
 *
 *     Offset Y:
 *     - Change the armature's Offset Y value.
 *
 *     Scale X:
 *     - Change the armature's Scale X value.
 * 
 *     Scale Y:
 *     - Change the armature's Scale Y value.
 *
 *     Time Scale:
 *     - Change the armature's Time Scale value.
 * 
 *       Walk Rate:
 *       - Change the armature's walk animation rate.
 * 
 *       Dash Rate:
 *       - Change the armature's dash animation rate.
 *
 *     Width:
 *     - Change the battler width size.
 *
 *     Height:
 *     - Change the battler height size.
 *
 *   Flip Settings:
 *
 *     Flip Left?:
 *     Flip Right:
 *     - Flip the scale x value when facing left/right-ward directions?
 *
 *   Motion Settings:
 *
 *     Idle:
 *     Walk:
 *     Dash:
 *     Jump:
 *     Ladder (Idle):
 *     Ladder (Climb):
 *     Rope (Idle):
 *     Rope (Climb):
 *     - Base rope climbing animation name used.
 *
 * ---
 *
 * Map Sprite: Actor Play Animation
 * - Target actor plays a custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * NOTE: An alternative to this is to put the following code inside of a
 *       Movement Route's script call:
 *
 *       this.dragonbonesAnimation = "AnimationName";
 *
 *       Replace 'AnimationName' (keep the quotes) with the name of the
 *       Dragonbones animation.
 *
 * ---
 *
 * Map Sprite: Actor Stop Animation
 * - Stops a target actor's custom Dragonbones animation.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 * ---
 *
 * Map Sprite: Event Play Animation
 * - Target event plays a custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Event Stop Animation
 * - Stops a target event's custom Dragonbones animation.
 *
 *   Event ID:
 *   - Select which Event ID to affect.
 *
 * ---
 *
 * Map Sprite: Follower Play Animation
 * - Target follower plays a custom Dragonbones animation.
 *
 *   Follower Index:
 *   - Select which Follower Index to affect.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Follower Stop Animation
 * - Stops a target follower's custom Dragonbones animation.
 *
 *   Follower ID:
 *   - Select which Follower Index to affect.
 *
 * ---
 *
 * Map Sprite: Player Play Animation
 * - Player plays a custom Dragonbones animation.
 *
 *   Play Animation:
 *   - Play this animation.
 *
 * ---
 *
 * Map Sprite: Player Stop Animation
 * - Stops player's custom Dragonbones animation.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 *
 * Picture: Dragonbones Setup
 * - Setup a Dragonbones armature for a picture.
 *
 *   Picture ID:
 *   - Select which Picture ID(s) to give a Dragonbones armature.
 *
 *   Armature Filename:
 *   - What is the armature's filename?
 *
 *   Play Animation:
 *   - Play this animation once it starts.
 *
 *   Offset: X:
 *   - Default X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Default Y offset value for this Dragonbones armature.
 *
 *   Scale: X:
 *   - Default X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Default Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Time Scale:
 *   - Default time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * Picture: Play Dragonbones Animation
 * - Make an existing Dragonbones armature attached to a picture play
 *   an animation.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Play Animation:
 *   - Play this animation.
 * 
 *   Finish: Revert Idle:
 *   - Revert animation to 'idle' animation after finishing?
 *
 * ---
 *
 * Picture: Offset Dragonbones
 * - Offset the X, Y attachment point of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Offset: X:
 *   - X offset value for this Dragonbones armature.
 *
 *   Offset: Y:
 *   - Y offset value for this Dragonbones armature.
 *
 * ---
 *
 * Picture: Scale Dragonbones
 * - Change the scaling values of the Dragonbones armature.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Scale: X:
 *   - X scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 *   Scale: Y:
 *   - Y scaling for this Dragonbones armature.
 *   - This will be amplified by the picture's scaling value.
 *
 * ---
 *
 * Picture: Time Scale Dragonbones
 * - Change the speed at which Dragonbones animations play.
 *
 *   Picture ID:
 *   - Select which Picture ID to modify.
 *
 *   Time Scale:
 *   - Time scale for this Dragonbones armature.
 *   - Higher values play faster. Lower values play slower.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings that apply to all uses of Dragonbones through
 * this plugin. While the majority of these can remain unchanged, for those who
 * wish to customize the nature of the plugin to their liking can do so through
 * these Plugin Parameters.
 *
 * ---
 *
 * Assets Path
 * - The filepath to the directory that houses all the Dragonbone files.
 *
 * ---
 *
 * Defaults
 * 
 *   Loaded Animation:
 *   - The default animation to play once a Dragonbones armature is loaded.
 * 
 *   Looping Animations:
 *   - Force these animations to become looping animations even if they don't
 *     loop in Dragonbones.
 *
 * ---
 *
 * Skeletal Data
 * Texture Data
 * Texture Asset
 * 
 *   Key:
 *   - Key used to determine where needed data is stored.
 * 
 *   Extension:
 *   - Extension used to determine which files contain needed data.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Settings
 * ============================================================================
 *
 * Actor and Enemy sprites can have Dragonbones armatures attached to them as
 * sprites. Use these settings to make the Dragonbones armatures fit your needs
 * in battle.
 *
 * ---
 *
 * Default Settings
 * 
 *   Enemy Hue Affected?:
 *   - Affect hues for enemies with Dragonbones battlers?
 * 
 *   Offset: X:
 *   - Default X offset for battler sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for battler sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones battlers.
 * 
 *     Flip for Actors?:
 *     Flip for Enemies?:
 *     - Flip the scale x value into negative automatically for all actors
 *       or enemies?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones battlers.
 * 
 *   Width:
 *   - Treat battler sprites as if they have this width.
 *   - Used for Action Sequences.
 * 
 *   Height:
 *   - Treat battler sprites as if they have this height.
 *   - Used for Action Sequences.
 *
 * ---
 * 
 * Idle Bypass
 * 
 *   List:
 *   - This is a list of animations that will not return back to the idle
 *     animation after completion.
 *   - Remove them if you want them to revert back to the idle animation
 *     after completion.
 *   - Add to the list if you want animations to stay in their final frame.
 * 
 * ---
 *
 * Default Motions
 * 
 *   Walk:
 *   Wait:
 *   Chant:
 *   Guard:
 *   Damage:
 *   Evade:
 *   Thrust:
 *   Swing:
 *   Missile:
 *   Skill:
 *   Spell:
 *   Item:
 *   Escape:
 *   Victory:
 *   Dying:
 *   Abnormal:
 *   Sleep:
 *   Dead:
 *   - Play this Dragonbones animation whenever this motion is requested
 *     by default.
 *   - Used for Action Sequences.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Sprite Settings
 * ============================================================================
 *
 * These Plugin Parameter settings adjust the default configurations for any
 * map sprite that's using a Dragonbones armature. These settings can be
 * overwritten on per a sprite basis using notetags and comment tags, too.
 *
 * ---
 *
 * Defaults
 * 
 *   Offset: X:
 *   - Default X offset for map sprites.
 * 
 *   Offset: Y:
 *   - Default Y offset for map sprites.
 * 
 *   Scale: X:
 *   - Default scale for X used by Dragonbones map sprites.
 * 
 *     Flip Left?:
 *     Flip Right?:
 *     - Flip the scale x value when facing left/right-ward directions?
 * 
 *   Scale: Y:
 *   - Default scale for Y used by Dragonbones map sprites.
 * 
 *   Time Scale:
 *   - The rate at which animations play.
 *   - Higher numbers go faster.
 * 
 *   Width:
 *   - Treat map sprites as if they have this width.
 *   - Used for various plugins.
 * 
 *   Height:
 *   - Treat map sprites as if they have this height.
 *   - Used for various plugins.
 *
 * ---
 *
 * Motion Settings
 * 
 *   Idle:
 *   Walk:
 *   Dash:
 *   Jump:
 *   Ladder (Idle):
 *   Ladder (Climb):
 *   Rope (Idle):
 *   Rope (Climb):
 *   - Base walk animation name used.
 * 
 *   Walk Timer:
 *   - Number of frames to count as walking so that an idle animation isn't
 *     immediately forced upon stopping.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Experimental Settings
 * ============================================================================
 *
 * These settings are experimental and have not been tested extensively yet.
 *
 * ---
 *
 * Experimental Settings
 * 
 *   Enemy Stances:
 *   - Enemies can use stance motions for idling such as chanting,
 *     guarding, etc.
 *   - Requires VisuMZ_1_BattleCore!
 *   - This is not available normally since animations are not available for
 *     enemies with the base RPG Maker MZ core scripts.
 *   - Disable this to use the default animation flow for enemies.
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
 *
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * Special Thanks To
 * 
 * * Green Kel
 * * Ækashics
 * * Swift Illusion
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.31: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** Added new plugin parameter:
 * *** Plugin Parameters > Map Sprites > Motion Settings > Anti-Loop Revert
 * **** Prevent reverting non-looping animations with playtimes of 1.
 * **** This was added because some users prefer the prevention while others
 *      don't. This only affects non-looping animations when they have playtime
 *      durations of 1. Choose the style you want. This will affect all map
 *      sprites that use Dragonbones.
 * 
 * Version 1.30: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause an after effect color blend flash. Fix made
 *    by Irina.
 * 
 * Version 1.29: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a problem with TPB Active causing the input animation for
 *    Dragonbones armatures to be frozen in place. Fix made by Irina.
 * * Feature Update!
 * ** Added a feature to separate Dragonbones armature blend modes from being
 *    suppressed by PixiJS's filters. Update made by Irina.
 * 
 * Version 1.28: August 17, 2023
 * * Feature Update!
 * ** If a Dragonbones battler has an "idle" animation, it will no longer
 *    utilize the "walk" motion and instead, refer to its own "idle" motion.
 *    Update made by Irina.
 * ** If a Dragonbones map sprite has a non-looping animation with a playtime
 *    value of 1, the animation will halt at the last frame instead of looping
 *    or reverting to the first neutral frame. Update made by Irina.
 * 
 * Version 1.27: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that made dragonbones armatures persist after removing party
 *    members from the team. Fix made by Irina.
 * 
 * Version 1.26: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused scene changes back into the battle scene would
 *    cause collapsed Dragonbones Battlers to reappear. Fix made by Arisu.
 * 
 * Version 1.25: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused some Dragonbones animations to be unable to play
 *    on map sprites if they are facing specific directions. Fix made by Irina.
 * 
 * Version 1.24: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that the "Flip Actors" and "Flip Enemies" parameters did not
 *    work properly after using a scale X notetag. Fix made by Olivia.
 * 
 * Version 1.23: January 20, 2023
 * * Feature Update!
 * ** Guard animations should no longer temporarily default to idle stances if
 *    an unnamed animation does not exist if the battler is guarding. Update
 *    made by Irina.
 * 
 * Version 1.22: December 15, 2022
 * * Compatibility Update!
 * ** Should now work with RPG Maker MZ version 1.6.1's updated Pixi JS version
 *    of 5.3.12 from 5.2.4. If ya don't have this plugin updated and you are
 *    using 5.3.12 onward, your battlers won't be loading.
 * 
 * Version 1.21: November 24, 2022
 * * Bug Fixes!
 * ** Custom motions now work better with non-actor participants during actions
 *    involving dragonbones battlers. Fix made by Arisu.
 * 
 * Version 1.20: November 17, 2022
 * * Bug Fixes!
 * ** "Damage" motion wasn't working properly for actors. This should now be
 *    fixed and working properly.
 * * Bug Fixes!
 * ** "Escape" motion should now work properly with Dragonbones actors. Idle
 *    motions will no longer take priority over them.
 * 
 * Version 1.19: November 10, 2022
 * * Bug Fixes!
 * ** Fixed a bug from the v1.18 update that prevented custom motions from
 *    being displayed properly with actors. Fix made by Irina.
 * 
 * Version 1.18: October 13, 2022
 * * Compatibility Update!
 * ** Plugin should be more compatible with VisuMZ_3_VisualStateEffect.
 * 
 * Version 1.17: January 27, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Added Plugin Command Parameter for "Picture: Play Dragonbones Animation":
 * *** Finish: Revert Idle?
 * **** Revert animation to 'idle' animation after finishing?
 * **** Added by Irina
 *
 * Version 1.16: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.15: June 18, 2021
 * * Compatibility Update
 * ** Compatibility update with Elements and Status Menu Core's trait hues.
 *    These will be affected by the notetags and/or Plugin Parameters applied.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Ækashics:
 * *** <Dragonbones Hue Affected>
 * *** <Dragonbones No Hue>
 * **** Determines if this enemy's Dragonbones battler is affected by hues
 *      or not. This will bypass the Plugin Parameter's default value.
 * ** New Plugin Parameter added by Irina and sponsored by Ækashics:
 * *** Plugin Parameters > Battler Settings > Default > Enemy Hue Affected?
 * **** Affect hues for enemies with Dragonbones battlers?
 * **** This will be disabled by default. Enable it or set it to true to make
 *      it work properly.
 * 
 * Version 1.14: April 2, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_3_StateTooltips plugin.
 * 
 * Version 1.13: March 19, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Experimental: Enemy Stances
 * **** Allows enemies to utilize stance motions for idling such as chanting,
 *      guarding, etc.
 * **** Requires VisuMZ_1_BattleCore!
 * **** This is not available normally since animations are not available for
 *      enemies with the base RPG Maker MZ core scripts.
 * **** Disable this to use the default animation flow for enemies.
 * 
 * Version 1.12: February 19, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash upon teleporting with an altering
 *    Dragonbones armature load without a base sprite. Fix made by Irina.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Fixed a bug involving the changing of a Dragonbones battler in-battle to
 *    prevent multiple instances being added at once. Fix made by Irina.
 * 
 * Version 1.10: January 22, 2021
 * * Bug Fixes!
 * ** Upon changing map sprites, Dragonbones characters would become skewed.
 *    This should no longer happen.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Map Sprite: Actor Change Settings new Plugin Command parameters
 * *** "Walk Rate" and "Dash Rate" modifiers added.
 * 
 * Version 1.09: November 29, 2020
 * * Bug Fixes!
 * ** Dragonbones height for actors is no longer affected by frame divisibility
 *    for SV Actors to skew the positions of height data. Fix made by Arisu.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** Two new notetags have been added for map sprites by Irina.
 * *** <Dragonbones Sprite Walk Rate: x>
 * *** <Dragonbones Sprite Dash Rate: x>
 * **** These two new notetags allow you to animate specific Dragonbones
 *      animations at a different speed when walking or dashing. These speed
 *      multipliers will stack multiplicatively with the time scale.
 * 
 * Version 1.07: October 25, 2020
 * * Bug Fixes!
 * ** Dead animations for actors no longer keep looping upon motion refreshes.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Updated help file for new features.
 * * New Features!
 * ** New plugin parameter added by Irina.
 * *** Plugin Parameters > Battler Settings > Idle Bypass > List
 * **** This is a list of animations that will not return back to the idle
 *      animation after completion. Remove them if you want them to revert back
 *      to the idle animation after completion. Add to the list if you want
 *      animations to stay in their final frame.
 * 
 * Version 1.06: October 18, 2020
 * * Bug Fixes!
 * ** Enemies with Dragonbones battlers transforming into other enemies with
 *    Dragonbones battlers will now attach the sprites properly. Fix by Yanfly.
 * ** Enemies with Dragonbones battlers transforming into enemies without them
 *    will now remove the non-transformed bitmap.
 * * Documentation Update!
 * ** Added the 'Dragonbones Naming' section.
 * 
 * Version 1.05: October 4, 2020
 * * Bug Fixes!
 * ** Selected Dragonbones battlers will no longer leave behind a residual
 *    blink effect. Fix made by Irina.
 * ** There should be no more crashes from map events that have been previously
 *    deleted but not cleared from the map event list. Fix made by Irina.
 * 
 * Version 1.04: September 20, 2020
 * * Bug Fixes!
 * ** Hidden enemies with Dragonbones should be invisible at the start of
 *    battle. Fix made by Yanfly.
 * 
 * Version 1.03: September 13, 2020
 * * Compatibility Update!
 * ** Added compatibility with the new Battle Core v1.04 features!
 * 
 * Version 1.02: September 6, 2020
 * * Bug Fixes!
 * ** Previously, a Dragonbones battler does not show the blinking indicator if
 *    the battler is a selected target. This is now fixed. Fix made by Yanfly.
 * ** Prevents a crash now if no bitmap is detected for the main sprite.
 * 
 * Version 1.01: August 30, 2020
 * * Bug Fixes!
 * ** Erasing a picture no longer causes a crash when changing scenes. Fix made
 *    by Yanfly.
 * * Compatibility Update
 * ** Added compatibility for VisuStella MZ's Visual State Effects.
 *
 * Version 1.00: August 24, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Battler_ActorChange
 * @text Battler: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for battle.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the battler width size.
 * @default 64
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the battler height size.
 * @default 64
 *
 * @arg DefaultMotions
 * @text Motion Settings
 *
 * @arg MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default walk
 *
 * @arg MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default wait
 *
 * @arg MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default chant
 *
 * @arg MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default guard
 *
 * @arg MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default damage
 *
 * @arg MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default evade
 *
 * @arg MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default thrust
 *
 * @arg MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default swing
 *
 * @arg MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default missile
 *
 * @arg MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default skill
 *
 * @arg MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default spell
 *
 * @arg MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default item
 *
 * @arg MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default escape
 *
 * @arg MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default victory
 *
 * @arg MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dying
 *
 * @arg MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default abnormal
 *
 * @arg MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default sleep
 *
 * @arg MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Change the animation used for this motion.
 * @default dead
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorChange
 * @text Map Sprite: Actor Change Settings
 * @desc Change target actor's Dragonbones armature settings for map sprites.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Filename:str
 * @text Filename
 * @parent ActorID:num
 * @desc Change the armature's filename.
 * @default name
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @parent ActorID:num
 * @desc Change the armature's Offset X value.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @parent ActorID:num
 * @desc Change the armature's Offset Y value.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @parent ActorID:num
 * @desc Change the armature's Scale X value.
 * @default 0.5
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @parent ActorID:num
 * @desc Change the armature's Scale Y value.
 * @default 0.5
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @parent ActorID:num
 * @desc Change the armature's Time Scale value.
 * @default 1.0
 *
 * @arg WalkRate:eval
 * @text Walk Rate
 * @parent TimeScale:eval
 * @desc Change the armature's walk animation rate.
 * @default 1.0
 *
 * @arg DashRate:eval
 * @text Dash Rate
 * @parent TimeScale:eval
 * @desc Change the armature's dash animation rate.
 * @default 1.0
 *
 * @arg Width:eval
 * @text Width
 * @parent ActorID:num
 * @desc Change the armature's width value.
 * @default 48
 *
 * @arg Height:eval
 * @text Height
 * @parent ActorID:num
 * @desc Change the armature's height.
 * @default 48
 *
 * @arg FlipSettings
 * @text Flip Settings
 *
 * @arg FlipLeft:eval
 * @text Flip Left?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @arg FlipRight:eval
 * @text Flip Right?
 * @parent FlipSettings
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @arg Animations
 * @text Motion Settings
 *
 * @arg Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @arg Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @arg Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @arg Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @arg LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @arg LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @arg RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @arg RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationPlay
 * @text Map Sprite: Actor Play Animation
 * @desc Target actor plays a custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_ActorAnimationStop
 * @text Map Sprite: Actor Stop Animation
 * @desc Stops a target actor's custom Dragonbones animation.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationPlay
 * @text Map Sprite: Event Play Animation
 * @desc Target event plays a custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_EventAnimationStop
 * @text Map Sprite: Event Stop Animation
 * @desc Stops a target event's custom Dragonbones animation.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Select which Event ID to affect.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationPlay
 * @text Map Sprite: Follower Play Animation
 * @desc Target follower plays a custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_FollowerAnimationStop
 * @text Map Sprite: Follower Stop Animation
 * @desc Stops a target follower's custom Dragonbones animation.
 *
 * @arg FollowerIndex:eval
 * @text Follower ID
 * @desc Select which Follower Index to affect.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationPlay
 * @text Map Sprite: Player Play Animation
 * @desc Player plays a custom Dragonbones animation.
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapSprite_PlayerAnimationStop
 * @text Map Sprite: Player Stop Animation
 * @desc Stops player's custom Dragonbones animation.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_SetupDragonbones
 * @text Picture: Dragonbones Setup
 * @desc Setup a Dragonbones armature for a picture.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID(s) to give a Dragonbones armature.
 * @default 1
 *
 * @arg Filename:str
 * @text Armature Filename
 * @desc What is the armature's filename?
 * @default Untitled
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation once it starts.
 * @default Idle
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc Default X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Default Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc Default X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Default Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesAnimation
 * @text Picture: Play Dragonbones Animation
 * @desc Make an existing Dragonbones armature attached to a picture play an animation.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg Animation:str
 * @text Play Animation
 * @desc Play this animation.
 * @default Idle
 *
 * @arg IdleFinish:eval
 * @text Finish: Revert Idle?
 * @parent FlipSettings
 * @type boolean
 * @on Revert
 * @off Freeze
 * @desc Revert animation to 'idle' animation after finishing?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_DragonbonesOffset
 * @text Picture: Offset Dragonbones
 * @desc Offset the X, Y attachment point of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg OffsetX:eval
 * @text Offset: X
 * @desc X offset value for this Dragonbones armature.
 * @default 0
 *
 * @arg OffsetY:eval
 * @text Offset: Y
 * @desc Y offset value for this Dragonbones armature.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_ScaleDragonbones
 * @text Picture: Scale Dragonbones
 * @desc Change the scaling values of the Dragonbones armature.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg ScaleX:eval
 * @text Scale: X
 * @desc X scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @arg ScaleY:eval
 * @text Scale: Y
 * @desc Y scaling for this Dragonbones armature.
 * This will be amplified by the picture's scaling value.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Picture_TimeScaleDragonbones
 * @text Picture: Time Scale Dragonbones
 * @desc Change the speed at which Dragonbones animations play.
 *
 * @arg PictureID:eval
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Select which Picture ID to modify.
 * @default 1
 *
 * @arg TimeScale:eval
 * @text Time Scale
 * @desc Default time scale for this Dragonbones armature.
 * Higher values play faster. Lower values play slower.
 * @default 1.0
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
 * @param DragonbonesUnion
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Main
 * @text Main Settings
 *
 * @param AssetsPath:str
 * @text Assets Path
 * @parent Main
 * @desc The filepath to the directory that houses all the Dragonbone files.
 * @default ./dragonbones_assets/
 *
 * @param General:struct
 * @text General Settings
 * @parent Main
 * @type struct<General>
 * @desc A set of general settings pertaining to all uses of Dragonbones.
 * @default {"Defaults":"","LoadAnimation:str":"idle","LoopingAnimations:arraystr":"[\"idle\",\"walk\",\"wait\",\"chant\",\"guard\",\"dying\",\"abnormal\",\"sleep\",\"dash\",\"ladderidle\",\"ladderclimb\",\"ropeidle\",\"ropeclimb\"]","SkeletalData":"","SkeKey:str":"dbData","SkeExt:str":"_ske.json","TextureData":"","TexKey:str":"texData","TexExt:str":"_tex.json","TextureAsset":"","TxaKey:str":"texAsset","TxaExt:str":"_tex.png"}
 *
 * @param Battler:struct
 * @text Battler Settings
 * @parent Main
 * @type struct<Battler>
 * @desc A set of general settings pertaining to Dragonbones battlers.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"1.0","FlipActors:eval":"false","FlipEnemies:eval":"false","ScaleY:num":"1.0","TimeScale:num":"1.0","Width:num":"64","Height:num":"64","IdleBypass":"","IdleBypassList:arraystr":"[\"dead\",\"escape\",\"victory\"]","DefaultMotions":"","MotionWalk:str":"walk","MotionWait:str":"wait","MotionChant:str":"chant","MotionGuard:str":"guard","MotionDamage:str":"damage","MotionEvade:str":"evade","MotionThrust:str":"thrust","MotionSwing:str":"swing","MotionMissile:str":"missile","MotionSkill:str":"skill","MotionSpell:str":"spell","MotionItem:str":"item","MotionEscape:str":"escape","MotionVictory:str":"victory","MotionDying:str":"dying","MotionAbnormal:str":"abnormal","MotionSleep:str":"sleep","MotionDead:str":"dead"}
 *
 * @param MapSprite:struct
 * @text Map Sprite Settings
 * @parent Main
 * @type struct<MapSprite>
 * @desc A set of general settings pertaining to Dragonbones map sprites.
 * @default {"Defaults":"","OffsetX:num":"0","OffsetY:num":"0","ScaleX:num":"0.5","FlipLeft:eval":"false","FlipRight:eval":"false","ScaleY:num":"0.5","TimeScale:num":"1.0","Width:num":"48","Height:num":"48","Animations":"","Idle:str":"idle","Walk:str":"walk","WalkTimer:num":"2","Dash:str":"dash","Jump:str":"jump","LadderIdle:str":"ladderidle","LadderClimb:str":"ladderclimb","RopeIdle:str":"ropeidle","RopeClimb:str":"ropecllmb"}
 * 
 * @param Experimental
 * 
 * @param EnemyStances:eval
 * @text Enemy Stances
 * @parent Experimental
 * @type boolean
 * @on Enable Stances
 * @off No Stances
 * @desc Enemies can use stance motions for idling such as
 * chanting, guarding, etc. Requires VisuMZ_1_BattleCore!
 * @default false
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
 * @param Defaults
 *
 * @param LoadAnimation:str
 * @text Loaded Animation
 * @parent Defaults
 * @desc The default animation to play once a Dragonbones armature is loaded.
 * @default idle
 *
 * @param LoopingAnimations:arraystr
 * @text Looping Animations
 * @parent Defaults
 * @type string[]
 * @desc Force these animations to become looping animations even if they don't loop in Dragonbones.
 * @default ["idle","walk","wait","chant","guard","dying","abnormal","sleep","dash","ladderidle","ladderclimb","ropeidle","ropeclimb"]
 *
 * @param SkeletalData
 * @text Skeletal Data
 *
 * @param SkeKey:str
 * @text Key
 * @parent SkeletalData
 * @desc Key used to determine where skeletal data is stored.
 * @default dbData
 *
 * @param SkeExt:str
 * @text Extension
 * @parent SkeletalData
 * @desc Extension used to determine which files contain skeletal data.
 * @default _ske.json
 *
 * @param TextureData
 * @text Texture Data
 *
 * @param TexKey:str
 * @text Key
 * @parent TextureData
 * @desc Key used to determine where texture data is stored.
 * @default texData
 *
 * @param TexExt:str
 * @text Extension
 * @parent TextureData
 * @desc Extension used to determine which files contain texture data.
 * @default _tex.json
 *
 * @param TextureAsset
 * @text Texture Asset
 *
 * @param TxaKey:str
 * @text Key
 * @parent TextureAsset
 * @desc Key used to determine where texture assets are stored.
 * @default texAsset
 *
 * @param TxaExt:str
 * @text Extension
 * @parent TextureAsset
 * @desc Extension used to determine which files contain texture assets.
 * @default _tex.png
 *
 */
/* ----------------------------------------------------------------------------
 * Battler Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param HueAffected:eval
 * @text Enemy Hue Affected?
 * @parent Defaults
 * @type boolean
 * @on Affect Hues
 * @off No Hues
 * @desc Affect hues for enemies with Dragonbones battlers?
 * @default false
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for battler sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for battler sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones battlers.
 * @default 1.0
 *
 * @param FlipActors:eval
 * @text Flip for Actors?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all actors?
 * @default false
 *
 * @param FlipEnemies:eval
 * @text Flip for Enemies?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value into negative automatically for all enemies?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones battlers.
 * @default 1.0
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat battler sprites as if they have this width.
 * Used for Action Sequences.
 * @default 64
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat battler sprites as if they have this height.
 * Used for Action Sequences.
 * @default 64
 *
 * @param IdleBypass
 * @text Idle Bypass
 *
 * @param IdleBypassList:arraystr
 * @text List
 * @parent IdleBypass
 * @type combo[]
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc This is a list of animations that will not return back to the idle animation after completion.
 * @default ["dead","escape","victory"]
 *
 * @param DefaultMotions
 * @text Default Motions
 *
 * @param MotionWalk:str
 * @text Walk
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default walk
 *
 * @param MotionWait:str
 * @text Wait
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default wait
 *
 * @param MotionChant:str
 * @text Chant
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default chant
 *
 * @param MotionGuard:str
 * @text Guard
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default guard
 *
 * @param MotionDamage:str
 * @text Damage
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default damage
 *
 * @param MotionEvade:str
 * @text Evade
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default evade
 *
 * @param MotionThrust:str
 * @text Thrust
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default thrust
 *
 * @param MotionSwing:str
 * @text Swing
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default swing
 *
 * @param MotionMissile:str
 * @text Missile
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default missile
 *
 * @param MotionSkill:str
 * @text Skill
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default skill
 *
 * @param MotionSpell:str
 * @text Spell
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default spell
 *
 * @param MotionItem:str
 * @text Item
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default item
 *
 * @param MotionEscape:str
 * @text Escape
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default escape
 *
 * @param MotionVictory:str
 * @text Victory
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default victory
 *
 * @param MotionDying:str
 * @text Dying
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dying
 *
 * @param MotionAbnormal:str
 * @text Abnormal
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default abnormal
 *
 * @param MotionSleep:str
 * @text Sleep
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default sleep
 *
 * @param MotionDead:str
 * @text Dead
 * @parent DefaultMotions
 * @desc Play this Dragonbones animation whenever this motion
 * is requested by default. Used for Action Sequences.
 * @default dead
 *
 */
/* ----------------------------------------------------------------------------
 * Map Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MapSprite:
 *
 * @param Defaults
 * @text Default Settings
 *
 * @param OffsetX:num
 * @text Offset: X
 * @parent Defaults
 * @desc Default X offset for map sprites.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset: Y
 * @parent Defaults
 * @desc Default Y offset for map sprites.
 * @default 0
 *
 * @param ScaleX:num
 * @text Scale: X
 * @parent Defaults
 * @desc Default scale for X used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param FlipLeft:eval
 * @text Flip Left?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing left-ward directions?
 * @default false
 *
 * @param FlipRight:eval
 * @text Flip Right?
 * @parent ScaleX:num
 * @type boolean
 * @on Flip
 * @off Normal
 * @desc Flip the scale x value when facing right-ward directions?
 * animation is found?
 * @default false
 *
 * @param ScaleY:num
 * @text Scale: Y
 * @parent Defaults
 * @desc Default scale for Y used by Dragonbones map sprites.
 * @default 0.5
 *
 * @param TimeScale:num
 * @text Time Scale
 * @parent Defaults
 * @desc The rate at which animations play.
 * Higher numbers go faster.
 * @default 1.0
 *
 * @param Width:num
 * @text Width
 * @parent Defaults
 * @desc Treat map sprites as if they have this width.
 * Used for various plugins.
 * @default 48
 *
 * @param Height:num
 * @text Height
 * @parent Defaults
 * @desc Treat map sprites as if they have this height.
 * Used for various plugins.
 * @default 48
 *
 * @param Animations
 * @text Motion Settings
 *
 * @param antiLoopRevert:eval
 * @text Anti-Loop Revert
 * @parent Animations
 * @type boolean
 * @on Prevent Revert
 * @off Don't Change
 * @desc Prevent reverting non-looping animations with playtimes of 1.
 * @default false
 *
 * @param Idle:str
 * @text Idle
 * @parent Animations
 * @desc Base idle animation name used.
 * @default idle
 *
 * @param Walk:str
 * @text Walk
 * @parent Animations
 * @desc Base walk animation name used.
 * @default walk
 *
 * @param WalkTimer:num
 * @text Walk Timer
 * @parent Walk:str
 * @desc Number of frames to count as walking so that an idle animation isn't immediately forced upon stopping.
 * @default 2
 *
 * @param Dash:str
 * @text Dash
 * @parent Animations
 * @desc Base dash animation name used.
 * @default dash
 *
 * @param Jump:str
 * @text Jump
 * @parent Animations
 * @desc Base jump animation name used.
 * @default jump
 *
 * @param LadderIdle:str
 * @text Ladder (Idle)
 * @parent Animations
 * @desc Base ladder idle animation name used.
 * @default ladderidle
 *
 * @param LadderClimb:str
 * @text Ladder (Climb)
 * @parent Animations
 * @desc Base ladder climbing animation name used.
 * @default ladderclimb
 *
 * @param RopeIdle:str
 * @text Rope (Idle)
 * @parent Animations
 * @desc Base rope idle animation name used.
 * @default ropeidle
 *
 * @param RopeClimb:str
 * @text Rope (Climb)
 * @parent Animations
 * @desc Base rope climbing animation name used.
 * @default ropecllmb
 *
 */
//=============================================================================

const _0x15f67a=_0x1f1c;(function(_0xa15baa,_0x553491){const _0x3c9439=_0x1f1c,_0x54a1f1=_0xa15baa();while(!![]){try{const _0x512777=-parseInt(_0x3c9439(0x228))/0x1+parseInt(_0x3c9439(0x223))/0x2+parseInt(_0x3c9439(0x30c))/0x3+-parseInt(_0x3c9439(0x36d))/0x4*(-parseInt(_0x3c9439(0x36a))/0x5)+-parseInt(_0x3c9439(0x2ce))/0x6+parseInt(_0x3c9439(0x21d))/0x7+-parseInt(_0x3c9439(0x350))/0x8;if(_0x512777===_0x553491)break;else _0x54a1f1['push'](_0x54a1f1['shift']());}catch(_0x2d6daa){_0x54a1f1['push'](_0x54a1f1['shift']());}}}(_0x3989,0xaca8f));var label=_0x15f67a(0x215),tier=tier||0x0,dependencies=[_0x15f67a(0x23a)],pluginData=$plugins[_0x15f67a(0x29f)](function(_0x2e9672){const _0xafbfec=_0x15f67a;return _0x2e9672[_0xafbfec(0x1f1)]&&_0x2e9672['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x15f67a(0x1f3)]=VisuMZ[label][_0x15f67a(0x1f3)]||{},VisuMZ[_0x15f67a(0x1fa)]=function(_0x3f6e8e,_0x145add){const _0x3e76da=_0x15f67a;for(const _0x5d0df5 in _0x145add){if(_0x5d0df5[_0x3e76da(0x2c7)](/(.*):(.*)/i)){if(_0x3e76da(0x3bf)!=='GutnV'){const _0x5a9056=String(RegExp['$1']),_0x1e7097=String(RegExp['$2'])[_0x3e76da(0x387)]()[_0x3e76da(0x34f)]();let _0x413218,_0x51b016,_0x47d1fe;switch(_0x1e7097){case _0x3e76da(0x222):_0x413218=_0x145add[_0x5d0df5]!==''?Number(_0x145add[_0x5d0df5]):0x0;break;case'ARRAYNUM':_0x51b016=_0x145add[_0x5d0df5]!==''?JSON[_0x3e76da(0x26e)](_0x145add[_0x5d0df5]):[],_0x413218=_0x51b016['map'](_0x1b79f6=>Number(_0x1b79f6));break;case _0x3e76da(0x32b):_0x413218=_0x145add[_0x5d0df5]!==''?eval(_0x145add[_0x5d0df5]):null;break;case _0x3e76da(0x2f3):_0x51b016=_0x145add[_0x5d0df5]!==''?JSON[_0x3e76da(0x26e)](_0x145add[_0x5d0df5]):[],_0x413218=_0x51b016['map'](_0x5683cd=>eval(_0x5683cd));break;case'JSON':_0x413218=_0x145add[_0x5d0df5]!==''?JSON[_0x3e76da(0x26e)](_0x145add[_0x5d0df5]):'';break;case _0x3e76da(0x250):_0x51b016=_0x145add[_0x5d0df5]!==''?JSON[_0x3e76da(0x26e)](_0x145add[_0x5d0df5]):[],_0x413218=_0x51b016['map'](_0x395299=>JSON[_0x3e76da(0x26e)](_0x395299));break;case _0x3e76da(0x302):_0x413218=_0x145add[_0x5d0df5]!==''?new Function(JSON[_0x3e76da(0x26e)](_0x145add[_0x5d0df5])):new Function('return\x200');break;case _0x3e76da(0x202):_0x51b016=_0x145add[_0x5d0df5]!==''?JSON['parse'](_0x145add[_0x5d0df5]):[],_0x413218=_0x51b016[_0x3e76da(0x3d7)](_0x2c2d51=>new Function(JSON['parse'](_0x2c2d51)));break;case'STR':_0x413218=_0x145add[_0x5d0df5]!==''?String(_0x145add[_0x5d0df5]):'';break;case _0x3e76da(0x243):_0x51b016=_0x145add[_0x5d0df5]!==''?JSON[_0x3e76da(0x26e)](_0x145add[_0x5d0df5]):[],_0x413218=_0x51b016[_0x3e76da(0x3d7)](_0x37d6ab=>String(_0x37d6ab));break;case _0x3e76da(0x214):_0x47d1fe=_0x145add[_0x5d0df5]!==''?JSON[_0x3e76da(0x26e)](_0x145add[_0x5d0df5]):{},_0x413218=VisuMZ[_0x3e76da(0x1fa)]({},_0x47d1fe);break;case _0x3e76da(0x205):_0x51b016=_0x145add[_0x5d0df5]!==''?JSON['parse'](_0x145add[_0x5d0df5]):[],_0x413218=_0x51b016[_0x3e76da(0x3d7)](_0x146297=>VisuMZ[_0x3e76da(0x1fa)]({},JSON[_0x3e76da(0x26e)](_0x146297)));break;default:continue;}_0x3f6e8e[_0x5a9056]=_0x413218;}else{_0x3a1f01[_0x3e76da(0x204)](_0x482a98+0x4);if(_0x421386[_0x3e76da(0x3d4)])_0x34a0fd[_0x3e76da(0x204)](_0x225383+0x6);_0x3162fc[_0x3e76da(0x204)](_0xd98374+0x2);}}}return _0x3f6e8e;},(_0x379807=>{const _0x553722=_0x15f67a,_0xd233c5=_0x379807['name'];for(const _0x4383cf of dependencies){if(!Imported[_0x4383cf]){alert(_0x553722(0x3a4)[_0x553722(0x3a3)](_0xd233c5,_0x4383cf)),SceneManager[_0x553722(0x2c4)]();break;}}const _0xb576c1=_0x379807[_0x553722(0x2ff)];if(_0xb576c1[_0x553722(0x2c7)](/\[Version[ ](.*?)\]/i)){const _0x3ff14a=Number(RegExp['$1']);_0x3ff14a!==VisuMZ[label][_0x553722(0x3d8)]&&(alert(_0x553722(0x357)[_0x553722(0x3a3)](_0xd233c5,_0x3ff14a)),SceneManager[_0x553722(0x2c4)]());}if(_0xb576c1[_0x553722(0x2c7)](/\[Tier[ ](\d+)\]/i)){const _0x297f57=Number(RegExp['$1']);if(_0x297f57<tier){if(_0x553722(0x33a)===_0x553722(0x1e5)){if(!_0x232348)return;if(_0x4498ce['_scene'][_0x553722(0x268)]!==_0x5afab8)return;_0x3d97e4[_0x553722(0x240)]='';}else alert(_0x553722(0x270)[_0x553722(0x3a3)](_0xd233c5,_0x297f57,tier)),SceneManager[_0x553722(0x2c4)]();}else tier=Math[_0x553722(0x298)](_0x297f57,tier);}VisuMZ[_0x553722(0x1fa)](VisuMZ[label]['Settings'],_0x379807[_0x553722(0x2cd)]);})(pluginData);function _0x1f1c(_0xeea92e,_0x1afb29){const _0x398981=_0x3989();return _0x1f1c=function(_0x1f1c76,_0x3d304d){_0x1f1c76=_0x1f1c76-0x1de;let _0x5c8c0d=_0x398981[_0x1f1c76];return _0x5c8c0d;},_0x1f1c(_0xeea92e,_0x1afb29);}function _0x3989(){const _0x56830a=['isCompleted','findPictureSprite','filter','awDaP','QxXyL','dead','XaDbp','Sprite_updateColorFilter','damage','animationNames','loadComplete','JQXRK','TimeScale','Jump','yTQLp','_escaping','Yicrj','offsetX','_scene','setLastPluginCommandInterpreter','scaleX','setupDragonbones','BvkGw','update','name','checkDragonbonesStringTags','EnemyStances','scaleY','battler','TYdxS','_dragonbonesFilename','setup','Scene_Battle_terminate','MotionDamage','fDBrg','Game_Event_clearPageSettings','zkWZk','BattleManager_processEscape','Sprite_Character_updateCharacterFrame','exit','MotionAbnormal','gOprF','match','WQTUl','MapSprite_EventAnimationPlay','PixiFactory','_mainSprite','_dragonbonesSpriteData','parameters','4337658roaXVu','stateMotionIndex','playTimes','prepareNextLoadArmature','MotionVictory','MapSprite','item','dragonbonesFlip','startMotion','isActor','dqRgI','refreshMotionDragonbones','WalkTimer','findTargetSprite','MapSprite_PlayerAnimationPlay','registerCommand','visible','CjkUN','type','PHULb','Sprite_Enemy_initMembers','initMembersDragonbonesUnion','Game_Battler_performActionEndMembers','EHPLI','DefaultAnimation','setHue','WyuBF','children','NQMKF','mFldl','QzreW','opacity','Game_Enemy_performDamage','Idle','LoadQueue','timeScale','Picture_SetupDragonbones','ARRAYEVAL','RopeIdle','filename','getDragonbones','remove','round','xnZyu','YOHmF','_playTestFastMode','isInputting','_enemyId','_stateSprite','description','buildArmatureDisplay','dispose','FUNC','Dash','test','Sprite_Actor_updateShadow','lSeBE','isDying','AdojR','Game_Actor_performCollapse','texture','Game_Actor_performDamage','3148437VWoyVi','FlipLeft','FlipActors','MotionSleep','zTOJf','battleAniSpeed','Sprite_Actor_startMotion','wait','concat','performDamageDragonbonesUnion','loading','kLYbM','NiXko','Battler','Game_Actor_performAttack','resources','wIFNN','RopeClimb','setDragonbonesHue','leader','_lastMotionType','performDamage','escape','ScaleY','_dragonbonesMoveTimer','index','offsetY','THJqR','factory','RkKtX','Sprite_Enemy_setHue','EVAL','dying','rSWZt','parseTextureAtlasData','SkeExt','MotionDying','yuOaK','OffsetX','yCONC','requestMotionRefresh','isGuardWaiting','removeChild','MotionSpell','terminate','processEscape','lnVAe','aMHOL','followers','lKPAD','note','mijcD','MapSprite_ActorChange','hasDragonbonesBattler','LoadedFilenames','lastAnimationState','iSFXC','MotionSwing','_spriteset','call','length','Battler_ActorChange','initialize','QjDzu','animations','wuIry','GyFki','trim','4370248YLRzHn','Game_Enemy_setup','Height','EventID','Width','OffsetY','updateDragonbonesProperties','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','LadderIdle','_requestedDragonbonesAnimation','scale','motion','_baseDragonbonesSprite','setupDragonbonesData','isEnemy','createArmature','Game_Screen_erasePicture','yYJbb','gVhEY','nonAd','PQyqo','TPFNs','updateFrame','updateDragonbones','bind','OhUbu','150sjWjoE','updateDragonbonesBattler','updateDragonbonesUnion','11504mVXlgr','idle','loadNextArmature','MIuSl','MapSprite_FollowerAnimationStop','isDead','battlerHue','yHqsk','Game_Actor_setup','MotionGuard','_escaped','Sprite_Character_initialize','Sprite_Enemy_refreshMotion','updateCharacterFrame','_pictureContainer','animation','jump','5.3.12','flipRight','clearPageSettings','dVPzL','requestMotion','updateBitmap','_character','isActing','_dragonbones','toUpperCase','once','MapSprite_ActorAnimationPlay','Loader','attack','PTqtU','prototype','isOnLadder','MotionThrust','abnormal','FbEfa','MapSprite_EventAnimationStop','requestDragonbonesAnimation','revertToIdle','_dragonbonesData','performAction','updateDragonbonesAnimation','find','addDragonbonesAnimationDirections','MotionChant','ActorID','eventId','General','page','load','MotionEvade','Game_Enemy_performAction','Sprite_Character_updateBitmap','format','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','toLowerCase','SnQqm','Sprite_Actor_updateBitmap','CallbackQueue','gbzaF','TxaKey','add','oVqbk','Game_CharacterBase_update','follower','hasDragonbones','FlipRight','shgEy','WalkRate','Game_Interpreter_PluginCommand','acfya','erasePicture','dragonbonesSpriteData','MapSprite_PlayerAnimationStop','RtXNZ','testArmature','MoHRM','Game_Enemy_transform','RHlsA','actor','isPlaying','gcyRJ','BattleManager_endBattle','setupDragonbonesDataCommentTags','SkeKey','walk','Picture_ScaleDragonbones','MotionSkill','HWYPf','isHidden','oQkGa','bitmap','blendMode','_lastPluginCommandInterpreter','ladderclimb','antiLoopRevert','_dragonbonesBattlerData','performActionEndMembers','IdleFinish','ThVOD','alRsw','RpVEn','flipLeft','dash','enemy','map','version','XZweb','command357','FCxGU','picture','YmEIo','ropeidle','lastAnimationName','JnfaB','erasePictureDragonbonesUnion','SAMiN','shift','This\x20is\x20a\x20static\x20class','_dragonbonesSpriteContainer','PlarF','playDragonbonesMotion','isMoving','Game_Battler_requestMotionRefresh','shouldRevertNonLoop','_dragonbonesName','status','updateDragonbonesSelection','Settings','currentDragonbonesAnimation','runQueuedCallbacks','setColorTone','VisuMZ_1_EventsMoveCore','Sprite_Actor_initMembers','Sprite_Actor','ConvertParams','createBaseDragonbonesSprite','Sprite_Picture_update','kNYUC','playDragonbonesAnimation','VERSION','sleep','Sprite_Enemy_setBattler','ARRAYFUNC','dashRate','push','ARRAYSTRUCT','TGYtb','_shadowSprite','_pictures','setBattler','Sprite_Actor_updateFrame','updateDragonbonesArmature','isUndecided','eeblA','isOnRope','updateShadowDragonbonesUnion','SaSHm','HDQwm','ScaleX','TexKey','STRUCT','DragonbonesUnion','event','addDragonbonesChild','processLoad','IdleBypassList','attachSpritesToDistortionSprite','hirwJ','filters','9069746EDWWCV','_updateColorFilter','Sprite_Actor_update','toIrE','Animation','NUM','760294sFhyHB','kahWv','_hue','loadArmature','ZKEiw','835145EUlnuc','_enemy','pkWDT','setupPageSettings','Game_Event_setupPageSettings','dragonbonesData','Picture_DragonbonesOffset','elcSn','NoYXn','MotionEscape','list','collapseType','TxaExt','_updateDragonbonesChildrenColorFilter','QINYs','width','_playtestF7Looping','MotionMissile','Dragonbones','ALGYY','tMoTX','HtiGz','isItem','isGuard','dragonbonesAnimation','isDragonbonesHueAffected','setFrame','ARRAYSTR','_battler','nMRJc','walkRate','PictureID','MotionWait','isSkill','CTzsV','code','includes','_weaponSprite','parent','Game_Player_refresh','ARRAYJSON','xHjXL','_dragonbonesAnimation','AssetsPath','isTryingToEscape','battlerSprites','parseDragonBonesData','addChildAt','onComplete','addChild','performCollapse','initMembers','refreshMotion','Sprite_Picture_initialize','BattleManager_onEscapeFailure','getLastPluginCommandInterpreter','defineProperty','updateShadow','playDragonbonesIdleAnimation','yYxBD','Dhimu','data','Game_Follower_refresh','ZRPrD','constructor','AAaCj','MotionWalk','isDashing','shared','isJumping','parse','guard','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','FollowerIndex','performActionMotions','chant','Filename','Game_Enemy_performCollapse','isSceneBattle','performCollapseDragonbonesUnion','ladderidle','_distortionSprite','updateFrameDragonbonesUnion','performAttack','testLoaded','canActorPlayDragonbonesMotion','isChanting','height','updateDragonbonesTimeScale','_targets','Xuczm','updateCharacterFrameDragonbonesUnion','LTyHQ','_colorFilter','_dragonbonesFlipDirection','createDefaultPicture','Sprite_Enemy_updateBitmap','MapSprite_ActorAnimationStop','direction','YgBdu','initDragonbonesData','onEscapeFailure','Game_Picture_initialize','skill','showPicture','Walk','performActionDragonbonesUnion','onLoadDragonbones','lastFileName','FlipEnemies','play','makeDeepCopy','max','isAlive','disposeDragonbones','clearTryEscaping','refresh'];_0x3989=function(){return _0x56830a;};return _0x3989();}function DragonbonesManager(){const _0x2ec9d0=_0x15f67a;throw new Error(_0x2ec9d0(0x1e9));}DragonbonesManager[_0x15f67a(0x253)]=VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x1f3)][_0x15f67a(0x253)],DragonbonesManager[_0x15f67a(0x2e6)]=VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x1f3)][_0x15f67a(0x39d)]['LoadAnimation'],DragonbonesManager[_0x15f67a(0x342)]=[],DragonbonesManager['LoadQueue']=[],DragonbonesManager[_0x15f67a(0x3a8)]=[],DragonbonesManager[_0x15f67a(0x304)]=function(_0x3e714a,_0xff5505,_0x442421,_0x47e53d){const _0x16cd2b=_0x15f67a;if(!_0x442421)_0x442421=SceneManager[_0x16cd2b(0x2af)];if(!_0x47e53d)_0x47e53d=_0x16cd2b(0x3b9);if(_0x442421[_0x47e53d]){const _0x4955a5=_0x442421[_0x47e53d];_0x4955a5&&(_0x442421[_0x16cd2b(0x336)](_0x4955a5),_0x4955a5[_0x16cd2b(0x301)]());}this[_0x16cd2b(0x226)](_0x3e714a,DragonbonesManager[_0x16cd2b(0x27c)][_0x16cd2b(0x368)](this,_0x3e714a,_0xff5505,_0x442421,_0x47e53d));},DragonbonesManager[_0x15f67a(0x27c)]=function(_0x852e6,_0x31a638,_0x367874,_0x53e043){const _0x387d55=_0x15f67a,_0x5115ed=this['createArmature'](_0x852e6);if(_0x5115ed){if(_0x387d55(0x2eb)!==_0x387d55(0x227))_0x367874[_0x387d55(0x259)](_0x5115ed),_0x5115ed['x']=Graphics['width']/0x2,_0x5115ed['y']=Graphics[_0x387d55(0x27f)]*0x3/0x4,_0x31a638=_0x31a638||DragonbonesManager[_0x387d55(0x2e6)],_0x31a638=_0x31a638[_0x387d55(0x3a5)](),_0x5115ed[_0x387d55(0x37c)][_0x387d55(0x34c)][_0x31a638]&&('PHULb'===_0x387d55(0x2e1)?_0x5115ed[_0x387d55(0x37c)][_0x387d55(0x296)](_0x31a638):this['disposeDragonbones']());else{const _0xeadda6=this['picture']()[_0x387d55(0x22d)]();this[_0x387d55(0x386)]=_0x1e5bb5[_0x387d55(0x35f)](_0xeadda6[_0x387d55(0x2f5)]),this[_0x387d55(0x257)](this['_dragonbones'],0x0),this[_0x387d55(0x397)]();}}_0x367874[_0x53e043]=_0x5115ed;},DragonbonesManager['createArmature']=function(_0x3d2e7b){const _0x3a6f4a=_0x15f67a,_0x47def9=dragonBones[_0x3a6f4a(0x2ca)][_0x3a6f4a(0x328)][_0x3a6f4a(0x300)](_0x3d2e7b);if(!_0x47def9)return null;for(const _0x3dbec3 in _0x47def9['animation'][_0x3a6f4a(0x34c)]){if(_0x3dbec3[_0x3a6f4a(0x3a5)]()===_0x3dbec3)continue;_0x47def9[_0x3a6f4a(0x37c)][_0x3a6f4a(0x34c)][_0x3dbec3[_0x3a6f4a(0x3a5)]()]=_0x47def9[_0x3a6f4a(0x37c)][_0x3a6f4a(0x34c)][_0x3dbec3],delete _0x47def9[_0x3a6f4a(0x37c)][_0x3a6f4a(0x34c)][_0x3dbec3];}for(let _0x1720ac=0x0;_0x1720ac<_0x47def9[_0x3a6f4a(0x37c)][_0x3a6f4a(0x2a6)][_0x3a6f4a(0x348)];_0x1720ac++){_0x3a6f4a(0x3a9)!==_0x3a6f4a(0x3a9)?this[_0x3a6f4a(0x393)](_0x3a6f4a(0x38b)):_0x47def9[_0x3a6f4a(0x37c)]['animationNames'][_0x1720ac]=_0x47def9[_0x3a6f4a(0x37c)][_0x3a6f4a(0x2a6)][_0x1720ac]['toLowerCase']();}const _0x35a247=VisuMZ[_0x3a6f4a(0x215)][_0x3a6f4a(0x1f3)][_0x3a6f4a(0x39d)]['LoopingAnimations'];for(let _0x9c09b of _0x35a247){_0x9c09b=_0x9c09b[_0x3a6f4a(0x3a5)]()[_0x3a6f4a(0x34f)]();_0x47def9['animation'][_0x3a6f4a(0x34c)][_0x9c09b]&&(_0x47def9['animation']['animations'][_0x9c09b][_0x3a6f4a(0x2d0)]=0x0);for(let _0x22f88a=0x1;_0x22f88a<=0x9;_0x22f88a++){const _0x561acb=_0x9c09b+_0x22f88a;_0x47def9[_0x3a6f4a(0x37c)][_0x3a6f4a(0x34c)][_0x561acb]&&(_0x47def9[_0x3a6f4a(0x37c)][_0x3a6f4a(0x34c)][_0x561acb][_0x3a6f4a(0x2d0)]=0x0);}}return _0x47def9[_0x3a6f4a(0x37c)][_0x3a6f4a(0x34c)][DragonbonesManager[_0x3a6f4a(0x2e6)]]&&(_0x3a6f4a(0x33d)!==_0x3a6f4a(0x28b)?_0x47def9[_0x3a6f4a(0x37c)][_0x3a6f4a(0x296)](DragonbonesManager[_0x3a6f4a(0x2e6)]):_0x5a78e0[_0x3a6f4a(0x2ae)]=_0x31be80(_0x3f42cb['$1'])),_0x47def9;},DragonbonesManager['loadArmature']=function(_0x4008e0,_0x1291b5){const _0x343cc3=_0x15f67a;_0x4008e0=_0x4008e0[_0x343cc3(0x34f)](),DragonbonesManager[_0x343cc3(0x2f0)][_0x343cc3(0x204)](_0x4008e0),DragonbonesManager[_0x343cc3(0x3a8)][_0x343cc3(0x204)](_0x1291b5);const _0x47abdc=PIXI[_0x343cc3(0x38a)][_0x343cc3(0x26c)];!_0x47abdc[_0x343cc3(0x316)]&&this[_0x343cc3(0x36f)]();},DragonbonesManager[_0x15f67a(0x36f)]=function(){const _0x187a42=_0x15f67a;DragonbonesManager[_0x187a42(0x2f0)][_0x187a42(0x348)]>0x0?this[_0x187a42(0x2d1)]():this['runQueuedCallbacks']();},DragonbonesManager['prepareNextLoadArmature']=function(){const _0x4023c5=_0x15f67a,_0xba3181=DragonbonesManager[_0x4023c5(0x2f0)]['shift']();if(this[_0x4023c5(0x342)][_0x4023c5(0x24c)](_0xba3181))this[_0x4023c5(0x36f)]();else!this[_0x4023c5(0x342)][_0x4023c5(0x24c)](_0xba3181)&&('yYxBD'===_0x4023c5(0x263)?this[_0x4023c5(0x218)](_0xba3181):_0x1782ff[_0x4023c5(0x37c)]['play'](_0x157213[_0x4023c5(0x2e6)]));},DragonbonesManager[_0x15f67a(0x218)]=function(_0x582a9a){const _0x3f521d=_0x15f67a,_0x4a34f5=PIXI[_0x3f521d(0x1ff)]>=_0x3f521d(0x37e);this[_0x3f521d(0x342)][_0x3f521d(0x204)](_0x582a9a),this[_0x3f521d(0x294)]=_0x582a9a;const _0x304669=VisuMZ[_0x3f521d(0x215)][_0x3f521d(0x1f3)][_0x3f521d(0x39d)],_0x391143=DragonbonesManager[_0x3f521d(0x253)],_0x547eb0=PIXI[_0x3f521d(0x38a)]['shared'];_0x547eb0['add'](_0x582a9a+_0x304669[_0x3f521d(0x3c2)],_0x391143+_0x582a9a+_0x304669[_0x3f521d(0x32f)]),_0x547eb0[_0x3f521d(0x3ab)](_0x582a9a+_0x304669[_0x3f521d(0x213)],_0x391143+_0x582a9a+_0x304669['TexExt']),_0x547eb0['add'](_0x582a9a+_0x304669[_0x3f521d(0x3aa)],_0x391143+_0x582a9a+_0x304669['TxaExt']),_0x4a34f5?(_0x547eb0['load'](_0x547eb0),_0x547eb0[_0x3f521d(0x258)]['once'](()=>DragonbonesManager['loadComplete'](_0x547eb0,_0x547eb0[_0x3f521d(0x31b)]))):(_0x547eb0['once']('complete',DragonbonesManager[_0x3f521d(0x2a7)],this),_0x547eb0[_0x3f521d(0x39f)]());},DragonbonesManager[_0x15f67a(0x2a7)]=function(_0x5f0b00,_0xef4bd9){const _0x55e8a7=_0x15f67a,_0x3e0664=VisuMZ[_0x55e8a7(0x215)][_0x55e8a7(0x1f3)][_0x55e8a7(0x39d)],_0x773e5e=this[_0x55e8a7(0x294)],_0x3acb2c=dragonBones['PixiFactory'][_0x55e8a7(0x328)];_0x3acb2c[_0x55e8a7(0x256)](_0xef4bd9[_0x773e5e+_0x3e0664['SkeKey']][_0x55e8a7(0x265)]),_0x3acb2c[_0x55e8a7(0x32e)](_0xef4bd9[_0x773e5e+_0x3e0664[_0x55e8a7(0x213)]][_0x55e8a7(0x265)],_0xef4bd9[_0x773e5e+_0x3e0664['TxaKey']][_0x55e8a7(0x30a)]),this[_0x55e8a7(0x36f)]();},DragonbonesManager[_0x15f67a(0x1f5)]=function(){const _0x11fc48=_0x15f67a;while(DragonbonesManager[_0x11fc48(0x3a8)][_0x11fc48(0x348)]>0x0){const _0x46705f=DragonbonesManager[_0x11fc48(0x3a8)][_0x11fc48(0x1e8)]();if(_0x46705f)_0x46705f(this);}},PluginManager[_0x15f67a(0x2dd)](pluginData[_0x15f67a(0x2b5)],_0x15f67a(0x349),_0x211c7f=>{const _0x5c7438=_0x15f67a;if(!$gameMap)return;VisuMZ['ConvertParams'](_0x211c7f,_0x211c7f);const _0x362313=$gameActors[_0x5c7438(0x3bd)](_0x211c7f[_0x5c7438(0x39b)]);if(!_0x362313)return;_0x362313[_0x5c7438(0x3ce)]={'battler':_0x211c7f[_0x5c7438(0x274)],'scaleX':_0x211c7f['ScaleX'],'scaleY':_0x211c7f[_0x5c7438(0x323)],'offsetX':_0x211c7f[_0x5c7438(0x332)],'offsetY':_0x211c7f['OffsetY'],'timeScale':_0x211c7f['TimeScale'],'width':_0x211c7f['Width'],'height':_0x211c7f[_0x5c7438(0x352)],'motion':{'walk':_0x211c7f[_0x5c7438(0x26a)],'wait':_0x211c7f['MotionWait'],'chant':_0x211c7f['MotionChant'],'guard':_0x211c7f[_0x5c7438(0x376)],'damage':_0x211c7f[_0x5c7438(0x2be)],'evade':_0x211c7f[_0x5c7438(0x3a0)],'thrust':_0x211c7f[_0x5c7438(0x38f)],'swing':_0x211c7f[_0x5c7438(0x345)],'missile':_0x211c7f[_0x5c7438(0x239)],'skill':_0x211c7f[_0x5c7438(0x3c5)],'spell':_0x211c7f[_0x5c7438(0x337)],'item':_0x211c7f['MotionItem'],'escape':_0x211c7f[_0x5c7438(0x231)],'victory':_0x211c7f[_0x5c7438(0x2d2)],'dying':_0x211c7f[_0x5c7438(0x330)],'abnormal':_0x211c7f[_0x5c7438(0x2c5)],'sleep':_0x211c7f['MotionSleep'],'dead':_0x211c7f['MotionDead']}};}),SceneManager[_0x15f67a(0x276)]=function(){const _0x1557cb=_0x15f67a;return this[_0x1557cb(0x2af)]&&this[_0x1557cb(0x2af)][_0x1557cb(0x268)]===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x42a330=_0x15f67a;return this[_0x42a330(0x2af)]&&this[_0x42a330(0x2af)][_0x42a330(0x268)]===Scene_Map;},VisuMZ[_0x15f67a(0x215)]['BattleManager_processEscape']=BattleManager[_0x15f67a(0x339)],BattleManager[_0x15f67a(0x339)]=function(){const _0x579924=_0x15f67a;return this[_0x579924(0x2ac)]=!![],VisuMZ[_0x579924(0x215)][_0x579924(0x2c2)][_0x579924(0x347)](this);},VisuMZ[_0x15f67a(0x215)]['BattleManager_onEscapeFailure']=BattleManager[_0x15f67a(0x28d)],BattleManager[_0x15f67a(0x28d)]=function(){const _0x14cd13=_0x15f67a;VisuMZ[_0x14cd13(0x215)][_0x14cd13(0x25e)][_0x14cd13(0x347)](this),setTimeout(this[_0x14cd13(0x29b)][_0x14cd13(0x368)](this),0x1f4);},BattleManager[_0x15f67a(0x29b)]=function(){const _0x59af85=_0x15f67a;this[_0x59af85(0x2ac)]=![];},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x3c0)]=BattleManager['endBattle'],BattleManager['endBattle']=function(_0x165079){const _0x10d82c=_0x15f67a;this[_0x10d82c(0x2ac)]=![],VisuMZ['DragonbonesUnion']['BattleManager_endBattle'][_0x10d82c(0x347)](this,_0x165079);},BattleManager[_0x15f67a(0x254)]=function(){const _0x379443=_0x15f67a;return this[_0x379443(0x2ac)]||this[_0x379443(0x377)];},Game_BattlerBase['prototype'][_0x15f67a(0x2b9)]=function(){const _0x5002d5=_0x15f67a;if(!SceneManager['isSceneBattle']())return null;if(!SceneManager[_0x5002d5(0x2af)]['_spriteset'])return null;return SceneManager[_0x5002d5(0x2af)][_0x5002d5(0x346)][_0x5002d5(0x2db)](this);},Game_BattlerBase[_0x15f67a(0x38d)]['initDragonbonesData']=function(){const _0x571734=_0x15f67a,_0x596c50=VisuMZ[_0x571734(0x215)][_0x571734(0x1f3)][_0x571734(0x319)];this['_dragonbonesBattlerData']={'battler':'','scaleX':_0x596c50[_0x571734(0x212)],'scaleY':_0x596c50[_0x571734(0x323)],'width':_0x596c50[_0x571734(0x354)],'height':_0x596c50['Height'],'offsetX':_0x596c50[_0x571734(0x332)],'offsetY':_0x596c50[_0x571734(0x355)],'timeScale':_0x596c50['TimeScale'],'motion':{'walk':_0x596c50['MotionWalk'],'wait':_0x596c50[_0x571734(0x248)],'chant':_0x596c50[_0x571734(0x39a)],'guard':_0x596c50[_0x571734(0x376)],'damage':_0x596c50[_0x571734(0x2be)],'evade':_0x596c50[_0x571734(0x3a0)],'thrust':_0x596c50[_0x571734(0x38f)],'swing':_0x596c50[_0x571734(0x345)],'missile':_0x596c50[_0x571734(0x239)],'skill':_0x596c50['MotionSkill'],'spell':_0x596c50[_0x571734(0x337)],'item':_0x596c50['MotionItem'],'escape':_0x596c50[_0x571734(0x231)],'victory':_0x596c50[_0x571734(0x2d2)],'dying':_0x596c50[_0x571734(0x330)],'abnormal':_0x596c50['MotionAbnormal'],'sleep':_0x596c50[_0x571734(0x30f)],'dead':_0x596c50['MotionDead']}};if(_0x596c50[_0x571734(0x30e)]&&this[_0x571734(0x2d7)]())this[_0x571734(0x3ce)]['scaleX']*=-0x1;if(_0x596c50[_0x571734(0x295)]&&this[_0x571734(0x35e)]())this[_0x571734(0x3ce)][_0x571734(0x2b1)]*=-0x1;},Game_BattlerBase[_0x15f67a(0x38d)][_0x15f67a(0x35d)]=function(){const _0x28ad60=_0x15f67a,_0x143e20=VisuMZ['DragonbonesUnion'][_0x28ad60(0x1f3)]['Battler'],_0x2075ba=(this[_0x28ad60(0x2d7)]()?this[_0x28ad60(0x3bd)]():this[_0x28ad60(0x3d6)]())[_0x28ad60(0x33e)],_0x1567a5=this[_0x28ad60(0x22d)]();_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:BATTLER|SKIN|NAME):[ ]*(.*)>/i)&&(_0x1567a5[_0x28ad60(0x2b9)]=String(RegExp['$1'])[_0x28ad60(0x34f)]());_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER):[ ]*(.*)>/i)&&(_0x1567a5['battler']=String(RegExp['$1'])[_0x28ad60(0x34f)]());if(_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALE:[ ](.*),[ ](.*)>/i)){if(_0x28ad60(0x2bf)!=='fDBrg')this['battler']()[_0x28ad60(0x262)]();else{_0x1567a5[_0x28ad60(0x2b1)]=Number(RegExp['$1']),_0x1567a5['scaleY']=Number(RegExp['$2']);if(_0x143e20['FlipActors']&&this[_0x28ad60(0x2d7)]())_0x1567a5['scaleX']*=-0x1;if(_0x143e20[_0x28ad60(0x295)]&&this['isEnemy']())_0x1567a5[_0x28ad60(0x2b1)]*=-0x1;}}if(_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:SCALEX|SCALE X):[ ](.*)>/i)){if(_0x28ad60(0x21b)===_0x28ad60(0x2ea))this['_dragonbonesSpriteData']=_0x33ac89['dragonbonesSpriteData']();else{_0x1567a5[_0x28ad60(0x2b1)]=Number(RegExp['$1']);if(_0x143e20[_0x28ad60(0x30e)]&&this['isActor']())_0x1567a5[_0x28ad60(0x2b1)]*=-0x1;if(_0x143e20[_0x28ad60(0x295)]&&this[_0x28ad60(0x35e)]())_0x1567a5[_0x28ad60(0x2b1)]*=-0x1;}}_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SCALEY:[ ](.*)>/i)&&(_0x1567a5[_0x28ad60(0x2b8)]=Number(RegExp['$1']));_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x1567a5[_0x28ad60(0x2ae)]=Number(RegExp['$1']),_0x1567a5[_0x28ad60(0x326)]=Number(RegExp['$2']));_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0x1567a5[_0x28ad60(0x2ae)]=Number(RegExp['$1']));_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)&&(_0x1567a5[_0x28ad60(0x326)]=Number(RegExp['$1']));_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0x1567a5['timeScale']=Number(RegExp['$1']));_0x2075ba['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]SIZE:[ ](.*),[ ](.*)>/i)&&(_0x1567a5['width']=Number(RegExp['$1']),_0x1567a5[_0x28ad60(0x27f)]=Number(RegExp['$2']));_0x2075ba['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]WIDTH:[ ](.*)>/i)&&(_0x1567a5[_0x28ad60(0x237)]=Number(RegExp['$1']));_0x2075ba['match'](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ]HEIGHT:[ ](.*)>/i)&&(_0x28ad60(0x306)!==_0x28ad60(0x361)?_0x1567a5[_0x28ad60(0x27f)]=Number(RegExp['$1']):_0x26a938*=_0x353db5['dashRate']);const _0x56374=_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/gi);if(_0x56374)for(const _0x265ec0 of _0x56374){if(_0x28ad60(0x1fd)!==_0x28ad60(0x362)){_0x265ec0[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER)[ ](?:ANI|MOTION)[ ](.*):[ ](.*)>/i);const _0x34780f=String(RegExp['$1'])['toLowerCase']()[_0x28ad60(0x34f)](),_0xa07e26=String(RegExp['$2'])['trim']();_0x1567a5[_0x28ad60(0x35b)][_0x34780f]=_0xa07e26;}else this[_0x28ad60(0x386)]&&(this[_0x28ad60(0x336)](this[_0x28ad60(0x386)]),this['_dragonbones'][_0x28ad60(0x301)](),this[_0x28ad60(0x386)]=null,this[_0x28ad60(0x2bb)]='',this[_0x28ad60(0x252)]='');}if(_0x2075ba[_0x28ad60(0x2c7)](/<(?:DB|DRAGONBONE|DRAGONBONES|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/(?:DB|DRAGONBONE|DRAGONBONES BATTLER) (?:SETTINGS|SETTING)>/i)){if(_0x28ad60(0x2c1)==='KGnWA')this['playDragonbonesMotion'](_0x28ad60(0x2a2));else{const _0x32fb58=String(RegExp['$1']);if(_0x32fb58[_0x28ad60(0x2c7)](/(?:BATTLER|SKIN|NAME|FILENAME):[ ]*(.*)/i)){if(_0x28ad60(0x23b)!==_0x28ad60(0x23b)){const _0x197d53=this[_0x28ad60(0x384)]['dragonbonesSpriteData']();if(this[_0x28ad60(0x2bb)]===_0x197d53[_0x28ad60(0x2f5)])return;this[_0x28ad60(0x29a)](),this[_0x28ad60(0x2bb)]=_0x197d53[_0x28ad60(0x2f5)],_0x4ef7ce['loadArmature'](_0x197d53[_0x28ad60(0x2f5)],this[_0x28ad60(0x293)][_0x28ad60(0x368)](this));}else _0x1567a5[_0x28ad60(0x2b9)]=String(RegExp['$1'])[_0x28ad60(0x34f)]();}if(_0x32fb58[_0x28ad60(0x2c7)](/SCALE:[ ](.*),[ ](.*)/i)){_0x1567a5[_0x28ad60(0x2b1)]=Number(RegExp['$1']),_0x1567a5[_0x28ad60(0x2b8)]=Number(RegExp['$2']);if(_0x143e20[_0x28ad60(0x30e)]&&this[_0x28ad60(0x2d7)]())_0x1567a5[_0x28ad60(0x2b1)]*=-0x1;if(_0x143e20[_0x28ad60(0x295)]&&this[_0x28ad60(0x35e)]())_0x1567a5['scaleX']*=-0x1;}if(_0x32fb58[_0x28ad60(0x2c7)](/(?:SCALEX|SCALE X):[ ](.*)/i)){_0x1567a5['scaleX']=Number(RegExp['$1']);if(_0x143e20[_0x28ad60(0x30e)]&&this[_0x28ad60(0x2d7)]())_0x1567a5[_0x28ad60(0x2b1)]*=-0x1;if(_0x143e20[_0x28ad60(0x295)]&&this['isEnemy']())_0x1567a5[_0x28ad60(0x2b1)]*=-0x1;}_0x32fb58[_0x28ad60(0x2c7)](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x1567a5['scaleY']=Number(RegExp['$1']));_0x32fb58[_0x28ad60(0x2c7)](/OFFSET:[ ](.*),[ ](.*)/i)&&(_0x1567a5[_0x28ad60(0x2ae)]=Number(RegExp['$1']),_0x1567a5['offsetY']=Number(RegExp['$2']));if(_0x32fb58['match'](/(?:OFFSETX|OFFSET X):[ ](.*)/i)){if('UAgVL'!==_0x28ad60(0x236))_0x1567a5[_0x28ad60(0x2ae)]=Number(RegExp['$1']);else{if(this[_0x28ad60(0x395)]!==_0x52608d)return this[_0x28ad60(0x395)];return this[_0x28ad60(0x28c)](),this[_0x28ad60(0x395)];}}_0x32fb58[_0x28ad60(0x2c7)](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)&&(_0x1567a5[_0x28ad60(0x326)]=Number(RegExp['$1']));_0x32fb58[_0x28ad60(0x2c7)](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x28ad60(0x381)===_0x28ad60(0x381)?_0x1567a5[_0x28ad60(0x2f1)]=Number(RegExp['$1']):(_0x388d02[_0x28ad60(0x215)][_0x28ad60(0x28e)][_0x28ad60(0x347)](this),this[_0x28ad60(0x28c)]()));if(_0x32fb58['match'](/SIZE:[ ](.*),[ ](.*)/i)){if(_0x28ad60(0x3c6)!==_0x28ad60(0x2ab))_0x1567a5[_0x28ad60(0x237)]=Number(RegExp['$1']),_0x1567a5[_0x28ad60(0x27f)]=Number(RegExp['$2']);else{_0x39d89e[_0x28ad60(0x38d)][_0x28ad60(0x35d)][_0x28ad60(0x347)](this);const _0x2ee4d3=this[_0x28ad60(0x3bd)]()[_0x28ad60(0x33e)];_0x277225[_0x28ad60(0x38d)][_0x28ad60(0x2b6)]['call'](this,_0x2ee4d3);}}_0x32fb58['match'](/WIDTH:[ ](.*)/i)&&(_0x1567a5[_0x28ad60(0x237)]=Number(RegExp['$1']));_0x32fb58[_0x28ad60(0x2c7)](/HEIGHT:[ ](.*)/i)&&(_0x1567a5[_0x28ad60(0x27f)]=Number(RegExp['$1']));const _0x256446=_0x32fb58[_0x28ad60(0x2c7)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/gi);if(_0x256446)for(const _0x8bbe95 of _0x256446){_0x8bbe95[_0x28ad60(0x2c7)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/i);const _0x541059=String(RegExp['$1'])[_0x28ad60(0x3a5)]()[_0x28ad60(0x34f)](),_0x486c8c=String(RegExp['$2'])['trim']();_0x1567a5[_0x28ad60(0x35b)][_0x541059]=_0x486c8c;}}}},Game_BattlerBase[_0x15f67a(0x38d)][_0x15f67a(0x22d)]=function(){const _0x857285=_0x15f67a;if(this[_0x857285(0x3ce)]!==undefined)return this[_0x857285(0x3ce)];return this[_0x857285(0x28c)](),this[_0x857285(0x35d)](),this['_dragonbonesBattlerData'];},Game_BattlerBase['prototype'][_0x15f67a(0x341)]=function(){const _0x5d486a=_0x15f67a;return this[_0x5d486a(0x2b9)]()&&this['dragonbonesData']()['battler']!=='';},VisuMZ[_0x15f67a(0x215)]['Game_Battler_requestMotion']=Game_Battler['prototype']['requestMotion'],Game_Battler[_0x15f67a(0x38d)]['requestMotion']=function(_0x1c272b){const _0x21deb6=_0x15f67a;VisuMZ[_0x21deb6(0x215)]['Game_Battler_requestMotion'][_0x21deb6(0x347)](this,_0x1c272b),this[_0x21deb6(0x341)]()&&this[_0x21deb6(0x2b9)]()[_0x21deb6(0x1ec)](_0x1c272b);},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x1ee)]=Game_Battler['prototype'][_0x15f67a(0x334)],Game_Battler[_0x15f67a(0x38d)][_0x15f67a(0x334)]=function(){const _0x36e50a=_0x15f67a;VisuMZ[_0x36e50a(0x215)][_0x36e50a(0x1ee)][_0x36e50a(0x347)](this);if(this[_0x36e50a(0x341)]()){if(_0x36e50a(0x284)!==_0x36e50a(0x284)){_0x5acb63[_0x36e50a(0x2b1)]=_0x2f16d2(_0x45d9c6['$1']);if(_0x462b2c[_0x36e50a(0x30e)]&&this['isActor']())_0x2184b1['scaleX']*=-0x1;if(_0x51a3ca[_0x36e50a(0x295)]&&this['isEnemy']())_0x57ed3e[_0x36e50a(0x2b1)]*=-0x1;}else this[_0x36e50a(0x2b9)]()[_0x36e50a(0x262)]();}},Game_Battler[_0x15f67a(0x38d)][_0x15f67a(0x393)]=function(_0x266443){const _0x3f8105=_0x15f67a;if(!this[_0x3f8105(0x341)]())return;this[_0x3f8105(0x2b9)]()[_0x3f8105(0x1fe)](_0x266443),[_0x3f8105(0x3c3),'idle']['includes'](_0x266443)?this[_0x3f8105(0x359)]=![]:this[_0x3f8105(0x359)]=!![];},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x2e4)]=Game_Battler['prototype'][_0x15f67a(0x3cf)],Game_Battler['prototype']['performActionEndMembers']=function(){const _0x127f4d=_0x15f67a;this['hasDragonbonesBattler']()&&(this[_0x127f4d(0x359)]=![]),VisuMZ[_0x127f4d(0x215)][_0x127f4d(0x2e4)][_0x127f4d(0x347)](this);},Game_Battler['prototype'][_0x15f67a(0x315)]=function(){const _0x4d9d8a=_0x15f67a;if(!this[_0x4d9d8a(0x341)]())return;this[_0x4d9d8a(0x382)]('damage');},Game_Battler['prototype'][_0x15f67a(0x277)]=function(){const _0x50fd1e=_0x15f67a;if(!this['hasDragonbonesBattler']())return;this['requestMotion'](_0x50fd1e(0x2a2));},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x375)]=Game_Actor['prototype'][_0x15f67a(0x2bc)],Game_Actor[_0x15f67a(0x38d)]['setup']=function(_0x2a43fb){const _0x3a9943=_0x15f67a;VisuMZ[_0x3a9943(0x215)][_0x3a9943(0x375)][_0x3a9943(0x347)](this,_0x2a43fb),this['initDragonbonesData'](),this[_0x3a9943(0x35d)]();},VisuMZ[_0x15f67a(0x215)]['Game_Actor_performAction']=Game_Actor[_0x15f67a(0x38d)][_0x15f67a(0x396)],Game_Actor[_0x15f67a(0x38d)][_0x15f67a(0x396)]=function(_0xdc8443){const _0x508c49=_0x15f67a;this['requestDragonbonesAnimation']('attack'),VisuMZ[_0x508c49(0x215)]['Game_Actor_performAction'][_0x508c49(0x347)](this,_0xdc8443);},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x31a)]=Game_Actor[_0x15f67a(0x38d)][_0x15f67a(0x27b)],Game_Actor[_0x15f67a(0x38d)][_0x15f67a(0x27b)]=function(){const _0x72a40e=_0x15f67a;this[_0x72a40e(0x393)]('attack'),VisuMZ[_0x72a40e(0x215)][_0x72a40e(0x31a)][_0x72a40e(0x347)](this);},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x30b)]=Game_Actor[_0x15f67a(0x38d)][_0x15f67a(0x321)],Game_Actor[_0x15f67a(0x38d)][_0x15f67a(0x321)]=function(){const _0x25d1ef=_0x15f67a;VisuMZ[_0x25d1ef(0x215)][_0x25d1ef(0x30b)][_0x25d1ef(0x347)](this),this[_0x25d1ef(0x315)]();},VisuMZ['DragonbonesUnion'][_0x15f67a(0x309)]=Game_Actor['prototype'][_0x15f67a(0x25a)],Game_Actor[_0x15f67a(0x38d)][_0x15f67a(0x25a)]=function(){const _0x403a97=_0x15f67a;VisuMZ[_0x403a97(0x215)][_0x403a97(0x309)]['call'](this),this['performCollapseDragonbonesUnion']();},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x351)]=Game_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x2bc)],Game_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x2bc)]=function(_0x8850d,_0x4de8e3,_0x25ad5a){const _0x50a9b7=_0x15f67a;VisuMZ[_0x50a9b7(0x215)][_0x50a9b7(0x351)][_0x50a9b7(0x347)](this,_0x8850d,_0x4de8e3,_0x25ad5a),this[_0x50a9b7(0x28c)](),this[_0x50a9b7(0x35d)]();},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x3bb)]=Game_Enemy[_0x15f67a(0x38d)]['transform'],Game_Enemy['prototype']['transform']=function(_0x2e13c9){const _0x69064c=_0x15f67a,_0x150d0f=this['_enemyId'];VisuMZ['DragonbonesUnion'][_0x69064c(0x3bb)][_0x69064c(0x347)](this,_0x2e13c9),this[_0x69064c(0x2fd)]!==_0x150d0f&&(this[_0x69064c(0x28c)](),this[_0x69064c(0x35d)]());},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x3a1)]=Game_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x396)],Game_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x396)]=function(_0x5259b5){const _0x960a77=_0x15f67a;VisuMZ[_0x960a77(0x215)][_0x960a77(0x3a1)][_0x960a77(0x347)](this,_0x5259b5),this[_0x960a77(0x292)](_0x5259b5);},Game_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x292)]=function(_0x5b9485){const _0x1bc06e=_0x15f67a;if(!this['hasDragonbonesBattler']())return;this[_0x1bc06e(0x393)]('attack');if(Imported['VisuMZ_1_BattleCore'])return this[_0x1bc06e(0x272)](_0x5b9485);if(_0x5b9485['isAttack']()){if(_0x1bc06e(0x374)!==_0x1bc06e(0x33b))this['requestDragonbonesAnimation'](_0x1bc06e(0x38b));else{const _0x1c28f3=this['actor']();!_0x1c28f3?this[_0x1bc06e(0x28c)]():this[_0x1bc06e(0x2cc)]=_0x1c28f3['dragonbonesSpriteData']();}}else{if(_0x5b9485['isGuard']())this['requestMotion'](_0x1bc06e(0x26f));else{if(_0x5b9485['isMagicSkill']())this['requestMotion']('spell');else{if(_0x5b9485[_0x1bc06e(0x249)]())_0x5b9485[_0x1bc06e(0x2d4)]()[_0x1bc06e(0x2a5)][_0x1bc06e(0x2e0)]>0x0?this[_0x1bc06e(0x393)](_0x1bc06e(0x38b)):this[_0x1bc06e(0x382)](_0x1bc06e(0x28f));else _0x5b9485[_0x1bc06e(0x23e)]()&&this[_0x1bc06e(0x382)]('item');}}}},VisuMZ['DragonbonesUnion'][_0x15f67a(0x2ee)]=Game_Enemy[_0x15f67a(0x38d)]['performDamage'],Game_Enemy[_0x15f67a(0x38d)]['performDamage']=function(){const _0x13da9d=_0x15f67a;VisuMZ[_0x13da9d(0x215)][_0x13da9d(0x2ee)]['call'](this),this[_0x13da9d(0x315)]();},VisuMZ[_0x15f67a(0x215)]['Game_Enemy_performCollapse']=Game_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x25a)],Game_Enemy['prototype'][_0x15f67a(0x25a)]=function(){const _0x31badb=_0x15f67a;VisuMZ['DragonbonesUnion'][_0x31badb(0x275)][_0x31badb(0x347)](this),this[_0x31badb(0x277)]();},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x2bd)]=Scene_Battle['prototype']['terminate'],Scene_Battle['prototype'][_0x15f67a(0x338)]=function(){const _0x548329=_0x15f67a;this[_0x548329(0x346)][_0x548329(0x29a)](),VisuMZ['DragonbonesUnion'][_0x548329(0x2bd)][_0x548329(0x347)](this);},Sprite_Battler[_0x15f67a(0x38d)][_0x15f67a(0x2e3)]=function(){const _0x46001f=_0x15f67a;this[_0x46001f(0x386)]=null,this[_0x46001f(0x1f0)]='';},Sprite_Battler[_0x15f67a(0x38d)][_0x15f67a(0x2b2)]=function(){const _0x4b5195=_0x15f67a;this[_0x4b5195(0x29a)]();const _0x8f7107=this[_0x4b5195(0x244)][_0x4b5195(0x22d)]();this['_dragonbonesName']=_0x8f7107[_0x4b5195(0x2b9)],armatureName=_0x8f7107[_0x4b5195(0x2b9)],DragonbonesManager[_0x4b5195(0x226)](armatureName,this[_0x4b5195(0x293)]['bind'](this)),this[_0x4b5195(0x3c9)]=new Bitmap(_0x8f7107[_0x4b5195(0x237)],_0x8f7107[_0x4b5195(0x27f)]),this[_0x4b5195(0x2cb)]&&(this[_0x4b5195(0x2cb)][_0x4b5195(0x3c9)]=new Bitmap(_0x8f7107[_0x4b5195(0x237)],_0x8f7107[_0x4b5195(0x27f)]));},Sprite_Battler[_0x15f67a(0x38d)]['disposeDragonbones']=function(){const _0x3507ba=_0x15f67a;this['_dragonbones']&&(this[_0x3507ba(0x1ea)]&&this[_0x3507ba(0x1ea)]['removeChild'](this[_0x3507ba(0x386)]),this[_0x3507ba(0x336)](this[_0x3507ba(0x386)]),this[_0x3507ba(0x386)][_0x3507ba(0x301)](),delete this[_0x3507ba(0x386)],delete this[_0x3507ba(0x1f0)]);},Sprite_Battler['prototype'][_0x15f67a(0x293)]=function(){const _0x172567=_0x15f67a;if(!this[_0x172567(0x244)])return;const _0x3b4e67=this[_0x172567(0x244)][_0x172567(0x22d)]();this[_0x172567(0x386)]=DragonbonesManager['createArmature'](_0x3b4e67[_0x172567(0x2b9)]);!this[_0x172567(0x1ea)]&&(this[_0x172567(0x1ea)]=new Sprite(),this['_dragonbonesSpriteContainer'][_0x172567(0x259)](this['_dragonbones']));this['addChildAt'](this['_dragonbonesSpriteContainer'],0x0);this[_0x172567(0x21a)]&&(this[_0x172567(0x21a)](),this['_dragonbonesSpriteContainer']['addChild'](this[_0x172567(0x386)]));this[_0x172567(0x262)](),this[_0x172567(0x386)]['x']=_0x3b4e67['offsetX'],this['_dragonbones']['y']=_0x3b4e67[_0x172567(0x326)],this['_dragonbones'][_0x172567(0x35a)]['x']=_0x3b4e67[_0x172567(0x2b1)],this['_dragonbones'][_0x172567(0x35a)]['y']=_0x3b4e67[_0x172567(0x2b8)];if(this[_0x172567(0x244)]&&this[_0x172567(0x244)][_0x172567(0x3c7)]()){if('nonAd'===_0x172567(0x363))this[_0x172567(0x2ed)]=0x0;else return;}this[_0x172567(0x244)]&&this[_0x172567(0x244)][_0x172567(0x372)]()&&(this[_0x172567(0x1ec)]('dead'),this[_0x172567(0x367)](),this[_0x172567(0x244)][_0x172567(0x233)]()<0x3&&(_0x172567(0x2c6)!=='gOprF'?(this[_0x172567(0x1ea)]&&this['_dragonbonesSpriteContainer'][_0x172567(0x336)](this[_0x172567(0x386)]),this[_0x172567(0x336)](this[_0x172567(0x386)]),this[_0x172567(0x386)][_0x172567(0x301)](),delete this[_0x172567(0x386)],delete this[_0x172567(0x1f0)]):this[_0x172567(0x2ed)]=0x0));},Sprite[_0x15f67a(0x38d)][_0x15f67a(0x2f6)]=function(){const _0x303957=_0x15f67a;if(!this[_0x303957(0x24e)])return null;if(this['_dragonbones'])return this[_0x303957(0x386)];if(this[_0x303957(0x24e)][_0x303957(0x279)]){if(this!==this[_0x303957(0x24e)][_0x303957(0x279)])return null;return this[_0x303957(0x24e)]['_dragonbones'];}return null;},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x2a4)]=Sprite[_0x15f67a(0x38d)][_0x15f67a(0x21e)],Sprite[_0x15f67a(0x38d)]['_updateColorFilter']=function(){const _0x1ce454=_0x15f67a;VisuMZ[_0x1ce454(0x215)][_0x1ce454(0x2a4)]['call'](this),this[_0x1ce454(0x2f6)]()&&this['_updateDragonbonesChildrenColorFilter']();},Sprite[_0x15f67a(0x38d)][_0x15f67a(0x235)]=function(){const _0x154ae7=_0x15f67a,_0x4fd06b=this[_0x154ae7(0x2f6)]();if(!_0x4fd06b)return;for(const _0x342f39 of _0x4fd06b[_0x154ae7(0x2e9)]){if(_0x342f39[_0x154ae7(0x3ca)]!==0x0){_0x342f39[_0x154ae7(0x285)]&&(_0x342f39[_0x154ae7(0x21c)]=_0x342f39[_0x154ae7(0x21c)]||[],_0x342f39[_0x154ae7(0x21c)][_0x154ae7(0x2f7)](_0x342f39[_0x154ae7(0x285)]));continue;}_0x342f39[_0x154ae7(0x21c)]=_0x342f39[_0x154ae7(0x21c)]||[];if(!_0x342f39[_0x154ae7(0x285)]){if(_0x154ae7(0x3b1)===_0x154ae7(0x2a1)){const _0x148596=_0x3d1b02['DragonbonesUnion']['Settings'][_0x154ae7(0x39d)],_0x52665e=this[_0x154ae7(0x294)],_0x10b56c=_0x18939e[_0x154ae7(0x2ca)]['factory'];_0x10b56c[_0x154ae7(0x256)](_0x230ee8[_0x52665e+_0x148596['SkeKey']][_0x154ae7(0x265)]),_0x10b56c[_0x154ae7(0x32e)](_0x10ece6[_0x52665e+_0x148596[_0x154ae7(0x213)]][_0x154ae7(0x265)],_0x447316[_0x52665e+_0x148596[_0x154ae7(0x3aa)]]['texture']),this['loadNextArmature']();}else _0x342f39[_0x154ae7(0x285)]=new ColorFilter(),_0x342f39[_0x154ae7(0x285)]['blendMode']=_0x342f39['blendMode'],_0x342f39[_0x154ae7(0x21c)][_0x154ae7(0x204)](_0x342f39[_0x154ae7(0x285)]);}_0x342f39[_0x154ae7(0x285)]['setHue'](this[_0x154ae7(0x225)]),_0x342f39[_0x154ae7(0x285)][_0x154ae7(0x1f6)](this['_colorTone']);}},Sprite_Battler[_0x15f67a(0x38d)][_0x15f67a(0x1ec)]=function(_0x44d276){const _0x424f06=_0x15f67a;if(!this[_0x424f06(0x386)])return;if(_0x44d276===this[_0x424f06(0x320)]&&_0x44d276===_0x424f06(0x3c3))return;this[_0x424f06(0x320)]=_0x44d276;if(_0x44d276===_0x424f06(0x36e)){if(_0x424f06(0x2f9)!==_0x424f06(0x2a8)){if(this[_0x424f06(0x244)]['isDying']())_0x44d276=_0x424f06(0x32c);else{if(this['_battler'][_0x424f06(0x23f)]()||this[_0x424f06(0x244)][_0x424f06(0x335)]())'acfya'===_0x424f06(0x3b4)?_0x44d276=_0x424f06(0x26f):(this[_0x424f06(0x35c)]['removeChild'](this[_0x424f06(0x386)]),this['_dragonbones'][_0x424f06(0x301)](),this[_0x424f06(0x386)]=null,this[_0x424f06(0x2bb)]='',this[_0x424f06(0x252)]='');else{}}}else{if(!this[_0x424f06(0x386)])return;if(!this[_0x424f06(0x35c)])return;this[_0x424f06(0x35c)][_0x424f06(0x257)](this[_0x424f06(0x386)],0x0);}}const _0x2ca4a6=this[_0x424f06(0x244)][_0x424f06(0x22d)]();if(_0x2ca4a6[_0x424f06(0x35b)][_0x44d276]){const _0x10c8d4=_0x2ca4a6['motion'][_0x44d276];this[_0x424f06(0x1fe)](_0x10c8d4);}this[_0x424f06(0x21e)]();},Sprite_Battler[_0x15f67a(0x38d)][_0x15f67a(0x1fe)]=function(_0x3924d9){const _0x58750d=_0x15f67a;_0x3924d9=_0x3924d9[_0x58750d(0x3a5)]();if(!this[_0x58750d(0x386)])return;[_0x58750d(0x36e),_0x58750d(0x313)][_0x58750d(0x24c)](_0x3924d9)&&this[_0x58750d(0x244)]['isGuard']()&&(_0x3924d9=_0x58750d(0x26f));const _0x11b6ce=this['_dragonbones']['animation'];if(_0x11b6ce[_0x58750d(0x34c)][_0x3924d9]){const _0x575f2b=_0x11b6ce['lastAnimationName'],_0x5abf62=[_0x58750d(0x36e),'walk','wait',_0x58750d(0x273),_0x58750d(0x26f),_0x58750d(0x32c),'abnormal',_0x58750d(0x200),_0x58750d(0x2a2)];if(_0x575f2b===_0x3924d9&&_0x5abf62[_0x58750d(0x24c)](_0x3924d9))return;_0x11b6ce[_0x58750d(0x296)](_0x3924d9);}},Sprite_Battler[_0x15f67a(0x38d)][_0x15f67a(0x367)]=function(){const _0x23cac4=_0x15f67a;this[_0x23cac4(0x36b)](),this[_0x23cac4(0x280)](),this[_0x23cac4(0x397)](),this[_0x23cac4(0x1f2)]();},Sprite_Battler['prototype'][_0x15f67a(0x36b)]=function(){const _0x500a79=_0x15f67a;if(!this[_0x500a79(0x244)])return;const _0x23c35c=this['_battler'][_0x500a79(0x22d)]();this['_dragonbonesName']=_0x23c35c['battler'];},Sprite_Battler[_0x15f67a(0x38d)]['updateDragonbonesTimeScale']=function(){const _0x2f95f2=_0x15f67a;if(!this[_0x2f95f2(0x386)])return;let _0x3d80e1=this[_0x2f95f2(0x244)][_0x2f95f2(0x22d)]()[_0x2f95f2(0x2f1)];const _0x2f7edc=SceneManager['_scene'];Imported['VisuMZ_0_CoreEngine']&&_0x2f7edc[_0x2f95f2(0x238)]&&$gameTemp[_0x2f95f2(0x2fb)]&&(_0x3d80e1*=0x2);if(Imported['VisuMZ_1_OptionsCore']&&_0x2f7edc['_battleAniSpeedLooping']){if(_0x2f95f2(0x333)!==_0x2f95f2(0x333)){if(!_0x305b07)_0xd6bd5e=_0x11b956[_0x2f95f2(0x2af)];if(!_0x3aa44f)_0xc491ab=_0x2f95f2(0x3b9);if(_0x17f743[_0x6c3fdf]){const _0x11300d=_0x3be32a[_0x22b01a];_0x11300d&&(_0x17c867[_0x2f95f2(0x336)](_0x11300d),_0x11300d[_0x2f95f2(0x301)]());}this[_0x2f95f2(0x226)](_0x4bc4e7,_0x177176[_0x2f95f2(0x27c)][_0x2f95f2(0x368)](this,_0x5a7c1f,_0x14e58c,_0x3411fb,_0x47285f));}else _0x3d80e1*=(ConfigManager[_0x2f95f2(0x311)]||0x0)+0x1;}this[_0x2f95f2(0x386)]['animation'][_0x2f95f2(0x2f1)]=_0x3d80e1;},Sprite_Battler['prototype'][_0x15f67a(0x397)]=function(){const _0x1ddefd=_0x15f67a;if(!this[_0x1ddefd(0x386)])return;const _0x5e9734=this[_0x1ddefd(0x386)]['animation'];if(_0x5e9734['isCompleted']){if(_0x1ddefd(0x245)!=='nMRJc')_0x5b22e8[_0x1ddefd(0x215)][_0x1ddefd(0x275)][_0x1ddefd(0x347)](this),this[_0x1ddefd(0x277)]();else{const _0x431b76=_0x5e9734[_0x1ddefd(0x1e4)];let _0x59c628=VisuMZ[_0x1ddefd(0x215)]['Settings'][_0x1ddefd(0x319)][_0x1ddefd(0x219)];_0x59c628===undefined&&(_0x1ddefd(0x251)!==_0x1ddefd(0x344)?_0x59c628=[_0x1ddefd(0x2a2),_0x1ddefd(0x322),'victory']:_0x38edf4[_0x1ddefd(0x27f)]=_0x1fed72(_0x24b748['$1'])),!_0x59c628[_0x1ddefd(0x24c)](_0x431b76)&&this[_0x1ddefd(0x262)]();}}},Sprite_Battler[_0x15f67a(0x38d)][_0x15f67a(0x1f2)]=function(){return;},Sprite_Battler['prototype']['playDragonbonesIdleAnimation']=function(){const _0x3b8895=_0x15f67a;if(!this['_dragonbones'])return;const _0x499747=this[_0x3b8895(0x244)];if(!_0x499747)return;if(_0x499747[_0x3b8895(0x35e)]()){const _0x37aaeb=this[_0x3b8895(0x386)][_0x3b8895(0x37c)];if(_0x37aaeb&&!_0x37aaeb[_0x3b8895(0x29d)])return;}if(this[_0x3b8895(0x27d)]()){const _0x38477b=this['_dragonbones'][_0x3b8895(0x37c)];if(_0x38477b&&!_0x38477b[_0x3b8895(0x29d)])return;}if(_0x499747[_0x3b8895(0x299)]()){if(_0x3b8895(0x282)===_0x3b8895(0x282))this[_0x3b8895(0x1fe)](_0x3b8895(0x36e));else{if(!this['_dragonbones'])return;const _0x3a0cba=this[_0x3b8895(0x386)]['animation'],_0x3b3a74=this[_0x3b8895(0x252)][_0x3b8895(0x3a5)]()['trim']();if(_0x3a0cba[_0x3b8895(0x34c)][_0x3b3a74]){if(_0x3a0cba['lastAnimationName']===_0x3b3a74&&_0x3a0cba[_0x3b8895(0x34c)][_0x3b3a74][_0x3b8895(0x2d0)]<=0x0)return;_0x3a0cba[_0x3b8895(0x296)](_0x3b3a74);}}}const _0x38ae9f=_0x499747[_0x3b8895(0x2cf)]();if(_0x499747[_0x3b8895(0x2fc)]()||_0x499747[_0x3b8895(0x385)]()){if(_0x3b8895(0x23d)!==_0x3b8895(0x369))this[_0x3b8895(0x1ec)]('idle');else return;}else{if(_0x38ae9f===0x3)'CjkUN'===_0x3b8895(0x2df)?this[_0x3b8895(0x1ec)](_0x3b8895(0x2a2)):_0x3ac425[_0x3b8895(0x37f)]=!![];else{if(_0x38ae9f===0x2)'KutKF'!==_0x3b8895(0x2a3)?this[_0x3b8895(0x1ec)]('sleep'):(this[_0x3b8895(0x2ac)]=![],_0x4838de[_0x3b8895(0x215)][_0x3b8895(0x3c0)]['call'](this,_0x27b8d5));else{if(_0x499747[_0x3b8895(0x2d7)]()&&BattleManager[_0x3b8895(0x254)]())_0x3b8895(0x33f)===_0x3b8895(0x33f)?this[_0x3b8895(0x1ec)](_0x3b8895(0x322)):this[_0x3b8895(0x241)]()?this['setDragonbonesHue'](_0x2e7263):_0x5cea56[_0x3b8895(0x215)][_0x3b8895(0x32a)][_0x3b8895(0x347)](this,_0x34406b);else{if(_0x499747[_0x3b8895(0x27e)]())this['playDragonbonesMotion']('chant');else{if(_0x499747[_0x3b8895(0x23f)]()||_0x499747[_0x3b8895(0x335)]())this[_0x3b8895(0x1ec)](_0x3b8895(0x26f));else{if(_0x38ae9f===0x1)_0x3b8895(0x308)===_0x3b8895(0x310)?_0x1648bf[_0x3b8895(0x203)]=_0x7431c8(_0x5f3dbd['$1']):this[_0x3b8895(0x1ec)](_0x3b8895(0x390));else{if(_0x499747[_0x3b8895(0x307)]())_0x3b8895(0x3d2)==='Xkddo'?this[_0x3b8895(0x324)]--:this['playDragonbonesMotion'](_0x3b8895(0x36e));else _0x499747['isUndecided']()?this[_0x3b8895(0x1ec)](_0x3b8895(0x36e)):_0x3b8895(0x3ba)!==_0x3b8895(0x3ba)?(_0x29181e[_0x3b8895(0x215)][_0x3b8895(0x30b)]['call'](this),this[_0x3b8895(0x315)]()):this[_0x3b8895(0x1ec)]('idle');}}}}}}}},Sprite_Battler[_0x15f67a(0x38d)][_0x15f67a(0x27d)]=function(){const _0x113398=_0x15f67a;if(!this[_0x113398(0x244)][_0x113398(0x2d7)]())return![];if(this[_0x113398(0x244)]===BattleManager['_subject'])return!![];if(this['_battler']===BattleManager[_0x113398(0x3bd)]()&&this[_0x113398(0x244)][_0x113398(0x2fc)]())return!![];if(this[_0x113398(0x244)][_0x113398(0x359)])return!![];if(BattleManager['_target']===this[_0x113398(0x244)])return!![];if(BattleManager[_0x113398(0x281)][_0x113398(0x24c)](this[_0x113398(0x244)]))return!![];return![];},VisuMZ[_0x15f67a(0x215)]['Sprite_Enemy_setHue']=Sprite_Enemy['prototype'][_0x15f67a(0x2e7)],Sprite_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x2e7)]=function(_0x4d5bbf){const _0x3023b6=_0x15f67a;this[_0x3023b6(0x241)]()?this['setDragonbonesHue'](_0x4d5bbf):VisuMZ[_0x3023b6(0x215)][_0x3023b6(0x32a)][_0x3023b6(0x347)](this,_0x4d5bbf);},Sprite_Enemy[_0x15f67a(0x38d)]['isDragonbonesHueAffected']=function(){const _0x3e75e1=_0x15f67a;if(!this[_0x3e75e1(0x244)])return![];if(!this['_dragonbones'])return![];const _0x16ef31=this[_0x3e75e1(0x244)]['enemy']()[_0x3e75e1(0x33e)]||'';if(_0x16ef31[_0x3e75e1(0x2c7)](/<DRAGONBONES HUE AFFECTED>/i)){if(_0x3e75e1(0x391)===_0x3e75e1(0x391))return!![];else{if(!_0x2b0c60)return;if(_0x391728[_0x3e75e1(0x2af)][_0x3e75e1(0x268)]!==_0x3ee4bf)return;_0x250382[_0x3e75e1(0x1fa)](_0x3c4db7,_0x356d48);const _0x4bd912=_0x25d7e3[_0x3e75e1(0x33c)]()[_0x3e75e1(0x3ae)](_0x5c7d64[_0x3e75e1(0x271)]);if(!_0x4bd912)return;_0x4bd912[_0x3e75e1(0x240)]='';}}else{if(_0x16ef31[_0x3e75e1(0x2c7)](/<DRAGONBONES NO HUE>/i)){if('PTqtU'===_0x3e75e1(0x38c))return![];else this[_0x3e75e1(0x1ec)](_0x104f9b);}}return VisuMZ[_0x3e75e1(0x215)][_0x3e75e1(0x1f3)][_0x3e75e1(0x319)]['HueAffected'];},Sprite_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x31e)]=function(_0x5ab11d){const _0x1821f1=_0x15f67a;this['_dragonbonesSpriteContainer'][_0x1821f1(0x225)]!==_0x5ab11d&&this['_dragonbonesSpriteContainer'][_0x1821f1(0x2e7)](_0x5ab11d);},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x1f8)]=Sprite_Actor[_0x15f67a(0x38d)]['initMembers'],Sprite_Actor[_0x15f67a(0x38d)][_0x15f67a(0x25b)]=function(){const _0x1e0a27=_0x15f67a;VisuMZ[_0x1e0a27(0x215)][_0x1e0a27(0x1f8)][_0x1e0a27(0x347)](this),this[_0x1e0a27(0x2e3)]();},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x21f)]=Sprite_Actor['prototype']['update'],Sprite_Actor['prototype'][_0x15f67a(0x2b4)]=function(){const _0x141bd6=_0x15f67a;VisuMZ[_0x141bd6(0x215)][_0x141bd6(0x21f)][_0x141bd6(0x347)](this),!this[_0x141bd6(0x244)]&&this[_0x141bd6(0x386)]&&this['disposeDragonbones']();},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x3a7)]=Sprite_Actor[_0x15f67a(0x38d)]['updateBitmap'],Sprite_Actor['prototype'][_0x15f67a(0x383)]=function(){const _0x42fb73=_0x15f67a,_0x2d1d05=this[_0x42fb73(0x244)];_0x2d1d05[_0x42fb73(0x341)]()?(Sprite_Battler[_0x42fb73(0x38d)][_0x42fb73(0x383)]['call'](this),this[_0x42fb73(0x1f0)]!==_0x2d1d05[_0x42fb73(0x22d)]()['battler']&&(_0x42fb73(0x317)!=='EFwtw'?this[_0x42fb73(0x2b2)]():this[_0x42fb73(0x1ea)][_0x42fb73(0x2e7)](_0x5c52c4)),this[_0x42fb73(0x367)]()):(VisuMZ[_0x42fb73(0x215)][_0x42fb73(0x3a7)][_0x42fb73(0x347)](this),this[_0x42fb73(0x386)]&&this[_0x42fb73(0x29a)]());},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x312)]=Sprite_Actor[_0x15f67a(0x38d)][_0x15f67a(0x2d6)],Sprite_Actor[_0x15f67a(0x38d)][_0x15f67a(0x2d6)]=function(_0x261a45){const _0xcd09c8=_0x15f67a;VisuMZ[_0xcd09c8(0x215)][_0xcd09c8(0x312)]['call'](this,_0x261a45),this[_0xcd09c8(0x268)][_0xcd09c8(0x2b5)]===_0xcd09c8(0x1f9)&&this[_0xcd09c8(0x1ec)](_0x261a45);},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x305)]=Sprite_Actor['prototype'][_0x15f67a(0x261)],Sprite_Actor['prototype'][_0x15f67a(0x261)]=function(){const _0x1f47a6=_0x15f67a;this[_0x1f47a6(0x20f)](),VisuMZ['DragonbonesUnion']['Sprite_Actor_updateShadow'][_0x1f47a6(0x347)](this),this[_0x1f47a6(0x244)]&&this[_0x1f47a6(0x244)][_0x1f47a6(0x341)]()&&('WQTUl'!==_0x1f47a6(0x2c8)?_0x4dded8=_0x1f47a6(0x26f):this[_0x1f47a6(0x207)][_0x1f47a6(0x2de)]=![]);},Sprite_Actor[_0x15f67a(0x38d)][_0x15f67a(0x20f)]=function(){const _0xb954ef=_0x15f67a;if(this[_0xb954ef(0x268)]!==Sprite_Actor)return;let _0x201cef=!![];if(this[_0xb954ef(0x244)]&&this[_0xb954ef(0x244)][_0xb954ef(0x341)]())_0x201cef=![];this[_0xb954ef(0x2cb)][_0xb954ef(0x2de)]=_0x201cef,this[_0xb954ef(0x24d)][_0xb954ef(0x2de)]=_0x201cef,this[_0xb954ef(0x2fe)]['visible']=_0x201cef;},VisuMZ[_0x15f67a(0x215)]['Sprite_Actor_updateFrame']=Sprite_Actor[_0x15f67a(0x38d)]['updateFrame'],Sprite_Actor['prototype'][_0x15f67a(0x366)]=function(){const _0x419826=_0x15f67a;this[_0x419826(0x244)]&&this[_0x419826(0x244)][_0x419826(0x341)]()?this[_0x419826(0x27a)]():_0x419826(0x267)===_0x419826(0x267)?VisuMZ['DragonbonesUnion'][_0x419826(0x20a)][_0x419826(0x347)](this):(_0x9a3e0a['DragonbonesUnion'][_0x419826(0x2ee)][_0x419826(0x347)](this),this['performDamageDragonbonesUnion']());},Sprite_Actor[_0x15f67a(0x38d)]['updateFrameDragonbonesUnion']=function(){const _0x2acc1e=_0x15f67a,_0x650387=this['_mainSprite'][_0x2acc1e(0x3c9)];if(_0x650387){if(_0x2acc1e(0x2fa)===_0x2acc1e(0x2fa)){const _0x555df6=_0x650387[_0x2acc1e(0x237)],_0x5af99e=_0x650387[_0x2acc1e(0x27f)];this[_0x2acc1e(0x2cb)][_0x2acc1e(0x242)](0x0,0x0,_0x555df6,_0x5af99e),this[_0x2acc1e(0x242)](0x0,0x0,_0x555df6,_0x5af99e);}else _0x14484e['flipLeft']=!![];}},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x2e2)]=Sprite_Enemy[_0x15f67a(0x38d)]['initMembers'],Sprite_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x25b)]=function(){const _0x41fd61=_0x15f67a;VisuMZ[_0x41fd61(0x215)][_0x41fd61(0x2e2)][_0x41fd61(0x347)](this),this[_0x41fd61(0x2e3)]();},VisuMZ['DragonbonesUnion'][_0x15f67a(0x201)]=Sprite_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x209)],Sprite_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x209)]=function(_0x52e6ab){const _0x577154=_0x15f67a;this[_0x577154(0x29a)](),VisuMZ[_0x577154(0x215)][_0x577154(0x201)][_0x577154(0x347)](this,_0x52e6ab);if(_0x52e6ab[_0x577154(0x3c7)]())this['opacity']=0x0;},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x288)]=Sprite_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x383)],Sprite_Enemy[_0x15f67a(0x38d)]['updateBitmap']=function(){const _0x2dae12=_0x15f67a,_0xf637b4=this[_0x2dae12(0x244)];if(_0xf637b4[_0x2dae12(0x341)]()){if('EAtLq'===_0x2dae12(0x224)){const _0x29dade=_0x3e132d(_0x10c6ba['$1']);_0x29dade!==_0x451bc1[_0x155d1d][_0x2dae12(0x3d8)]&&(_0x33f915(_0x2dae12(0x357)[_0x2dae12(0x3a3)](_0x29128a,_0x29dade)),_0x4ee95b['exit']());}else{Sprite_Battler[_0x2dae12(0x38d)][_0x2dae12(0x383)]['call'](this);if(this[_0x2dae12(0x1f0)]!==_0xf637b4['dragonbonesData']()['battler']){if(_0x2dae12(0x23c)===_0x2dae12(0x23c))this[_0x2dae12(0x2b2)]();else{const _0x589ca1=_0x8e21ea[_0x2dae12(0x1ff)]>='5.3.12';this[_0x2dae12(0x342)]['push'](_0x43b8e8),this[_0x2dae12(0x294)]=_0x2aa8ef;const _0x425a63=_0x517d66['DragonbonesUnion']['Settings'][_0x2dae12(0x39d)],_0x4f7917=_0x1a4cf9[_0x2dae12(0x253)],_0x21a3e3=_0x10eb88[_0x2dae12(0x38a)]['shared'];_0x21a3e3[_0x2dae12(0x3ab)](_0x170c4f+_0x425a63['SkeKey'],_0x4f7917+_0x2d1aba+_0x425a63[_0x2dae12(0x32f)]),_0x21a3e3[_0x2dae12(0x3ab)](_0x2cf7a2+_0x425a63[_0x2dae12(0x213)],_0x4f7917+_0x166a47+_0x425a63['TexExt']),_0x21a3e3[_0x2dae12(0x3ab)](_0x243053+_0x425a63[_0x2dae12(0x3aa)],_0x4f7917+_0x4d047b+_0x425a63[_0x2dae12(0x234)]),_0x589ca1?(_0x21a3e3['load'](_0x21a3e3),_0x21a3e3[_0x2dae12(0x258)]['once'](()=>_0x16a132[_0x2dae12(0x2a7)](_0x21a3e3,_0x21a3e3[_0x2dae12(0x31b)]))):(_0x21a3e3[_0x2dae12(0x388)]('complete',_0x1a3b60[_0x2dae12(0x2a7)],this),_0x21a3e3[_0x2dae12(0x39f)]());}}this[_0x2dae12(0x367)](),this['setHue'](this[_0x2dae12(0x229)][_0x2dae12(0x373)]());}}else _0x2dae12(0x3d3)==='QHyfe'?(_0x818dbc['scaleX']=_0x488ff1(_0x3a8c4b['$1']),_0x46035a[_0x2dae12(0x2b8)]=_0x30bc0f(_0x3516e8['$2'])):(VisuMZ[_0x2dae12(0x215)]['Sprite_Enemy_updateBitmap']['call'](this),this[_0x2dae12(0x336)](this[_0x2dae12(0x386)]));},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x379)]=Sprite_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x25c)],Sprite_Enemy[_0x15f67a(0x38d)][_0x15f67a(0x25c)]=function(){const _0x4f87b=_0x15f67a;VisuMZ[_0x4f87b(0x215)]['Sprite_Enemy_refreshMotion'][_0x4f87b(0x347)](this);if(!VisuMZ['DragonbonesUnion'][_0x4f87b(0x1f3)][_0x4f87b(0x2b7)])return;const _0x5dd722=this[_0x4f87b(0x244)];_0x5dd722&&_0x5dd722[_0x4f87b(0x341)]()&&this[_0x4f87b(0x2d9)]();},Sprite_Enemy['prototype']['refreshMotionDragonbones']=function(){const _0x3bd6a7=_0x15f67a,_0x10e3f7=this[_0x3bd6a7(0x244)];if(_0x10e3f7){const _0x3d557a=_0x10e3f7[_0x3bd6a7(0x2cf)]();if(_0x10e3f7['isInputting']()||_0x10e3f7[_0x3bd6a7(0x385)]())this[_0x3bd6a7(0x1ec)]('walk');else{if(_0x3d557a===0x3)'hGvlu'!==_0x3bd6a7(0x318)?this[_0x3bd6a7(0x1ec)](_0x3bd6a7(0x2a2)):_0x4885c5['width']=_0x11878b(_0x4cf9fa['$1']);else{if(_0x3d557a===0x2)_0x3bd6a7(0x2a0)!==_0x3bd6a7(0x3d1)?this[_0x3bd6a7(0x1ec)](_0x3bd6a7(0x200)):this[_0x3bd6a7(0x1ec)]('escape');else{if(_0x10e3f7[_0x3bd6a7(0x27e)]())this[_0x3bd6a7(0x1ec)](_0x3bd6a7(0x273));else{if(_0x10e3f7['isGuard']()||_0x10e3f7[_0x3bd6a7(0x335)]())this['playDragonbonesMotion'](_0x3bd6a7(0x26f));else{if(_0x3d557a===0x1)this[_0x3bd6a7(0x1ec)](_0x3bd6a7(0x390));else{if(_0x10e3f7['isDying']())this['playDragonbonesMotion'](_0x3bd6a7(0x36e));else _0x10e3f7[_0x3bd6a7(0x20c)]()?this[_0x3bd6a7(0x1ec)]('idle'):this[_0x3bd6a7(0x1ec)](_0x3bd6a7(0x36e));}}}}}}}},Spriteset_Battle[_0x15f67a(0x38d)]['disposeDragonbones']=function(){const _0x57753f=_0x15f67a;for(const _0x3d3a69 of this[_0x57753f(0x255)]()){if(_0x57753f(0x370)===_0x57753f(0x370)){if(!_0x3d3a69)continue;_0x3d3a69['disposeDragonbones']();}else{if(!this['event']())return;const _0x2ace99=this[_0x57753f(0x216)]()[_0x57753f(0x33e)];if(_0x2ace99==='')return;this[_0x57753f(0x2b6)](_0x2ace99);}}},PluginManager['registerCommand'](pluginData['name'],_0x15f67a(0x2f2),_0x1acf74=>{const _0x3a1827=_0x15f67a;if(!$gameScreen)return;VisuMZ[_0x3a1827(0x1fa)](_0x1acf74,_0x1acf74),$gameScreen['createDefaultPicture'](_0x1acf74['PictureID']);const _0x53a839=$gameScreen[_0x3a1827(0x1e1)](_0x1acf74['PictureID']),_0x293195=_0x53a839['dragonbonesData']();_0x293195[_0x3a1827(0x2f5)]=_0x1acf74[_0x3a1827(0x274)],_0x293195['animation']=_0x1acf74[_0x3a1827(0x221)],_0x293195['offsetX']=_0x1acf74[_0x3a1827(0x332)],_0x293195[_0x3a1827(0x326)]=_0x1acf74[_0x3a1827(0x355)],_0x293195[_0x3a1827(0x2b1)]=_0x1acf74[_0x3a1827(0x212)],_0x293195[_0x3a1827(0x2b8)]=_0x1acf74[_0x3a1827(0x323)],_0x293195[_0x3a1827(0x2f1)]=_0x1acf74[_0x3a1827(0x2a9)];}),PluginManager[_0x15f67a(0x2dd)](pluginData['name'],'Picture_DragonbonesAnimation',_0x2ec01b=>{const _0x585c7a=_0x15f67a;if(!$gameScreen)return;VisuMZ[_0x585c7a(0x1fa)](_0x2ec01b,_0x2ec01b),$gameScreen[_0x585c7a(0x287)](_0x2ec01b['PictureID']);const _0x34a308=$gameScreen[_0x585c7a(0x1e1)](_0x2ec01b['PictureID']),_0x214ad7=_0x34a308[_0x585c7a(0x22d)](),_0x1e41cb=_0x2ec01b[_0x585c7a(0x3d0)]||![];_0x214ad7[_0x585c7a(0x37c)]=_0x2ec01b[_0x585c7a(0x221)],_0x214ad7[_0x585c7a(0x394)]=_0x1e41cb;}),PluginManager[_0x15f67a(0x2dd)](pluginData['name'],_0x15f67a(0x22e),_0x54ad6a=>{const _0x201ee2=_0x15f67a;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x54ad6a,_0x54ad6a),$gameScreen[_0x201ee2(0x287)](_0x54ad6a[_0x201ee2(0x247)]);const _0x422329=$gameScreen['picture'](_0x54ad6a['PictureID']),_0x55909c=_0x422329[_0x201ee2(0x22d)]();_0x55909c[_0x201ee2(0x2ae)]=_0x54ad6a[_0x201ee2(0x332)],_0x55909c[_0x201ee2(0x326)]=_0x54ad6a['OffsetY'];}),PluginManager[_0x15f67a(0x2dd)](pluginData['name'],_0x15f67a(0x3c4),_0x2eb6f3=>{const _0x4e070b=_0x15f67a;if(!$gameScreen)return;VisuMZ[_0x4e070b(0x1fa)](_0x2eb6f3,_0x2eb6f3),$gameScreen[_0x4e070b(0x287)](_0x2eb6f3['PictureID']);const _0x1a0cec=$gameScreen[_0x4e070b(0x1e1)](_0x2eb6f3[_0x4e070b(0x247)]),_0x5970fb=_0x1a0cec[_0x4e070b(0x22d)]();_0x5970fb['scaleX']=_0x2eb6f3[_0x4e070b(0x212)],_0x5970fb[_0x4e070b(0x2b8)]=_0x2eb6f3[_0x4e070b(0x323)];}),PluginManager[_0x15f67a(0x2dd)](pluginData['name'],'Picture_TimeScaleDragonbones',_0x1d8c5f=>{const _0x5486fa=_0x15f67a;if(!$gameScreen)return;VisuMZ['ConvertParams'](_0x1d8c5f,_0x1d8c5f),$gameScreen[_0x5486fa(0x287)](_0x1d8c5f[_0x5486fa(0x247)]);const _0x5a3b88=$gameScreen[_0x5486fa(0x1e1)](_0x1d8c5f['PictureID']),_0x1ae73b=_0x5a3b88['dragonbonesData']();_0x1ae73b[_0x5486fa(0x2f1)]=_0x1d8c5f[_0x5486fa(0x2a9)];}),Game_Screen[_0x15f67a(0x38d)][_0x15f67a(0x287)]=function(_0x19737a){const _0x1fb0fc=_0x15f67a;if(this[_0x1fb0fc(0x1e1)](_0x19737a))return;this[_0x1fb0fc(0x290)](_0x19737a,'',0x0,Math[_0x1fb0fc(0x2f8)](Graphics['width']/0x2),Math['round'](Graphics[_0x1fb0fc(0x27f)]/0x2),0x64,0x64,0xff,0x0);},VisuMZ[_0x15f67a(0x215)]['Game_Screen_erasePicture']=Game_Screen[_0x15f67a(0x38d)]['erasePicture'],Game_Screen[_0x15f67a(0x38d)][_0x15f67a(0x3b5)]=function(_0x1e80c4){const _0x4247f2=_0x15f67a;this[_0x4247f2(0x1e6)](_0x1e80c4),VisuMZ[_0x4247f2(0x215)][_0x4247f2(0x360)]['call'](this,_0x1e80c4);},Game_Screen[_0x15f67a(0x38d)][_0x15f67a(0x1e6)]=function(_0x5b9234){const _0x23c834=_0x15f67a,_0x24ae73=this['realPictureId'](_0x5b9234),_0xe20a5f=this[_0x23c834(0x208)][_0x24ae73];if(!_0xe20a5f)return;_0xe20a5f[_0x23c834(0x28c)](),_0xe20a5f['disposeDragonbones']();},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x28e)]=Game_Picture[_0x15f67a(0x38d)][_0x15f67a(0x34a)],Game_Picture['prototype'][_0x15f67a(0x34a)]=function(){const _0x2c2cac=_0x15f67a;VisuMZ[_0x2c2cac(0x215)]['Game_Picture_initialize'][_0x2c2cac(0x347)](this),this['initDragonbonesData']();},Game_Picture[_0x15f67a(0x38d)][_0x15f67a(0x28c)]=function(){const _0x47ee00=_0x15f67a;this[_0x47ee00(0x395)]={'filename':'','animation':DragonbonesManager[_0x47ee00(0x2e6)],'scaleX':0x1,'scaleY':0x1,'offsetX':0x0,'offsetY':0x0,'timeScale':0x1,'revertToIdle':![]};},Game_Picture['prototype'][_0x15f67a(0x22d)]=function(){const _0x55997c=_0x15f67a;if(this[_0x55997c(0x395)]!==undefined)return this[_0x55997c(0x395)];return this[_0x55997c(0x28c)](),this[_0x55997c(0x395)];},Game_Picture[_0x15f67a(0x38d)][_0x15f67a(0x3af)]=function(){const _0x17d6b6=_0x15f67a;return this[_0x17d6b6(0x22d)]()['filename']!=='';},Game_Picture[_0x15f67a(0x38d)]['disposeDragonbones']=function(){const _0x5cefd2=_0x15f67a;if(!SceneManager[_0x5cefd2(0x2af)])return;if(!SceneManager['_scene'][_0x5cefd2(0x346)])return;const _0x1c7482=SceneManager[_0x5cefd2(0x2af)][_0x5cefd2(0x346)][_0x5cefd2(0x29e)](this);if(_0x1c7482)_0x1c7482[_0x5cefd2(0x29a)]();},Spriteset_Base['prototype']['findPictureSprite']=function(_0x324cd5){const _0x3ee37f=_0x15f67a;return this[_0x3ee37f(0x37b)][_0x3ee37f(0x2e9)][_0x3ee37f(0x398)](_0x6c85bc=>_0x6c85bc&&_0x6c85bc[_0x3ee37f(0x1e1)]()===_0x324cd5);},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x25d)]=Sprite_Picture[_0x15f67a(0x38d)][_0x15f67a(0x34a)],Sprite_Picture[_0x15f67a(0x38d)][_0x15f67a(0x34a)]=function(_0x32f375){const _0x4bb59b=_0x15f67a;this['initDragonbonesData'](),VisuMZ[_0x4bb59b(0x215)]['Sprite_Picture_initialize']['call'](this,_0x32f375);},Sprite_Picture[_0x15f67a(0x38d)][_0x15f67a(0x28c)]=function(_0x3b4c15){const _0x3040b2=_0x15f67a;this[_0x3040b2(0x386)]=null,this[_0x3040b2(0x2bb)]='',this[_0x3040b2(0x252)]='';},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x1fc)]=Sprite_Picture[_0x15f67a(0x38d)][_0x15f67a(0x2b4)],Sprite_Picture[_0x15f67a(0x38d)]['update']=function(){const _0x7855b4=_0x15f67a;VisuMZ[_0x7855b4(0x215)]['Sprite_Picture_update'][_0x7855b4(0x347)](this),this[_0x7855b4(0x367)]();},Sprite_Picture[_0x15f67a(0x38d)]['disposeDragonbones']=function(){const _0x34ce10=_0x15f67a;this[_0x34ce10(0x386)]&&(_0x34ce10(0x1e7)===_0x34ce10(0x1e7)?(this[_0x34ce10(0x336)](this[_0x34ce10(0x386)]),this[_0x34ce10(0x386)][_0x34ce10(0x301)](),this[_0x34ce10(0x386)]=null,this['_dragonbonesFilename']='',this[_0x34ce10(0x252)]=''):(_0x2f47a7[_0x34ce10(0x39f)](_0x5ca7b7),_0x551932[_0x34ce10(0x258)][_0x34ce10(0x388)](()=>_0x13671b[_0x34ce10(0x2a7)](_0x258261,_0x4a76d6[_0x34ce10(0x31b)]))));},Sprite_Picture['prototype'][_0x15f67a(0x367)]=function(){const _0x5ef34f=_0x15f67a,_0x393f86=this[_0x5ef34f(0x1e1)]();if(!_0x393f86)return this[_0x5ef34f(0x29a)]();if(!_0x393f86[_0x5ef34f(0x3af)]())return this[_0x5ef34f(0x29a)]();this[_0x5ef34f(0x20b)]();if(!this[_0x5ef34f(0x386)])return;this['updateDragonbonesAnimation'](),this[_0x5ef34f(0x356)](),this['updateDragonbonesTimeScale']();},Sprite_Picture[_0x15f67a(0x38d)][_0x15f67a(0x20b)]=function(){const _0x58ccf0=_0x15f67a,_0x18868c=this[_0x58ccf0(0x1e1)]()[_0x58ccf0(0x22d)]();if(this['_dragonbonesFilename']===_0x18868c[_0x58ccf0(0x2f5)])return;this[_0x58ccf0(0x29a)](),this['_dragonbonesFilename']=_0x18868c['filename'],DragonbonesManager[_0x58ccf0(0x226)](_0x18868c[_0x58ccf0(0x2f5)],this[_0x58ccf0(0x293)]['bind'](this));},Sprite_Picture[_0x15f67a(0x38d)][_0x15f67a(0x293)]=function(){const _0x5e5149=_0x15f67a,_0xd1e90d=this[_0x5e5149(0x1e1)]()[_0x5e5149(0x22d)]();this['_dragonbones']=DragonbonesManager[_0x5e5149(0x35f)](_0xd1e90d[_0x5e5149(0x2f5)]),this['addChildAt'](this[_0x5e5149(0x386)],0x0),this['updateDragonbonesAnimation']();},Sprite_Picture[_0x15f67a(0x38d)]['updateDragonbonesAnimation']=function(){const _0x2c027f=_0x15f67a;if(!this[_0x2c027f(0x386)])return;const _0x2b1632=this['picture']()[_0x2c027f(0x22d)]();this[_0x2c027f(0x252)]!==_0x2b1632[_0x2c027f(0x37c)]&&(this[_0x2c027f(0x252)]=_0x2b1632[_0x2c027f(0x37c)],this[_0x2c027f(0x1fe)]());},Sprite_Picture[_0x15f67a(0x38d)]['playDragonbonesAnimation']=function(){const _0x35c931=_0x15f67a;if(!this['_dragonbones'])return;const _0x52b0da=this['_dragonbones'][_0x35c931(0x37c)],_0x4bc9bf=this[_0x35c931(0x252)][_0x35c931(0x3a5)]()['trim']();_0x52b0da['animations'][_0x4bc9bf]&&_0x52b0da[_0x35c931(0x296)](_0x4bc9bf);},Sprite_Picture['prototype'][_0x15f67a(0x356)]=function(){const _0x28e1a4=_0x15f67a;if(!this['_dragonbones'])return;const _0x5c4b4f=this['picture']()['dragonbonesData']();this['_dragonbones']['x']=_0x5c4b4f[_0x28e1a4(0x2ae)],this[_0x28e1a4(0x386)]['y']=_0x5c4b4f[_0x28e1a4(0x326)],this[_0x28e1a4(0x386)]['scale']['x']=_0x5c4b4f[_0x28e1a4(0x2b1)],this['_dragonbones'][_0x28e1a4(0x35a)]['y']=_0x5c4b4f[_0x28e1a4(0x2b8)];if(this[_0x28e1a4(0x386)]['animation'][_0x28e1a4(0x3be)]===![]&&_0x5c4b4f['revertToIdle']){if('RVUMi'==='rbifa')for(const _0x5b19d4 of _0x113bb4){_0x5b19d4[_0x28e1a4(0x2c7)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/i);const _0x5436d9=_0x186d91(_0x301e16['$1'])[_0x28e1a4(0x3a5)]()[_0x28e1a4(0x34f)](),_0x5e3ed4=_0x52b337(_0x1d2328['$2'])[_0x28e1a4(0x34f)]();_0x19a40f[_0x28e1a4(0x35b)][_0x5436d9]=_0x5e3ed4;}else _0x5c4b4f[_0x28e1a4(0x37c)]=_0x28e1a4(0x36e);}},Sprite_Picture[_0x15f67a(0x38d)][_0x15f67a(0x280)]=function(){const _0x40abae=_0x15f67a;if(!this[_0x40abae(0x386)])return;const _0x27f3c4=this['picture']()['dragonbonesData']();let _0x45253b=_0x27f3c4['timeScale'];this[_0x40abae(0x386)][_0x40abae(0x37c)][_0x40abae(0x2f1)]=_0x45253b;},PluginManager[_0x15f67a(0x2dd)](pluginData[_0x15f67a(0x2b5)],_0x15f67a(0x340),_0x476553=>{const _0x1c8b07=_0x15f67a;if(!$gameMap)return;VisuMZ[_0x1c8b07(0x1fa)](_0x476553,_0x476553);const _0x1df61a=$gameActors['actor'](_0x476553[_0x1c8b07(0x39b)]);if(!_0x1df61a)return;const _0x5a9491=JsonEx[_0x1c8b07(0x297)](_0x1df61a[_0x1c8b07(0x2cc)]);_0x1df61a[_0x1c8b07(0x2cc)]={'filename':_0x476553[_0x1c8b07(0x274)],'animation':'','scaleX':_0x476553[_0x1c8b07(0x212)],'scaleY':_0x476553['ScaleY'],'offsetX':_0x476553[_0x1c8b07(0x332)],'offsetY':_0x476553[_0x1c8b07(0x355)],'timeScale':_0x476553[_0x1c8b07(0x2a9)],'walkRate':_0x476553[_0x1c8b07(0x3b2)]??0x1,'dashRate':_0x476553['DashRate']??0x1,'width':_0x476553['Width'],'height':_0x476553[_0x1c8b07(0x352)],'flipLeft':_0x476553[_0x1c8b07(0x30d)],'flipRight':_0x476553['FlipRight'],'animationNames':{'idle':_0x476553[_0x1c8b07(0x2ef)],'walk':_0x476553[_0x1c8b07(0x291)],'dash':_0x476553[_0x1c8b07(0x303)],'jump':_0x476553[_0x1c8b07(0x2aa)],'ladderidle':_0x476553[_0x1c8b07(0x358)],'ladderclimb':_0x476553['LadderClimb'],'ropeidle':_0x476553[_0x1c8b07(0x2f4)],'ropeclimb':_0x476553[_0x1c8b07(0x31d)]}},$gamePlayer[_0x1c8b07(0x29c)]();}),PluginManager[_0x15f67a(0x2dd)](pluginData[_0x15f67a(0x2b5)],_0x15f67a(0x389),_0xa4c29f=>{const _0x1bd16c=_0x15f67a;if(!$gameMap)return;if(SceneManager[_0x1bd16c(0x2af)][_0x1bd16c(0x268)]!==Scene_Map)return;VisuMZ[_0x1bd16c(0x1fa)](_0xa4c29f,_0xa4c29f);const _0xbc7c84=$gameActors['actor'](_0xa4c29f[_0x1bd16c(0x39b)]),_0x129458=_0xbc7c84[_0x1bd16c(0x325)](),_0x44649f=_0x129458===0x0?$gamePlayer:$gamePlayer[_0x1bd16c(0x33c)]()[_0x1bd16c(0x3ae)](_0x129458-0x1);if(!_0x44649f)return;_0x44649f[_0x1bd16c(0x240)]=_0xa4c29f[_0x1bd16c(0x221)];}),PluginManager['registerCommand'](pluginData['name'],_0x15f67a(0x289),_0x4a9630=>{const _0x26eb87=_0x15f67a;if(!$gameMap)return;if(SceneManager[_0x26eb87(0x2af)][_0x26eb87(0x268)]!==Scene_Map)return;VisuMZ[_0x26eb87(0x1fa)](_0x4a9630,_0x4a9630);const _0x1bfdd1=$gameActors[_0x26eb87(0x3bd)](_0x4a9630[_0x26eb87(0x39b)]),_0x5cd835=_0x1bfdd1[_0x26eb87(0x325)](),_0x55fa2c=_0x5cd835===0x0?$gamePlayer:$gamePlayer[_0x26eb87(0x33c)]()[_0x26eb87(0x3ae)](_0x5cd835-0x1);if(!_0x55fa2c)return;_0x55fa2c['dragonbonesAnimation']='';}),PluginManager[_0x15f67a(0x2dd)](pluginData['name'],_0x15f67a(0x2c9),_0x362470=>{const _0x2f9eac=_0x15f67a;if(!$gameMap)return;if(SceneManager[_0x2f9eac(0x2af)]['constructor']!==Scene_Map)return;VisuMZ[_0x2f9eac(0x1fa)](_0x362470,_0x362470);const _0x1f09ee=$gameTemp[_0x2f9eac(0x25f)](),_0x2e359c=$gameMap['event'](_0x362470[_0x2f9eac(0x353)]||_0x1f09ee[_0x2f9eac(0x39c)]());if(!_0x2e359c)return;_0x2e359c[_0x2f9eac(0x240)]=_0x362470['Animation'];}),PluginManager[_0x15f67a(0x2dd)](pluginData[_0x15f67a(0x2b5)],_0x15f67a(0x392),_0x1a9499=>{const _0x583e46=_0x15f67a;if(!$gameMap)return;if(SceneManager[_0x583e46(0x2af)]['constructor']!==Scene_Map)return;VisuMZ[_0x583e46(0x1fa)](_0x1a9499,_0x1a9499);const _0x993ac7=$gameTemp[_0x583e46(0x25f)](),_0x1dd536=$gameMap[_0x583e46(0x216)](_0x1a9499[_0x583e46(0x353)]||_0x993ac7[_0x583e46(0x39c)]());if(!_0x1dd536)return;_0x1dd536[_0x583e46(0x240)]='';}),PluginManager[_0x15f67a(0x2dd)](pluginData[_0x15f67a(0x2b5)],'MapSprite_FollowerAnimationPlay',_0xb4fc6e=>{const _0x19f917=_0x15f67a;if(!$gameMap)return;if(SceneManager[_0x19f917(0x2af)][_0x19f917(0x268)]!==Scene_Map)return;VisuMZ['ConvertParams'](_0xb4fc6e,_0xb4fc6e);const _0x2d82b2=$gamePlayer[_0x19f917(0x33c)]()[_0x19f917(0x3ae)](_0xb4fc6e[_0x19f917(0x271)]);if(!_0x2d82b2)return;_0x2d82b2[_0x19f917(0x240)]=_0xb4fc6e[_0x19f917(0x221)];}),PluginManager[_0x15f67a(0x2dd)](pluginData['name'],_0x15f67a(0x371),_0x51452c=>{const _0xd49ca=_0x15f67a;if(!$gameMap)return;if(SceneManager['_scene'][_0xd49ca(0x268)]!==Scene_Map)return;VisuMZ[_0xd49ca(0x1fa)](_0x51452c,_0x51452c);const _0x26a007=$gamePlayer['followers']()[_0xd49ca(0x3ae)](_0x51452c[_0xd49ca(0x271)]);if(!_0x26a007)return;_0x26a007['dragonbonesAnimation']='';}),PluginManager[_0x15f67a(0x2dd)](pluginData['name'],_0x15f67a(0x2dc),_0x5b5701=>{const _0x6c9c4f=_0x15f67a;if(!$gameMap)return;if(SceneManager[_0x6c9c4f(0x2af)]['constructor']!==Scene_Map)return;VisuMZ[_0x6c9c4f(0x1fa)](_0x5b5701,_0x5b5701),$gamePlayer[_0x6c9c4f(0x240)]=_0x5b5701[_0x6c9c4f(0x221)];}),PluginManager[_0x15f67a(0x2dd)](pluginData[_0x15f67a(0x2b5)],_0x15f67a(0x3b7),_0x32397a=>{const _0x1162af=_0x15f67a;if(!$gameMap)return;if(SceneManager['_scene'][_0x1162af(0x268)]!==Scene_Map)return;$gamePlayer[_0x1162af(0x240)]='';}),Game_Temp[_0x15f67a(0x38d)][_0x15f67a(0x2b0)]=function(_0x4c91d7){this['_lastPluginCommandInterpreter']=_0x4c91d7;},Game_Temp[_0x15f67a(0x38d)][_0x15f67a(0x25f)]=function(){const _0x162e7c=_0x15f67a;return this[_0x162e7c(0x3cb)];},Object[_0x15f67a(0x260)](Game_CharacterBase[_0x15f67a(0x38d)],_0x15f67a(0x240),{'get':function(){const _0x517e69=_0x15f67a;return this[_0x517e69(0x3b6)]()[_0x517e69(0x37c)];},'set':function(_0x9d2247){const _0x1ec9ed=_0x15f67a;this[_0x1ec9ed(0x3b6)]()[_0x1ec9ed(0x37c)]=_0x9d2247;},'configurable':!![]}),Game_CharacterBase[_0x15f67a(0x38d)][_0x15f67a(0x28c)]=function(){const _0x6cd720=_0x15f67a,_0x1369a2=VisuMZ[_0x6cd720(0x215)][_0x6cd720(0x1f3)][_0x6cd720(0x2d3)];this[_0x6cd720(0x2cc)]={'filename':'','animation':'','scaleX':_0x1369a2['ScaleX'],'scaleY':_0x1369a2['ScaleY'],'offsetX':_0x1369a2['OffsetX'],'offsetY':_0x1369a2[_0x6cd720(0x355)],'timeScale':_0x1369a2[_0x6cd720(0x2a9)],'walkRate':0x1,'dashRate':0x1,'width':_0x1369a2['Width'],'height':_0x1369a2[_0x6cd720(0x352)],'flipLeft':_0x1369a2[_0x6cd720(0x30d)],'flipRight':_0x1369a2[_0x6cd720(0x3b0)],'animationNames':{'idle':_0x1369a2[_0x6cd720(0x2ef)],'walk':_0x1369a2[_0x6cd720(0x291)],'dash':_0x1369a2[_0x6cd720(0x303)],'jump':_0x1369a2['Jump'],'ladderidle':_0x1369a2[_0x6cd720(0x358)],'ladderclimb':_0x1369a2['LadderClimb'],'ropeidle':_0x1369a2['RopeIdle'],'ropeclimb':_0x1369a2['RopeClimb']}},this[_0x6cd720(0x324)]===undefined&&(this[_0x6cd720(0x324)]=0x0);},Game_CharacterBase[_0x15f67a(0x38d)][_0x15f67a(0x35d)]=function(){},Game_CharacterBase[_0x15f67a(0x38d)][_0x15f67a(0x2b6)]=function(_0x28c177){const _0x15b248=_0x15f67a,_0x19c585=this[_0x15b248(0x3b6)]();if(_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE:[ ]*(.*)>/i)){if('WOxIO'!==_0x15b248(0x2ba))_0x19c585[_0x15b248(0x2f5)]=String(RegExp['$1'])[_0x15b248(0x34f)]();else{const _0x2e23ce=_0x3cee3b['DragonbonesUnion'][_0x15b248(0x1f3)][_0x15b248(0x2d3)];this[_0x15b248(0x2cc)]={'filename':'','animation':'','scaleX':_0x2e23ce['ScaleX'],'scaleY':_0x2e23ce[_0x15b248(0x323)],'offsetX':_0x2e23ce[_0x15b248(0x332)],'offsetY':_0x2e23ce['OffsetY'],'timeScale':_0x2e23ce[_0x15b248(0x2a9)],'walkRate':0x1,'dashRate':0x1,'width':_0x2e23ce[_0x15b248(0x354)],'height':_0x2e23ce['Height'],'flipLeft':_0x2e23ce[_0x15b248(0x30d)],'flipRight':_0x2e23ce['FlipRight'],'animationNames':{'idle':_0x2e23ce[_0x15b248(0x2ef)],'walk':_0x2e23ce[_0x15b248(0x291)],'dash':_0x2e23ce['Dash'],'jump':_0x2e23ce['Jump'],'ladderidle':_0x2e23ce['LadderIdle'],'ladderclimb':_0x2e23ce['LadderClimb'],'ropeidle':_0x2e23ce[_0x15b248(0x2f4)],'ropeclimb':_0x2e23ce['RopeClimb']}},this['_dragonbonesMoveTimer']===_0x2b5b2a&&(this[_0x15b248(0x324)]=0x0);}}if(_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE (?:SKIN|NAME|FILENAME):[ ]*(.*)>/i)){if(_0x15b248(0x269)===_0x15b248(0x2e5)){if(!this[_0x15b248(0x216)]())return;if(!this['page']())return;const _0x19ab68=this[_0x15b248(0x232)]();let _0x55a24f='';for(const _0x18e45c of _0x19ab68){if([0x6c,0x198]['includes'](_0x18e45c['code'])){if(_0x55a24f!=='')_0x55a24f+='\x0a';_0x55a24f+=_0x18e45c[_0x15b248(0x2cd)][0x0];}}this[_0x15b248(0x2b6)](_0x55a24f);}else _0x19c585[_0x15b248(0x2f5)]=String(RegExp['$1'])[_0x15b248(0x34f)]();}_0x28c177['match'](/<DRAGONBONES SPRITE[ ]SCALE:[ ](.*),[ ](.*)>/i)&&(_0x19c585[_0x15b248(0x2b1)]=Number(RegExp['$1']),_0x19c585[_0x15b248(0x2b8)]=Number(RegExp['$2']));_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE[ ](?:SCALEX|SCALE X):[ ](.*)>/i)&&('RaDRr'===_0x15b248(0x3c8)?this['playDragonbonesMotion']('abnormal'):_0x19c585[_0x15b248(0x2b1)]=Number(RegExp['$1']));_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE[ ](?:SCALEY|SCALE Y):[ ](.*)>/i)&&(_0x15b248(0x2e8)==='HCAsQ'?this[_0x15b248(0x1ec)](_0x15b248(0x36e)):_0x19c585[_0x15b248(0x2b8)]=Number(RegExp['$1']));_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE[ ]OFFSET:[ ](.*),[ ](.*)>/i)&&(_0x19c585[_0x15b248(0x2ae)]=Number(RegExp['$1']),_0x19c585[_0x15b248(0x326)]=Number(RegExp['$2']));_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE[ ](?:OFFSETX|OFFSET X):[ ](.*)>/i)&&(_0x19c585[_0x15b248(0x2ae)]=Number(RegExp['$1']));if(_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE[ ](?:OFFSETY|OFFSET Y):[ ](.*)>/i)){if(_0x15b248(0x32d)===_0x15b248(0x32d))_0x19c585['offsetY']=Number(RegExp['$1']);else{if(!this['hasDragonbonesBattler']())return;this['requestMotion']('dead');}}_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE[ ]SIZE:[ ](.*),[ ](.*)>/i)&&('SaSHm'!==_0x15b248(0x210)?this[_0x15b248(0x29a)]():(_0x19c585[_0x15b248(0x237)]=Number(RegExp['$1']),_0x19c585[_0x15b248(0x27f)]=Number(RegExp['$2'])));_0x28c177['match'](/<DRAGONBONES SPRITE[ ]WIDTH:[ ](.*)>/i)&&(_0x15b248(0x2ec)!==_0x15b248(0x211)?_0x19c585[_0x15b248(0x237)]=Number(RegExp['$1']):(_0x440cdc[_0x15b248(0x215)][_0x15b248(0x288)]['call'](this),this['removeChild'](this['_dragonbones'])));_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE[ ]HEIGHT:[ ](.*)>/i)&&(_0x19c585[_0x15b248(0x27f)]=Number(RegExp['$1']));_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE[ ](?:TIMESCALE|TIME SCALE):[ ](.*)>/i)&&(_0x19c585['timeScale']=Number(RegExp['$1']));_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE[ ](?:WALK RATE|WALKING RATE):[ ](.*)>/i)&&(_0x19c585[_0x15b248(0x246)]=Number(RegExp['$1']));_0x28c177['match'](/<DRAGONBONES SPRITE[ ](?:DASH RATE|DASHING RATE):[ ](.*)>/i)&&(_0x19c585['dashRate']=Number(RegExp['$1']));if(_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE FLIP LEFT>/i)){if(_0x15b248(0x2b3)!==_0x15b248(0x365))_0x19c585[_0x15b248(0x3d4)]=!![];else return;}_0x28c177['match'](/<DRAGONBONES SPRITE NO FLIP LEFT>/i)&&(_0x19c585['flipLeft']=![]);_0x28c177['match'](/<DRAGONBONES SPRITE FLIP RIGHT>/i)&&(_0x19c585[_0x15b248(0x37f)]=!![]);if(_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE NO FLIP RIGHT>/i)){if(_0x15b248(0x331)!==_0x15b248(0x3bc))_0x19c585[_0x15b248(0x37f)]=![];else{_0x418b44[_0x15b248(0x204)](_0x1d54b6+0x4);if(_0x39c108[_0x15b248(0x3d4)])_0x2b6ee5['push'](_0x279f78+0x6);_0x2e536e[_0x15b248(0x204)](_0x19b976+0x8);}}const _0x243d2e=_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/gi);if(_0x243d2e)for(const _0x2538fc of _0x243d2e){_0x2538fc[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE MOTION (.*):[ ](.*)>/i);const _0x37e006=String(RegExp['$1'])['toLowerCase']()[_0x15b248(0x34f)](),_0x473da6=String(RegExp['$2'])[_0x15b248(0x3a5)]()['trim']();_0x19c585[_0x15b248(0x2a6)][_0x37e006]=_0x473da6;}if(_0x28c177[_0x15b248(0x2c7)](/<DRAGONBONES SPRITE (?:SETTINGS|SETTING)>\s*([\s\S]*)\s*<\/DRAGONBONES SPRITE (?:SETTINGS|SETTING)>/i)){if(_0x15b248(0x22f)===_0x15b248(0x22f)){const _0x37246a=String(RegExp['$1']);_0x37246a[_0x15b248(0x2c7)](/(?:SKIN|NAME|FILENAME):[ ]*(.*)/i)&&(_0x19c585[_0x15b248(0x2f5)]=String(RegExp['$1'])['trim']());_0x37246a[_0x15b248(0x2c7)](/SCALE:[ ](.*),[ ](.*)/i)&&(_0x19c585[_0x15b248(0x2b1)]=Number(RegExp['$1']),_0x19c585[_0x15b248(0x2b8)]=Number(RegExp['$2']));_0x37246a['match'](/(?:SCALEX|SCALE X):[ ](.*)/i)&&(_0x19c585[_0x15b248(0x2b1)]=Number(RegExp['$1']));_0x37246a[_0x15b248(0x2c7)](/(?:SCALEY|SCALE Y):[ ](.*)/i)&&(_0x19c585[_0x15b248(0x2b8)]=Number(RegExp['$1']));if(_0x37246a[_0x15b248(0x2c7)](/OFFSET:[ ](.*),[ ](.*)/i)){if('fzCDj'==='fzCDj')_0x19c585[_0x15b248(0x2ae)]=Number(RegExp['$1']),_0x19c585['offsetY']=Number(RegExp['$2']);else{if(!this[_0x15b248(0x244)])return![];if(!this[_0x15b248(0x386)])return![];const _0xbd2f57=this['_battler']['enemy']()[_0x15b248(0x33e)]||'';if(_0xbd2f57['match'](/<DRAGONBONES HUE AFFECTED>/i))return!![];else{if(_0xbd2f57[_0x15b248(0x2c7)](/<DRAGONBONES NO HUE>/i))return![];}return _0x5acfd0[_0x15b248(0x215)][_0x15b248(0x1f3)][_0x15b248(0x319)]['HueAffected'];}}if(_0x37246a[_0x15b248(0x2c7)](/(?:OFFSETX|OFFSET X):[ ](.*)/i)){if(_0x15b248(0x2ad)===_0x15b248(0x34e))return this[_0x15b248(0x2ac)]=!![],_0x4f5279[_0x15b248(0x215)][_0x15b248(0x2c2)][_0x15b248(0x347)](this);else _0x19c585[_0x15b248(0x2ae)]=Number(RegExp['$1']);}if(_0x37246a[_0x15b248(0x2c7)](/(?:OFFSETY|OFFSET Y):[ ](.*)/i)){if('wuIry'===_0x15b248(0x34d))_0x19c585['offsetY']=Number(RegExp['$1']);else{this[_0x15b248(0x29a)](),_0x13b12b[_0x15b248(0x215)]['Sprite_Enemy_setBattler'][_0x15b248(0x347)](this,_0x5abe6b);if(_0x55b3eb['isHidden']())this[_0x15b248(0x2ed)]=0x0;}}_0x37246a['match'](/(?:TIMESCALE|TIME SCALE):[ ](.*)/i)&&(_0x15b248(0x20d)!==_0x15b248(0x3ac)?_0x19c585[_0x15b248(0x2f1)]=Number(RegExp['$1']):_0x10ac00[_0x15b248(0x37c)][_0x15b248(0x2a6)][_0xc5ac02]=_0x403749['animation'][_0x15b248(0x2a6)][_0x476173][_0x15b248(0x3a5)]());_0x37246a[_0x15b248(0x2c7)](/(?:WALK RATE|WALKING RATE):[ ](.*)/i)&&(_0x19c585[_0x15b248(0x246)]=Number(RegExp['$1']));if(_0x37246a['match'](/(?:DASH RATE|DASHING RATE):[ ](.*)/i)){if('sQfKk'!==_0x15b248(0x22a))_0x19c585[_0x15b248(0x203)]=Number(RegExp['$1']);else{const _0x42a348=_0x3f7e58(_0x544a1c['$1']);_0x42a348<_0x57b916?(_0x5b2191(_0x15b248(0x270)[_0x15b248(0x3a3)](_0x312ca4,_0x42a348,_0x598c9e)),_0x4d3f1d[_0x15b248(0x2c4)]()):_0x2afcac=_0x5017a3[_0x15b248(0x298)](_0x42a348,_0x3d62ba);}}_0x37246a[_0x15b248(0x2c7)](/SIZE:[ ](.*),[ ](.*)/i)&&(_0x19c585[_0x15b248(0x237)]=Number(RegExp['$1']),_0x19c585['height']=Number(RegExp['$2']));if(_0x37246a['match'](/WIDTH:[ ](.*)/i)){if(_0x15b248(0x329)!=='YumJT')_0x19c585[_0x15b248(0x237)]=Number(RegExp['$1']);else{_0x250790=_0x518c8d[_0x15b248(0x34f)](),_0x4ee75c[_0x15b248(0x2f0)][_0x15b248(0x204)](_0x4a9617),_0x11b466[_0x15b248(0x3a8)]['push'](_0x56bfa2);const _0x1822bb=_0x26852f[_0x15b248(0x38a)][_0x15b248(0x26c)];!_0x1822bb[_0x15b248(0x316)]&&this[_0x15b248(0x36f)]();}}if(_0x37246a[_0x15b248(0x2c7)](/HEIGHT:[ ](.*)/i)){if(_0x15b248(0x1eb)==='RQCId'){if(!_0x4736ee)return;_0xf4f14[_0x15b248(0x1fa)](_0x5c828c,_0x180b50),_0x1820b8[_0x15b248(0x287)](_0x14948d['PictureID']);const _0x4df338=_0x5b7e27[_0x15b248(0x1e1)](_0x3f9899['PictureID']),_0x31ed94=_0x4df338[_0x15b248(0x22d)]();_0x31ed94['timeScale']=_0x2bf9e6['TimeScale'];}else _0x19c585['height']=Number(RegExp['$1']);}_0x37246a[_0x15b248(0x2c7)](/NO FLIP LEFT/i)&&(_0x19c585[_0x15b248(0x3d4)]=![]);_0x37246a[_0x15b248(0x2c7)](/FLIP LEFT/i)&&(_0x15b248(0x1e2)!=='YmEIo'?_0x2e4c9c[_0x15b248(0x2f5)]=_0x3bb87e(_0x50dc0['$1'])['trim']():_0x19c585[_0x15b248(0x3d4)]=!![]);if(_0x37246a[_0x15b248(0x2c7)](/NO FLIP RIGHT/i)){if(_0x15b248(0x34b)===_0x15b248(0x34b))_0x19c585[_0x15b248(0x37f)]=![];else{const _0x443fde=_0x50c5ca[_0x15b248(0x237)],_0x60a3f4=_0x20bb44[_0x15b248(0x27f)];this[_0x15b248(0x2cb)][_0x15b248(0x242)](0x0,0x0,_0x443fde,_0x60a3f4),this[_0x15b248(0x242)](0x0,0x0,_0x443fde,_0x60a3f4);}}_0x37246a[_0x15b248(0x2c7)](/FLIP RIGHT/i)&&(_0x19c585['flipRight']=!![]);const _0x4ea222=_0x28c177['match'](/(?:ANI|MOTION) (.*):[ ](.*)/gi);if(_0x4ea222){if('OTgEz'==='arHrC'){if(!this['hasDragonbonesBattler']())return;this[_0x15b248(0x2b9)]()['playDragonbonesAnimation'](_0x182fa2),[_0x15b248(0x3c3),_0x15b248(0x36e)][_0x15b248(0x24c)](_0x19e2a1)?this[_0x15b248(0x359)]=![]:this[_0x15b248(0x359)]=!![];}else for(const _0x44c62f of _0x4ea222){if('NSuTV'!=='NSuTV'){if(this!==this[_0x15b248(0x24e)][_0x15b248(0x279)])return null;return this[_0x15b248(0x24e)]['_dragonbones'];}else{_0x44c62f['match'](/(?:ANI|MOTION) (.*):[ ](.*)/i);const _0x5b4693=String(RegExp['$1'])['toLowerCase']()['trim'](),_0x2f55c5=String(RegExp['$2'])[_0x15b248(0x3a5)]()[_0x15b248(0x34f)]();_0x19c585['animationNames'][_0x5b4693]=_0x2f55c5;}}}}else{_0x22c4b6[_0x15b248(0x2c7)](/(?:ANI|MOTION)[ ](.*):[ ](.*)/i);const _0x27e315=_0x1aa649(_0x418e77['$1'])[_0x15b248(0x3a5)]()[_0x15b248(0x34f)](),_0x147af1=_0x3a39d5(_0x91c3da['$2'])['trim']();_0x5f2fb1[_0x15b248(0x35b)][_0x27e315]=_0x147af1;}}},Game_CharacterBase[_0x15f67a(0x38d)][_0x15f67a(0x3b6)]=function(){const _0x4cf9fe=_0x15f67a;if(this[_0x4cf9fe(0x2cc)]!==undefined)return this[_0x4cf9fe(0x2cc)];return this[_0x4cf9fe(0x28c)](),this[_0x4cf9fe(0x35d)](),this[_0x4cf9fe(0x2cc)];},Game_CharacterBase[_0x15f67a(0x38d)]['hasDragonbones']=function(){const _0x70662e=_0x15f67a;return this[_0x70662e(0x3b6)]()['filename']!=='';},Game_CharacterBase['prototype'][_0x15f67a(0x1f4)]=function(_0xeecb72){const _0x35f38e=_0x15f67a,_0x19281c=this[_0x35f38e(0x3b6)]();if(!_0xeecb72)return _0x19281c[_0x35f38e(0x2a6)]['idle'];_0x19281c[_0x35f38e(0x37c)]=_0x19281c[_0x35f38e(0x37c)][_0x35f38e(0x3a5)]()[_0x35f38e(0x34f)]();if(_0x19281c['animation']!==''&&_0xeecb72[_0x35f38e(0x37c)]['animations'][_0x19281c[_0x35f38e(0x37c)]])return _0x19281c[_0x35f38e(0x37c)];let _0x472f36=[];if(this['isJumping']())_0x472f36=_0x472f36['concat'](this['addDragonbonesAnimationDirections'](_0x19281c[_0x35f38e(0x2a6)][_0x35f38e(0x37d)])),_0x472f36=_0x472f36['concat'](this['addDragonbonesAnimationDirections'](_0x19281c[_0x35f38e(0x2a6)]['walk']));else{if(this[_0x35f38e(0x38e)]()&&!this[_0x35f38e(0x26d)]()){if(Imported[_0x35f38e(0x1f7)]&&this[_0x35f38e(0x20e)]())this[_0x35f38e(0x324)]>0x0&&(_0x472f36[_0x35f38e(0x204)](_0x19281c['animationNames']['ropeclimb']),_0x472f36['push'](_0x19281c[_0x35f38e(0x2a6)][_0x35f38e(0x3cc)]),_0x472f36=_0x472f36[_0x35f38e(0x314)](this['addDragonbonesAnimationDirections'](_0x19281c[_0x35f38e(0x2a6)]['walk']))),_0x472f36[_0x35f38e(0x204)](_0x19281c[_0x35f38e(0x2a6)][_0x35f38e(0x1e3)]),_0x472f36['push'](_0x19281c[_0x35f38e(0x2a6)][_0x35f38e(0x278)]);else{if(this[_0x35f38e(0x324)]>0x0){if('jEwcp'!==_0x35f38e(0x3a6))_0x472f36[_0x35f38e(0x204)](_0x19281c[_0x35f38e(0x2a6)][_0x35f38e(0x3cc)]),_0x472f36=_0x472f36[_0x35f38e(0x314)](this[_0x35f38e(0x399)](_0x19281c[_0x35f38e(0x2a6)]['walk']));else{if(!_0x393443)return;_0xe125e6[_0x35f38e(0x1fa)](_0x385194,_0x45bc3f),_0x20a527[_0x35f38e(0x287)](_0x1170c8[_0x35f38e(0x247)]);const _0x47fbbb=_0x5cdadc[_0x35f38e(0x1e1)](_0x2e34c3['PictureID']),_0xfbb86c=_0x47fbbb[_0x35f38e(0x22d)]();_0xfbb86c[_0x35f38e(0x2ae)]=_0x3129ff[_0x35f38e(0x332)],_0xfbb86c[_0x35f38e(0x326)]=_0x3eedc1[_0x35f38e(0x355)];}}_0x472f36[_0x35f38e(0x204)](_0x19281c[_0x35f38e(0x2a6)]['ladderidle']);}}else this[_0x35f38e(0x324)]>0x0&&(this['isDashing']()&&(_0x472f36=_0x472f36['concat'](this[_0x35f38e(0x399)](_0x19281c[_0x35f38e(0x2a6)][_0x35f38e(0x3d5)]))),_0x472f36=_0x472f36['concat'](this[_0x35f38e(0x399)](_0x19281c[_0x35f38e(0x2a6)]['walk'])));}_0x472f36=_0x472f36[_0x35f38e(0x314)](this['addDragonbonesAnimationDirections'](_0x19281c[_0x35f38e(0x2a6)][_0x35f38e(0x36e)]));for(const _0x1f9a31 of _0x472f36){if(_0xeecb72['animation'][_0x35f38e(0x34c)][_0x1f9a31])return _0x1f9a31;}return _0x19281c['animationNames'][_0x35f38e(0x36e)];},Game_CharacterBase[_0x15f67a(0x38d)][_0x15f67a(0x399)]=function(_0x5301f7){const _0x60857e=_0x15f67a,_0x28ca40=this[_0x60857e(0x3b6)](),_0x5b888e=this[_0x60857e(0x28a)]();let _0x32bbfa=[];_0x32bbfa[_0x60857e(0x204)](_0x5301f7+_0x5b888e);if(_0x5b888e===0x1){if(_0x60857e(0x31c)!==_0x60857e(0x31c))this[_0x60857e(0x28c)]();else{_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x4);if(_0x28ca40[_0x60857e(0x3d4)])_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x6);_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x2);}}if(_0x5b888e===0x3){_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x6);if(_0x28ca40['flipRight'])_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x4);_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x2);}if(_0x5b888e===0x7){if(_0x60857e(0x1e0)===_0x60857e(0x327)){_0x31ecd9=_0x42b6ec[_0x60857e(0x3a5)]()[_0x60857e(0x34f)]();_0x4560bc[_0x60857e(0x37c)][_0x60857e(0x34c)][_0x1aac0c]&&(_0x4ffad[_0x60857e(0x37c)]['animations'][_0x590e6b][_0x60857e(0x2d0)]=0x0);for(let _0x1e70c6=0x1;_0x1e70c6<=0x9;_0x1e70c6++){const _0xb71e1f=_0x45f5c7+_0x1e70c6;_0xd40607[_0x60857e(0x37c)][_0x60857e(0x34c)][_0xb71e1f]&&(_0x8844a8[_0x60857e(0x37c)][_0x60857e(0x34c)][_0xb71e1f][_0x60857e(0x2d0)]=0x0);}}else{_0x32bbfa['push'](_0x5301f7+0x4);if(_0x28ca40[_0x60857e(0x3d4)])_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x6);_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x8);}}if(_0x5b888e===0x9){_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x6);if(_0x28ca40[_0x60857e(0x37f)])_0x32bbfa[_0x60857e(0x204)](_0x5301f7+0x4);_0x32bbfa['push'](_0x5301f7+0x8);}return _0x32bbfa['push'](_0x5301f7),_0x32bbfa;},VisuMZ['DragonbonesUnion'][_0x15f67a(0x3ad)]=Game_CharacterBase[_0x15f67a(0x38d)][_0x15f67a(0x2b4)],Game_CharacterBase[_0x15f67a(0x38d)][_0x15f67a(0x2b4)]=function(){const _0x1c80d9=_0x15f67a;VisuMZ[_0x1c80d9(0x215)]['Game_CharacterBase_update']['call'](this),this[_0x1c80d9(0x36c)]();},Game_CharacterBase['prototype'][_0x15f67a(0x36c)]=function(){const _0xb622bd=_0x15f67a;if(!this[_0xb622bd(0x3af)]())return;this[_0xb622bd(0x1ed)]()?this[_0xb622bd(0x324)]=VisuMZ['DragonbonesUnion'][_0xb622bd(0x1f3)][_0xb622bd(0x2d3)][_0xb622bd(0x2da)]:this['_dragonbonesMoveTimer']--;},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x24f)]=Game_Player[_0x15f67a(0x38d)]['refresh'],Game_Player[_0x15f67a(0x38d)]['refresh']=function(){const _0x4a4112=_0x15f67a;VisuMZ['DragonbonesUnion']['Game_Player_refresh'][_0x4a4112(0x347)](this),this[_0x4a4112(0x35d)]();},Game_Player[_0x15f67a(0x38d)][_0x15f67a(0x35d)]=function(){const _0x339ecd=_0x15f67a,_0x40e68f=$gameParty[_0x339ecd(0x31f)]();!_0x40e68f?_0x339ecd(0x206)!=='TGYtb'?this[_0x339ecd(0x384)]&&this[_0x339ecd(0x384)][_0x339ecd(0x3af)]()?this[_0x339ecd(0x283)]():_0x1fc6d1[_0x339ecd(0x215)][_0x339ecd(0x2c3)][_0x339ecd(0x347)](this):this[_0x339ecd(0x28c)]():this['_dragonbonesSpriteData']=_0x40e68f[_0x339ecd(0x3b6)]();},VisuMZ['DragonbonesUnion'][_0x15f67a(0x266)]=Game_Follower[_0x15f67a(0x38d)][_0x15f67a(0x29c)],Game_Follower[_0x15f67a(0x38d)]['refresh']=function(){const _0x267ad6=_0x15f67a;VisuMZ['DragonbonesUnion']['Game_Follower_refresh']['call'](this),this[_0x267ad6(0x35d)]();},Game_Follower[_0x15f67a(0x38d)][_0x15f67a(0x35d)]=function(){const _0x43746a=_0x15f67a,_0x2e1d2b=this[_0x43746a(0x3bd)]();!_0x2e1d2b?this[_0x43746a(0x28c)]():this[_0x43746a(0x2cc)]=_0x2e1d2b[_0x43746a(0x3b6)]();},Game_Actor['prototype'][_0x15f67a(0x28c)]=function(){const _0x42033b=_0x15f67a;Game_BattlerBase[_0x42033b(0x38d)][_0x42033b(0x28c)]['call'](this),Game_CharacterBase['prototype']['initDragonbonesData'][_0x42033b(0x347)](this);},Game_Actor[_0x15f67a(0x38d)][_0x15f67a(0x35d)]=function(){const _0xae6493=_0x15f67a;Game_BattlerBase[_0xae6493(0x38d)][_0xae6493(0x35d)]['call'](this);const _0x535dc9=this[_0xae6493(0x3bd)]()['note'];Game_CharacterBase[_0xae6493(0x38d)][_0xae6493(0x2b6)][_0xae6493(0x347)](this,_0x535dc9);},Game_Actor[_0x15f67a(0x38d)]['dragonbonesSpriteData']=function(){const _0x54494e=_0x15f67a;if(this[_0x54494e(0x2cc)]!==undefined)return this[_0x54494e(0x2cc)];return this['initDragonbonesData'](),this[_0x54494e(0x35d)](),this[_0x54494e(0x2cc)];},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x2c0)]=Game_Event['prototype'][_0x15f67a(0x380)],Game_Event[_0x15f67a(0x38d)][_0x15f67a(0x380)]=function(){const _0x1c54b0=_0x15f67a;VisuMZ['DragonbonesUnion']['Game_Event_clearPageSettings'][_0x1c54b0(0x347)](this),this[_0x1c54b0(0x28c)]();},VisuMZ[_0x15f67a(0x215)]['Game_Event_setupPageSettings']=Game_Event[_0x15f67a(0x38d)][_0x15f67a(0x22b)],Game_Event[_0x15f67a(0x38d)][_0x15f67a(0x22b)]=function(){const _0x31c19a=_0x15f67a;VisuMZ[_0x31c19a(0x215)][_0x31c19a(0x22c)][_0x31c19a(0x347)](this),this[_0x31c19a(0x28c)](),this[_0x31c19a(0x35d)]();},Game_Event['prototype'][_0x15f67a(0x35d)]=function(){this['setupDragonbonesDataNotetags'](),this['setupDragonbonesDataCommentTags']();},Game_Event['prototype']['setupDragonbonesDataNotetags']=function(){const _0x53327e=_0x15f67a;if(!this[_0x53327e(0x216)]())return;const _0x2d9177=this[_0x53327e(0x216)]()[_0x53327e(0x33e)];if(_0x2d9177==='')return;this['checkDragonbonesStringTags'](_0x2d9177);},Game_Event[_0x15f67a(0x38d)][_0x15f67a(0x3c1)]=function(){const _0x201b91=_0x15f67a;if(!this[_0x201b91(0x216)]())return;if(!this[_0x201b91(0x39e)]())return;const _0xb25ccb=this[_0x201b91(0x232)]();let _0x4bd720='';for(const _0x3d21fc of _0xb25ccb){if([0x6c,0x198][_0x201b91(0x24c)](_0x3d21fc[_0x201b91(0x24b)])){if(_0x201b91(0x1de)==='XZweb'){if(_0x4bd720!=='')_0x4bd720+='\x0a';_0x4bd720+=_0x3d21fc[_0x201b91(0x2cd)][0x0];}else _0x5022f*=this[_0x201b91(0x384)]['realMoveSpeed'](),this[_0x201b91(0x384)]['isDashing']()?_0x5ba421*=_0x91e491[_0x201b91(0x203)]:_0x4ee283*=_0x376c39[_0x201b91(0x246)];}}this[_0x201b91(0x2b6)](_0x4bd720);},VisuMZ[_0x15f67a(0x215)]['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x15f67a(0x38d)][_0x15f67a(0x1df)],Game_Interpreter[_0x15f67a(0x38d)][_0x15f67a(0x1df)]=function(_0x5151f1){const _0x26327b=_0x15f67a;return $gameTemp[_0x26327b(0x2b0)](this),VisuMZ['DragonbonesUnion'][_0x26327b(0x3b3)]['call'](this,_0x5151f1);},VisuMZ['DragonbonesUnion'][_0x15f67a(0x378)]=Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x34a)],Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x34a)]=function(_0x2a2419){const _0x2829ab=_0x15f67a;this['initDragonbonesData'](),VisuMZ['DragonbonesUnion'][_0x2829ab(0x378)]['call'](this,_0x2a2419),this['createBaseDragonbonesSprite']();},Sprite_Character['prototype'][_0x15f67a(0x28c)]=function(){const _0x31877a=_0x15f67a;this[_0x31877a(0x386)]=null,this['_dragonbonesFilename']='',this[_0x31877a(0x252)]='';},Sprite_Character['prototype'][_0x15f67a(0x1fb)]=function(){const _0x16e2b9=_0x15f67a;this[_0x16e2b9(0x35c)]=new Sprite(),this[_0x16e2b9(0x259)](this[_0x16e2b9(0x35c)]);},VisuMZ[_0x15f67a(0x215)][_0x15f67a(0x3a2)]=Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x383)],Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x383)]=function(){const _0xc8269d=_0x15f67a;VisuMZ[_0xc8269d(0x215)][_0xc8269d(0x3a2)]['call'](this),this[_0xc8269d(0x367)]();},Sprite_Character[_0x15f67a(0x38d)]['disposeDragonbones']=function(){const _0x1ba9aa=_0x15f67a;this[_0x1ba9aa(0x386)]&&(this[_0x1ba9aa(0x35c)]['removeChild'](this['_dragonbones']),this[_0x1ba9aa(0x386)]['dispose'](),this[_0x1ba9aa(0x386)]=null,this[_0x1ba9aa(0x2bb)]='',this[_0x1ba9aa(0x252)]='');},Sprite_Character['prototype'][_0x15f67a(0x367)]=function(){const _0x4b49cd=_0x15f67a;if(!this['_character'])return this[_0x4b49cd(0x29a)]();if(!this[_0x4b49cd(0x384)]['hasDragonbones']())return this[_0x4b49cd(0x29a)]();this[_0x4b49cd(0x20b)]();if(!this[_0x4b49cd(0x386)])return;this[_0x4b49cd(0x397)](),this['updateDragonbonesProperties'](),this[_0x4b49cd(0x280)]();},Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x20b)]=function(){const _0x264316=_0x15f67a,_0x1ba40b=this[_0x264316(0x384)]['dragonbonesSpriteData']();if(this[_0x264316(0x2bb)]===_0x1ba40b[_0x264316(0x2f5)])return;this[_0x264316(0x29a)](),this[_0x264316(0x2bb)]=_0x1ba40b[_0x264316(0x2f5)],DragonbonesManager['loadArmature'](_0x1ba40b[_0x264316(0x2f5)],this['onLoadDragonbones'][_0x264316(0x368)](this));},Sprite_Character[_0x15f67a(0x38d)]['onLoadDragonbones']=function(){const _0x437ec6=_0x15f67a,_0x3551ca=this['_character']['dragonbonesSpriteData']();this['_dragonbones']=DragonbonesManager[_0x437ec6(0x35f)](_0x3551ca[_0x437ec6(0x2f5)]),this['updateDragonbonesAnimation'](),setTimeout(this[_0x437ec6(0x217)][_0x437ec6(0x368)](this),0x0);},Sprite_Character['prototype'][_0x15f67a(0x217)]=function(){const _0x1b6fcf=_0x15f67a;if(!this[_0x1b6fcf(0x386)])return;if(!this[_0x1b6fcf(0x35c)])return;this[_0x1b6fcf(0x35c)][_0x1b6fcf(0x257)](this['_dragonbones'],0x0);},Sprite_Character[_0x15f67a(0x38d)]['updateDragonbonesAnimation']=function(){const _0xd14a6e=_0x15f67a;if(!this[_0xd14a6e(0x386)])return;const _0x2b5bc9=this[_0xd14a6e(0x384)]['dragonbonesSpriteData'](),_0x15d699=this['_dragonbones'][_0xd14a6e(0x37c)],_0x3d3300=this[_0xd14a6e(0x384)][_0xd14a6e(0x1f4)](this[_0xd14a6e(0x386)]);if(_0x15d699[_0xd14a6e(0x29d)]){if('jbpFu'==='PlYFq')_0x31eec9[_0xd14a6e(0x2b1)]=_0x46758a(_0x1c3893['$1']);else{if(_0x3d3300&&_0x3d3300['match'](/(?:IDLE|WALK|DASH)(\d+)/i))this['_character'][_0xd14a6e(0x240)]='';else{if(this[_0xd14a6e(0x1ef)]())return;}this[_0xd14a6e(0x252)]='',_0x15d699[_0xd14a6e(0x1e4)]='';}}this[_0xd14a6e(0x252)]!==_0x3d3300&&(this['_dragonbonesAnimation']=_0x3d3300,this[_0xd14a6e(0x1fe)]());},Sprite_Character['prototype'][_0x15f67a(0x1ef)]=function(){const _0x11e765=_0x15f67a;if(!VisuMZ[_0x11e765(0x215)][_0x11e765(0x1f3)][_0x11e765(0x2d3)][_0x11e765(0x3cd)])return;const _0x6b00c=this[_0x11e765(0x386)]['animation'];return _0x6b00c[_0x11e765(0x343)][_0x11e765(0x2d0)]===0x1;},Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x1fe)]=function(){const _0x36f909=_0x15f67a;if(!this['_dragonbones'])return;const _0x141ba2=this['_dragonbones'][_0x36f909(0x37c)],_0x50b69d=this['_dragonbonesAnimation']['toLowerCase']()[_0x36f909(0x34f)]();if(_0x141ba2[_0x36f909(0x34c)][_0x50b69d]){if(_0x141ba2['lastAnimationName']===_0x50b69d&&_0x141ba2[_0x36f909(0x34c)][_0x50b69d][_0x36f909(0x2d0)]<=0x0)return;_0x141ba2['play'](_0x50b69d);}},Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x356)]=function(){const _0x280783=_0x15f67a;if(!this[_0x280783(0x386)])return;const _0x10a52d=this['_character'][_0x280783(0x3b6)]();this[_0x280783(0x386)]['x']=_0x10a52d['offsetX'],this[_0x280783(0x386)]['y']=_0x10a52d[_0x280783(0x326)],this[_0x280783(0x386)][_0x280783(0x35a)]['x']=_0x10a52d[_0x280783(0x2b1)]*this[_0x280783(0x2d5)](),this[_0x280783(0x386)][_0x280783(0x35a)]['y']=_0x10a52d[_0x280783(0x2b8)];},Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x2d5)]=function(){const _0x107666=_0x15f67a,_0x388586=this[_0x107666(0x384)][_0x107666(0x3b6)]();this[_0x107666(0x286)]=this[_0x107666(0x286)]||0x1;if(_0x388586[_0x107666(0x3d4)]&&[0x1,0x4,0x7]['includes'](this[_0x107666(0x384)]['direction']()))_0x107666(0x264)==='jAXoW'?(_0x1a56f8['DragonbonesUnion'][_0x107666(0x2a4)]['call'](this),this[_0x107666(0x2f6)]()&&this[_0x107666(0x235)]()):this[_0x107666(0x286)]=-0x1;else{if(_0x388586[_0x107666(0x37f)]&&[0x9,0x6,0x3][_0x107666(0x24c)](this[_0x107666(0x384)][_0x107666(0x28a)]()))_0x107666(0x3b8)!==_0x107666(0x3b8)?_0x1b02e1[_0x107666(0x27f)]=_0x532674(_0x8c3b0b['$1']):this['_dragonbonesFlipDirection']=-0x1;else![0x8,0x2][_0x107666(0x24c)](this[_0x107666(0x384)]['direction']())&&(this[_0x107666(0x286)]=0x1);}return this[_0x107666(0x286)];},Sprite_Character[_0x15f67a(0x38d)]['updateDragonbonesTimeScale']=function(){const _0x500d6f=_0x15f67a;if(!this[_0x500d6f(0x386)])return;const _0x446b86=this[_0x500d6f(0x384)]['dragonbonesSpriteData']();let _0x27e58e=_0x446b86[_0x500d6f(0x2f1)];this[_0x500d6f(0x384)]['isMoving']()&&(_0x500d6f(0x364)===_0x500d6f(0x364)?(_0x27e58e*=this[_0x500d6f(0x384)]['realMoveSpeed'](),this[_0x500d6f(0x384)][_0x500d6f(0x26b)]()?_0x500d6f(0x220)===_0x500d6f(0x230)?_0xb2083b[_0x500d6f(0x37f)]=![]:_0x27e58e*=_0x446b86[_0x500d6f(0x203)]:_0x500d6f(0x24a)!==_0x500d6f(0x2d8)?_0x27e58e*=_0x446b86[_0x500d6f(0x246)]:(_0x27e870[_0x500d6f(0x259)](_0x3e607f),_0x509769['x']=_0xbb7156[_0x500d6f(0x237)]/0x2,_0x2d13e0['y']=_0x4e2380[_0x500d6f(0x27f)]*0x3/0x4,_0x371103=_0xfb4b3||_0x4ee42e[_0x500d6f(0x2e6)],_0x539b15=_0x534cf8['toLowerCase'](),_0x3254cf[_0x500d6f(0x37c)]['animations'][_0x2b680a]&&_0x37dc87[_0x500d6f(0x37c)][_0x500d6f(0x296)](_0x264fc1))):(this[_0x500d6f(0x393)](_0x500d6f(0x38b)),_0x127fa2[_0x500d6f(0x215)]['Game_Actor_performAction'][_0x500d6f(0x347)](this,_0x2cc431))),this[_0x500d6f(0x386)][_0x500d6f(0x37c)][_0x500d6f(0x2f1)]=_0x27e58e;},VisuMZ[_0x15f67a(0x215)]['Sprite_Character_updateCharacterFrame']=Sprite_Character[_0x15f67a(0x38d)]['updateCharacterFrame'],Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x37a)]=function(){const _0x489adf=_0x15f67a;this[_0x489adf(0x384)]&&this[_0x489adf(0x384)][_0x489adf(0x3af)]()?this[_0x489adf(0x283)]():VisuMZ['DragonbonesUnion'][_0x489adf(0x2c3)][_0x489adf(0x347)](this);},Sprite_Character[_0x15f67a(0x38d)][_0x15f67a(0x283)]=function(){const _0x6f1230=_0x15f67a,_0x17751c=this[_0x6f1230(0x384)][_0x6f1230(0x3b6)](),_0x3e39a9=_0x17751c[_0x6f1230(0x27f)];this[_0x6f1230(0x242)](0x0,0x0,0x0,_0x3e39a9);};