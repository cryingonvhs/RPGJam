//=============================================================================
// VisuStella MZ - Bright Effects
// VisuMZ_2_BrightEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BrightEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BrightEffects = VisuMZ.BrightEffects || {};
VisuMZ.BrightEffects.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.07] [BrightEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Bright_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * This RPG Maker MZ plugin allows you to add various bright effects to your
 * game's maps and battle system. These effects can make the game appear more
 * vivid, light, and gives you control over the color settings of a particular
 * map to make a more distinct feeling, too. The bright effects can be changed
 * midway through events in both maps and battles, too.
 *
 * Features include all (but not limited to) the following:
 * 
 * * A Bloom filter effect that can help soften the feel of a map by giving
 *   objects on the screen a slight hazy glow.
 * * Godrays can be used to show animated sunlight coming down from the sky
 *   above.
 * * The Color Adjustment filter allows you to alter the brightness, contrast,
 *   and saturation levels of your maps and battles.
 * * The Tilt Shift filter creates a blur at the top and bottom sections of the
 *   screen to give a sense of proximity blurring.
 * * Plugin Commands that allow you to adjust these settings on the go.
 * * Notetags for maps to alter the Bloom, Godray, and Color Adjustments
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
 * * Pixi JS Filters*
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * New Effects
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Bloom
 * 
 * This filter puts a faint (or large) glow around lighter-colored objects on
 * the map to give them a softer, hazy, brighter feeling.
 * 
 * Properties:
 *
 * Scale: To adjust the strength of the bloom. Higher values is more
 * intense brightness.
 *
 * Brightness: The brightness, lower value is more subtle brightness, higher
 * value is blown-out.
 *
 * Threshold: Defines how bright a color needs to be to affect bloom.
 *
 * ---
 * 
 * Blur
 * 
 * The blur filter makes the screen appear less focused and more fuzzy. Details
 * become harder to distinguish and the like.
 * 
 * Properties:
 * 
 * Blur: Adjusts the blur strength. For best results, use numbers between 0 and
 * 5 where 0 is no blur and higher numbers mean higher blur strength. There are
 * no default Plugin Parameter settings for the Blur strength as it will
 * automatically default to 0 for best results.
 * 
 * ---
 *
 * Godray
 * 
 * The Godray filter puts down rays of light coming from the sky at an angle.
 * This is often used to represent sunlight peaking from above the clouds.
 * 
 * Properties:
 *
 * Visible: If on, the godrays will be visible by default. If off, they won't.
 *
 * Speed: The speed at which the light flickers. Lower for slower rate.
 * Higher for faster speeds.
 *
 * Gain: General intensity of the effect.
 *
 * Lacunarity: The density of the fractal noise.
 *
 * Angle: The angle/light-source direction of the rays.
 *
 * ---
 *
 * Color Adjustment
 * 
 * The Color Adjustment filter allows you to control the colors on the screen
 * to be more/less bright, contrast more/less, and more/less saturated.
 * 
 * Properties:
 *
 * Brightness: Adjusts the overall brightness of the screen. Use lower numbers
 * to make it darker and higher numbers to increase the brightness.
 *
 * Contrast: Increases the separation between dark and bright. Darker colors
 * become darker. Lighter colors become lighter. Increase this number to make
 * the effect more intense or decrease it to lessen it.
 *
 * Saturate: Adjusts the intensity of color on the screen. User higher numbers
 * to make colors more intense and lower numbers to make it less.
 *
 * ---
 * 
 * Tilt Shift
 * 
 * The Tilt Shift filter creates a blur at the upper and lower edges of the
 * screen with varying degrees of pixelation blur and gradient blur.
 * 
 * Properties:
 * 
 * Pixel Blur: What is the default pixel blur amount for tilt shift? Smaller
 * values mean less blur. Higher values mean more blur.
 * 
 * Gradient Blur: What is the default gradient blur amount for tilt shift?
 * Smaller values mean less gradient. Higher values mean more gradient.
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
 * VisuMZ_1_OptionsCore
 * 
 * As of the VisuStella MZ Options Core v1.10 update, both the Bright Effects
 * and Horror Effects plugins will be affected by the "Special Effects" option
 * found under the Options Core's General Settings. If the "Special Effects"
 * option is set to OFF, then the filter effects applied by those plugins will
 * also be disabled. They will be reenabled when the option is set back to ON.
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
 * === Bloom-Related Notetags ===
 * 
 * ---
 *
 * <Bloom Scale: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes the bloom scale to x for map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less bloom
 *   - Higher - More bloom
 *
 * ---
 *
 * <Bloom Brightness: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes the bloom brightness to x for map/battle
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Bloom Threshold: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes the bloom threshold to x for map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less picky
 *   - Higher - More picky
 *
 * ---
 *
 * <Bloom Horz Scale: x to y>
 * <Bloom Vert Scale: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Sets an adjusting scale when traveling left to right on the map
 *   (Horz) or up to down on the map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less bloom
 *   - Higher - More bloom
 *
 * ---
 *
 * <Bloom Horz Brightness: x to y>
 * <Bloom Vert Brightness: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Sets an adjusting brightness when traveling left to right on the
 *   map (Horz) or up to down on the map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Bloom Horz Threshold: x to y>
 * <Bloom Vert Threshold: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Sets an adjusting threshold when traveling left to right on the
 *   map (Horz) or up to down on the map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less picky
 *   - Higher - More picky
 *
 * ---
 * 
 * === Blur-Related Notetags ===
 * 
 * ---
 * 
 * <Blur: x>
 * 
 * - Used for: Map Notetags and Troop Names
 * - Changes the blur strength used for the screen to 'x'.
 * - Replace 'x' with a number representing the blur strength. For best
 *   results, use numbers between 0 and 5 where 0 is no blur and higher numbers
 *   mean higher blur strength.
 * 
 * ---
 * 
 * === Godray-Related Notetags ===
 * 
 * ---
 *
 * <Godray>
 * <No Godray>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes if there will be a godray on the map/battle regardless of the
 *   default settings in the plugin parameters.
 *
 * ---
 *
 * <Godray Speed: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the flickering speed of the rays.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Slower
 *   - Higher - Faster
 *
 * ---
 *
 * <Godray Gain: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the gain/intensity of the rays.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Lighter
 *   - Higher - Intense
 *
 * ---
 *
 * <Godray Lacunarity: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the lacunarity/density of the rays.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less dense
 *   - Higher - More dense
 *
 * ---
 *
 * <Godray Angle: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the angle of the rays.
 * - Replace 'x' with a number to represent the value. Use a negative or
 *   positive integer value.
 *   - Negative - Coming from the left
 *   - Positive - Coming from the right
 *
 * ---
 *
 * <Godray Horz Speed: x to y>
 * <Godray Vert Speed: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray speed going left to right on a map (Horz) or up
 *   to down on a map (Vert). 
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Slower
 *   - Higher - Faster
 *
 * ---
 *
 * <Godray Horz Gain: x to y>
 * <Godray Vert Gain: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray gain going left to right on a map (Horz) or up to
 *   down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Lighter
 *   - Higher - Intense
 *
 * ---
 *
 * <Godray Horz Lacunarity: x to y>
 * <Godray Vert Lacunarity: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray lacunarity going left to right on a map (Horz) or
 *   up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less dense
 *   - Higher - More dense
 *
 * ---
 *
 * <Godray Horz Angle: x to y>
 * <Godray Vert Angle: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray angle going left to right on a map (Horz) or up
 *   to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use a negative or
 *   positive integer values.
 *   - Negative - Coming from the left
 *   - Positive - Coming from the right
 *
 * ---
 * 
 * === Color Adjust-Related Notetags ===
 * 
 * ---
 *
 * <Color Adjust Brightness: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Alters the screen brightness for the map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Color Adjust Contrast: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the screen contrast for the map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less contrast
 *   - Higher - More contrast
 *
 * ---
 *
 * <Color Adjust Saturate: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the screen saturation for the map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Color Adjust Horz Brightness: x to y>
 * <Color Adjust Vert Brightness: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Alters the screen brightness when moving left to right on a map
 *   (Horz) or up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Color Adjust Horz Contrast: x to y>
 * <Color Adjust Vert Contrast: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts the screen contrast when moving left to right on a map
 *   (Horz) or up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less contrast
 *   - Higher - More contrast
 *
 * ---
 *
 * <Color Adjust Horz Saturate: x to y>
 * <Color Adjust Vert Saturate: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts the screen saturation when moving left to right on a map
 *   (Horz) or up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less intensity
 *   - Higher - More intensity
 *
 * ---
 * 
 * === Tilt Shift Notetags ===
 * 
 * ---
 * 
 * <Tilt Shift Pixel Blur: x>
 * 
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the tilt shift filter's pixel blur amount for the map/battle.
 * - Replace 'x' with a number to represent the blur intensity.
 *   - Lower = less blur
 *   - Higher = more blur
 * 
 * ---
 * 
 * <Tilt Shift Gradient Blur: x>
 * 
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the tilt shift filter's gradient blur amount for the map/battle.
 * - Replace 'x' with a number to represent the gradient blur distance.
 *   - Lower = less gradient
 *   - Higher = more gradient
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
 * === Bloom Plugin Commands ===
 * 
 * ---
 *
 * Bloom: Change Settings
 * - Change the Bloom filter settings for the screen.
 *
 *   Bloom Scale:
 *   - Change bloom scale for the screen.
 *
 *   Bloom Brightness:
 *   - Change bloom brightness for the screen.
 *
 *   Bloom Threshold:
 *   - Change bloom threshold for the screen.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 *
 * ---
 *
 * Bloom: Reset
 * - Reset the Bloom filter settings for the settings found in the Plugin
 *   Parameters or map notetags.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the reset to occur.
 *
 * ---
 * 
 * === Blur Plugin Commands ===
 * 
 * ---
 * 
 * Blur: Change Settings
 * - Change the Blur filter settings for the screen.
 * 
 *   Blur Strength:
 *   - Change blur strength for the screen.
 *   - For best results, use numbers between 0 and 5  where 0 is no blur and
 *     higher numbers mean higher blur strength.
 * 
 *   Blur Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 * ---
 * 
 * Blur: Reset
 * - Clears the Blur filter.
 * 
 *   Blur Duration:
 *   - The amount of time it takes for the reset to occur.
 * 
 * ---
 * 
 * === Godray Plugin Commands ===
 * 
 * ---
 *
 * Godray: Change Settings
 * - Change the Godray filter settings for the screen.
 *
 *   Visible?:
 *   - Show godrays on the screen?
 *   - Visibility changes are immediate.
 *
 *   Godray Speed:
 *   - Change godray speed for the screen.
 *
 *   Godray Gain:
 *   - Change godray gain for the screen.
 *
 *   Godray Lacunarity:
 *   - Change godray lacunarity for the screen.
 *
 *   Godray Angle:
 *   - Change godray angle for the screen.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 *   - Visibility changes are immediate.
 *
 * ---
 *
 * Godray: Reset
 * - Reset the Godray filter settings for the settings found in the Plugin
 *   Parameters or map notetags.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the reset to occur.
 *   - Visibility changes are immediate.
 *
 * ---
 * 
 * === Color Adjust Plugin Commands ===
 * 
 * ---
 *
 * Color Adjust: Change Settings
 * - Change the Color Adjustment filter settings for the screen.
 *
 *   Adjust Brightness:
 *   - Change color adjust brightness for the screen.
 *
 *   Adjust Contrast:
 *   - Change color adjust contrast for the screen.
 *
 *   Adjust Saturation:
 *   - Change color adjust saturation for the screen.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 *
 * ---
 *
 * Color Adjust: Reset
 * - Reset the Color Adjustment filter settings for the settings found in the
 *   Plugin Parameters or map notetags.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the reset to occur.
 *
 * ---
 * 
 * === Tilt Shift Plugin Commands ===
 * 
 * ---
 * 
 * Tilt Shift: Change Settings
 * - Change the Tilt Shift filter settings for the screen.
 * 
 *   Pixel Blur:
 *   - What is the default pixel blur amount for tilt shift?
 *   - Smaller = less blur. Higher = more blur.
 * 
 *   Gradient Blur:
 *   - What is the default gradient blur amount for tilt shift?
 *   - Smaller = less gradient. Higher = more gradient.
 * 
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 * ---
 * 
 * Tilt Shift: Reset
 * - Reset the Tilt Shift filter settings for the settings found in the
 *   Plugin Parameters or map notetags.
 * 
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 * 
 * This section is for the general plugin parameter settings.
 * 
 * ---
 * 
 * General
 * 
 *   Apply Base-Only?
 *   - Base-Only excludes pictures, timers, and weather.
 *   - Whole includes the above.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Bloom Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Bloom Settings
 * 
 *   Bloom Scale:
 *   - Default bloom scale for the screen unless changed through tags.
 * 
 *   Bloom Brightness:
 *   - Default bloom brightness for the screen unless changed through tags.
 * 
 *   Bloom Threshold:
 *   - Default bloom threshold for the screen unless changed through tags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Godray Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Godray Settings
 * 
 *   Default Visible?:
 *   - Show godrays on all screens by default unless changed through tags?
 * 
 *   Godray Speed:
 *   - Default godray speed for all screens unless changed through tags.
 * 
 *   Godray Gain:
 *   - Default godray gain for all screens unless changed through tags.
 * 
 *   Godray Lacunarity:
 *   - Default godray lacunarity for all screens unless changed through tags.
 * 
 *   Godray Angle:
 *   - Default godray angle for all screens unless changed through tags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Adjust Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Color Adjust Settings
 * 
 *   Adjust Brightness:
 *   - Default color adjust brightness for all screens unless changed
 *     through tags.
 * 
 *   Adjust Contrast:
 *   - Default color adjust contrast for all screens unless changed
 *     through tags.
 * 
 *   Adjust Saturation:
 *   - Default color adjust saturation for all screens unless changed
 *     through tags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tilt Shift Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Tilt Shift Settings
 * 
 *   Pixel Blur:
 *   - What is the default pixel blur amount for tilt shift?
 *   - Smaller = less blur. Higher = more blur.
 * 
 *   Gradient Blur:
 *   - What is the default gradient blur amount for tilt shift?
 *   - Smaller = less gradient. Higher = more gradient.
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
 * Version 1.07: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Olivia and sponsored by Archeia:
 * *** Blur
 * **** The blur filter makes the screen appear less focused and more fuzzy.
 *      Details become harder to distinguish and the like.
 * **** Notetags and Plugin Commands added.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: October 13, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Olivia and sponsored by Archeia:
 * *** Tilt Shift
 * **** The Tilt Shift filter creates a blur at the upper and lower edges of
 *      the screen with varying degrees of pixelation blur and gradient blur.
 * **** Plugin Parameters, Notetags, and Plugin Commands added.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.05: April 28, 2022
 * * Bug Fixes!
 * ** No longer crashes with event test play. Fix made by Olivia.
 * 
 * Version 1.04: March 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features:
 * ** New Plugin Parameters added: "Apply Base-Only?"
 * *** Base-Only excludes pictures, timers, and weather.
 * *** Whole includes the above.
 * 
 * Version 1.03: April 2, 2021
 * * Bug Fixes!
 * ** Changing scenes while a filter change is in transition will automatically
 *    load up the changes made to the filter to prevent desynchronization.
 *    Fix made by Olivia.
 * 
 * Version 1.02: March 12, 2021
 * * Compatibility Update!
 * ** Added compatibility with the VisuStella MZ Options Core v1.10 update.
 * *** When the "Special Effects" option is set to OFF, the filters for this
 *     plugin will be shut off. They will be returned to normal when set to ON.
 * * Documentation Update!
 * ** Added the Options Core section to the "Extra Features" list.
 * 
 * Version 1.01: December 25, 2020
 * * Bug Fixes!
 * ** Bright effects from battle should no longer carry back over into the
 *    map scene. Fix made by Yanfly.
 *
 * Version 1.00: January 18, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BloomChange
 * @text Bloom: Change Settings
 * @desc Change the Bloom filter settings for the screen.
 *
 * @arg Scale:num
 * @text Bloom Scale
 * @desc Change bloom scale for the screen.
 * @default 0.5
 *
 * @arg Brightness:num
 * @text Bloom Brightness
 * @desc Change bloom brightness for the screen.
 * @default 1.0
 *
 * @arg Threshold:num
 * @text Bloom Threshold
 * @desc Change bloom threshold for the screen.
 * @default 0.5
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BloomReset
 * @text Bloom: Reset
 * @desc Reset the Bloom filter settings for the settings found in
 * the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Blur
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BlurChange
 * @text Blur: Change Settings
 * @desc Change the Blur filter settings for the screen.
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the screen.
 * For best results, use numbers between 0 and 5.
 * @default 2.0
 *
 * @arg Duration:num
 * @text Blur Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BlurReset
 * @text Blur: Reset
 * @desc Clears the Blur filter.
 *
 * @arg Duration:num
 * @text Blur Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Godray
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GodrayChange
 * @text Godray: Change Settings
 * @desc Change the Godray filter settings for the screen.
 *
 * @arg Visible:eval
 * @text Visible?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show godrays on the screen?
 * Visibility changes are immediate.
 * @default true
 *
 * @arg Speed:num
 * @text Godray Speed
 * @desc Change godray speed for the screen.
 * @default 0.01
 *
 * @arg Gain:num
 * @text Godray Gain
 * @desc Change godray gain for the screen.
 * @default 0.6
 *
 * @arg Lacunarity:num
 * @text Godray Lacunarity
 * @desc Change godray lacunarity for the screen.
 * @default 2.0
 *
 * @arg Angle:num
 * @text Godray Angle
 * @desc Change godray angle for the screen.
 * @default -30
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * Visibility changes are immediate.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GodrayReset
 * @text Godray: Reset
 * @desc Reset the Godray filter settings for the settings
 * found in the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * Visibility changes are immediate.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ColorAdjust
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ColorAdjustChange
 * @text Color Adjust: Change Settings
 * @desc Change the Color Adjustment filter settings for the screen.
 *
 * @arg Brightness:num
 * @text Adjust Brightness
 * @desc Change color adjust brightness for the screen.
 * @default 1.0
 *
 * @arg Contrast:num
 * @text Adjust Contrast
 * @desc Change color adjust contrast for the screen.
 * @default 0.0
 *
 * @arg Saturate:num
 * @text Adjust Saturation
 * @desc Change color adjust saturation for the screen.
 * @default 0.0
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ColorAdjustReset
 * @text Color Adjust: Reset
 * @desc Reset the Color Adjustment filter settings for the settings
 * found in the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TiltShift
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TiltShiftChange
 * @text Tilt Shift: Change Settings
 * @desc Change the Tilt Shift filter settings for the screen.
 *
 * @arg Blur:num
 * @text Pixel Blur
 * @desc What is the default pixel blur amount for tilt shift?
 * Smaller = less blur. Higher = more blur.
 * @default 24
 *
 * @arg GradientBlur:num
 * @text Gradient Blur
 * @desc What is the default gradient blur amount for tilt shift?
 * Smaller = less gradient. Higher = more gradient.
 * @default 1000
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TiltShiftReset
 * @text Tilt Shift: Reset
 * @desc Reset the Tilt Shift filter settings for the settings
 * found in the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
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
 * @param BrightEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Map
 * @text Map Defaults
 *
 * @param MapBaseFilter:eval
 * @text Apply Base-Only?
 * @parent Map
 * @type boolean
 * @on Base-Only
 * @off Apply Whole
 * @desc Base-Only excludes pictures, timers, and weather.
 * Whole includes the above.
 * @default true
 *
 * @param MapBloom:struct
 * @text Bloom Settings
 * @parent Map
 * @type struct<Bloom>
 * @desc Default bloom settings for all maps.
 * @default {"Scale:num":"0.5","Brightness:num":"1.0","Threshold:num":"0.5"}
 *
 * @param MapGodray:struct
 * @text Godray Settings
 * @parent Map
 * @type struct<Godray>
 * @desc Default Godray settings for all maps.
 * @default {"Visible:eval":"false","Speed:num":"0.01","Gain:num":"0.6","Lacunarity:num":"2.0","Angle:num":"-30"}
 *
 * @param MapColorAdjust:struct
 * @text Color Adjust Settings
 * @parent Map
 * @type struct<ColorAdjust>
 * @desc Default color adjustment settings for all maps.
 * @default {"Brightness:num":"1.0","Contrast:num":"0.0","Saturate:num":"0.0"}
 *
 * @param MapTiltShift:struct
 * @text Tilt Shift Settings
 * @parent Map
 * @type struct<TiltShift>
 * @desc Default tilt shift adjustment settings for all maps.
 * @default {"Blur:num":"24","GradientBlur:num":"1000"}
 * 
 * @param Battle
 * @text Battle Defaults
 *
 * @param BattleBaseFilter:eval
 * @text Apply Base-Only?
 * @parent Battle
 * @type boolean
 * @on Base-Only
 * @off Apply Whole
 * @desc Base-Only excludes pictures, timers, and weather.
 * Whole includes the above.
 * @default true
 *
 * @param BattleBloom:struct
 * @text Bloom Settings
 * @parent Battle
 * @type struct<Bloom>
 * @desc Default bloom settings for all battles.
 * @default {"Scale:num":"0.5","Brightness:num":"1.0","Threshold:num":"0.5"}
 *
 * @param BattleGodray:struct
 * @text Godray Settings
 * @parent Battle
 * @type struct<Godray>
 * @desc Default Godray settings for all battles.
 * @default {"Visible:eval":"false","Speed:num":"0.01","Gain:num":"0.6","Lacunarity:num":"2.0","Angle:num":"-30"}
 *
 * @param BattleColorAdjust:struct
 * @text Color Adjust Settings
 * @parent Battle
 * @type struct<ColorAdjust>
 * @desc Default color adjustment settings for all battles.
 * @default {"Brightness:num":"1.0","Contrast:num":"0.0","Saturate:num":"0.0"}
 *
 * @param BattleTiltShift:struct
 * @text Tilt Shift Settings
 * @parent Battle
 * @type struct<TiltShift>
 * @desc Default tilt shift adjustment settings for all battles.
 * @default {"Blur:num":"0","GradientBlur:num":"1600"}
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
 * Bloom Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Bloom:
 *
 * @param Scale:num
 * @text Bloom Scale
 * @desc Default bloom scale for the screen unless changed through tags.
 * @default 0.5
 *
 * @param Brightness:num
 * @text Bloom Brightness
 * @desc Default bloom brightness for the screen unless changed through tags.
 * @default 1.0
 *
 * @param Threshold:num
 * @text Bloom Threshold
 * @desc Default bloom threshold for the screen unless changed through tags.
 * @default 0.5
 *
 */
/* ----------------------------------------------------------------------------
 * Godray Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Godray:
 *
 * @param Visible:eval
 * @text Default Visible?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show godrays on all screens by default unless changed through tags?
 * @default false
 *
 * @param Speed:num
 * @text Godray Speed
 * @desc Default godray speed for all screens unless changed through tags.
 * @default 0.01
 *
 * @param Gain:num
 * @text Godray Gain
 * @desc Default godray gain for all screens unless changed through tags.
 * @default 0.6
 *
 * @param Lacunarity:num
 * @text Godray Lacunarity
 * @desc Default godray lacunarity for all screens unless changed through tags.
 * @default 2.0
 *
 * @param Angle:num
 * @text Godray Angle
 * @desc Default godray angle for all screens unless changed through tags.
 * @default -30
 *
 */
/* ----------------------------------------------------------------------------
 * Color Adjust Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ColorAdjust:
 *
 * @param Brightness:num
 * @text Adjust Brightness
 * @desc Default color adjust brightness for all screens unless changed through tags.
 * @default 1.0
 *
 * @param Contrast:num
 * @text Adjust Contrast
 * @desc Default color adjust contrast for all screens unless changed through tags.
 * @default 0.0
 *
 * @param Saturate:num
 * @text Adjust Saturation
 * @desc Default color adjust saturation for all screens unless changed through tags.
 * @default 0.0
 *
 */
/* ----------------------------------------------------------------------------
 * Tilt Shift Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TiltShift:
 *
 * @param Blur:num
 * @text Pixel Blur
 * @desc What is the default pixel blur amount for tilt shift?
 * Smaller = less blur. Higher = more blur.
 * @default 24
 *
 * @param GradientBlur:num
 * @text Gradient Blur
 * @desc What is the default gradient blur amount for tilt shift?
 * Smaller = less gradient. Higher = more gradient.
 * @default 1000
 *
 */
//=============================================================================

var _0x5bce1a=_0x52df;function _0x52df(_0x446aef,_0x3fc3a7){var _0x4f8858=_0x4f88();return _0x52df=function(_0x52dfbb,_0x384e8a){_0x52dfbb=_0x52dfbb-0xad;var _0xa5c210=_0x4f8858[_0x52dfbb];return _0xa5c210;},_0x52df(_0x446aef,_0x3fc3a7);}function _0x4f88(){var _0x8e5495=['_brightEffectsColorAdjustVertBrightness','FUNC','23504mChdRc','_BrightEffectsTiltShiftSettingsMap','_brightEffectsGodrayVertSpeed','_BrightEffectsGodraySettingsBattle','Game_Map_setup','Spriteset_Base_update','Spriteset_Base_createOverallFilters','update','_BrightEffectsBlurFilter','setBrightEffectsColorAdjustSettings','_brightEffectsColorAdjustVertContrast','_brightEffectsColorAdjustHorzContrast','push','createBrightEffectsGodrayFilter','200VFrHdO','BrightEffects','Threshold','duration','_brightEffectsGodrayHorzGain','_BrightEffectsColorAdjustSettingsBattle','BattleColorAdjust','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_brightEffectsGodrayVertGain','_brightEffectsBloomVertBrightness','ARRAYEVAL','getBrightEffectsTiltShiftSettings','exit','call','Lacunarity','setupBrightEffectsColorAdjustFilter','MapColorAdjust','updateMapBrightEffectsColorAdjust','currentGradientBlur','angle','map','ARRAYFUNC','start','_BrightEffectsTiltShiftFilter','ColorAdjustChange','note','max','createBrightEffectsTiltShiftFilter','format','_BrightEffectsColorAdjustFilter','width','_brightEffectsBloomHorzBrightness','filter','GodrayChange','_BrightEffectsAdvBloomFilter','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','match','_brightEffectsBloomHorzScale','BlurFilter','getBrightEffectsBlurSettings','setupBrightEffectsGodrayFilter','_BrightEffectsGodrayFilter','NUM','parameters','filters','Settings','setupBrightEffectsFilters','MapBaseFilter','Scale','currentContrast','setBrightEffectsGodraySettings','currentPixelBlur','currentSaturate','ARRAYSTRUCT','prototype','constructor','updateBrightEffectsGodrayFilter','AdvancedBloomFilter','_baseSprite','Gain','_brightEffectsGodrayVertLacunarity','bloomScale','troop','ARRAYSTR','Duration','BlurChange','_scene','updateBrightEffectsColorAdjustFilter','updateBrightEffectsAdvBloomFilter','_realX','brightEffectsBaseOnly','tileHeight','trim','3440504ZSFfmV','setupBrightEffectsBlurFilter','getBrightEffectsColorAdjustSettings','_brightEffectsColorAdjustHorzBrightness','status','createBrightEffectsFilters','setupBrightEffectsAdvBloomFilter','shiftY','enabled','lacunarity','12ZVwYdO','Visible','Brightness','specialEffects','end','GodrayFilter','updateBrightEffectsBlurFilter','getBrightEffectsGodraySettings','blur','_brightEffectsGodrayHorzSpeed','BloomChange','setBrightEffectsBlurSettings','getBrightEffectsAdvBloomSettings','_BrightEffectsBlurSettingsBattle','_BrightEffectsAdvBloomSettingsBattle','_BrightEffectsTiltShiftSettingsBattle','updateMapBrightEffectsGodray','name','3164864BLutMJ','Speed','parse','createBrightEffectsBlurFilter','STR','currentBlur','gradientBlur','ConvertParams','Saturate','pixelBlur','currentBrightness','_brightEffectsColorAdjustVertSaturate','tileFocus','ColorMatrixFilter','gain','_brightEffectsBloomVertThreshold','GodrayReset','isSceneBattle','brightness','_brightEffectsGodrayHorzAngle','locate','_realY','updateBrightEffectsTiltShiftFilter','Scene_Battle_start','time','_brightEffectsBloomHorzThreshold','Angle','setup','description','toUpperCase','_BrightEffectsGodraySettingsMap','createBrightEffectsAdvBloomFilter','getMapEnhanceScreenY','_brightEffectsColorAdjustHorzSaturate','height','Game_Player_update','505683HbDBTM','zoomScale','TiltShiftChange','updateMapBrightEffects','updateBrightEffectsFilters','min','createBrightEffectsColorAdjustFilter','_BrightEffectsColorAdjustSettingsMap','setBrightEffectsAdvBloomSettings','return\x200','1383072yYCbVp','TiltShiftReset','ARRAYJSON','saturate','setMapEnhanceTiltShiftFilterY','_BrightEffectsAdvBloomSettingsMap','threshold','VisuMZ_3_MapCameraZoom','registerCommand','BRIGHT_EFFECTS_BASE_ONLY','BattleTiltShift','21pvqOTm','speed','ColorAdjustReset','BattleGodray','updateMapBrightEffectsAdvBloom','MapTiltShift','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Contrast','_brightEffectsGodrayVertAngle','setBrightEffectsTiltShiftSettings','2307564vSSrWy','setupBrightEffectsTiltShiftFilter','createOverallFilters','_brightEffectsBloomVertScale','GradientBlur','visible','329790liMrgE','Blur','contrast','TiltShiftFilter','_brightEffectsGodrayHorzLacunarity','Game_CharacterBase_locate','_BrightEffectsBlurSettingsMap'];_0x4f88=function(){return _0x8e5495;};return _0x4f88();}(function(_0x4f2782,_0x217082){var _0x27ac6d=_0x52df,_0x4c6654=_0x4f2782();while(!![]){try{var _0x575c7f=parseInt(_0x27ac6d(0xf7))/0x1+-parseInt(_0x27ac6d(0xd3))/0x2+parseInt(_0x27ac6d(0xe8))/0x3+parseInt(_0x27ac6d(0x14e))/0x4+parseInt(_0x27ac6d(0xee))/0x5*(-parseInt(_0x27ac6d(0x158))/0x6)+-parseInt(_0x27ac6d(0xde))/0x7*(parseInt(_0x27ac6d(0x16a))/0x8)+-parseInt(_0x27ac6d(0xc9))/0x9*(-parseInt(_0x27ac6d(0x105))/0xa);if(_0x575c7f===_0x217082)break;else _0x4c6654['push'](_0x4c6654['shift']());}catch(_0x11095d){_0x4c6654['push'](_0x4c6654['shift']());}}}(_0x4f88,0xbb14a));var label=_0x5bce1a(0x106),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x5bce1a(0x125)](function(_0xd26e22){var _0x39e72c=_0x5bce1a;return _0xd26e22[_0x39e72c(0x152)]&&_0xd26e22['description']['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x5bce1a(0x171)]=function(_0x2a275e,_0x2254a1){var _0x48bd78=_0x5bce1a;for(const _0x585ab7 in _0x2254a1){if(_0x585ab7[_0x48bd78(0x129)](/(.*):(.*)/i)){const _0x5847ed=String(RegExp['$1']),_0x328361=String(RegExp['$2'])[_0x48bd78(0xc2)]()[_0x48bd78(0x14d)]();let _0x2bdaac,_0x5640a8,_0x7d0f3e;switch(_0x328361){case _0x48bd78(0x12f):_0x2bdaac=_0x2254a1[_0x585ab7]!==''?Number(_0x2254a1[_0x585ab7]):0x0;break;case'ARRAYNUM':_0x5640a8=_0x2254a1[_0x585ab7]!==''?JSON[_0x48bd78(0x16c)](_0x2254a1[_0x585ab7]):[],_0x2bdaac=_0x5640a8[_0x48bd78(0x119)](_0x5a31b1=>Number(_0x5a31b1));break;case'EVAL':_0x2bdaac=_0x2254a1[_0x585ab7]!==''?eval(_0x2254a1[_0x585ab7]):null;break;case _0x48bd78(0x10f):_0x5640a8=_0x2254a1[_0x585ab7]!==''?JSON[_0x48bd78(0x16c)](_0x2254a1[_0x585ab7]):[],_0x2bdaac=_0x5640a8[_0x48bd78(0x119)](_0x1bd949=>eval(_0x1bd949));break;case'JSON':_0x2bdaac=_0x2254a1[_0x585ab7]!==''?JSON['parse'](_0x2254a1[_0x585ab7]):'';break;case _0x48bd78(0xd5):_0x5640a8=_0x2254a1[_0x585ab7]!==''?JSON[_0x48bd78(0x16c)](_0x2254a1[_0x585ab7]):[],_0x2bdaac=_0x5640a8['map'](_0xb1c139=>JSON['parse'](_0xb1c139));break;case _0x48bd78(0xf6):_0x2bdaac=_0x2254a1[_0x585ab7]!==''?new Function(JSON[_0x48bd78(0x16c)](_0x2254a1[_0x585ab7])):new Function(_0x48bd78(0xd2));break;case _0x48bd78(0x11a):_0x5640a8=_0x2254a1[_0x585ab7]!==''?JSON[_0x48bd78(0x16c)](_0x2254a1[_0x585ab7]):[],_0x2bdaac=_0x5640a8['map'](_0x21ee76=>new Function(JSON[_0x48bd78(0x16c)](_0x21ee76)));break;case _0x48bd78(0x16e):_0x2bdaac=_0x2254a1[_0x585ab7]!==''?String(_0x2254a1[_0x585ab7]):'';break;case _0x48bd78(0x144):_0x5640a8=_0x2254a1[_0x585ab7]!==''?JSON[_0x48bd78(0x16c)](_0x2254a1[_0x585ab7]):[],_0x2bdaac=_0x5640a8[_0x48bd78(0x119)](_0xb67103=>String(_0xb67103));break;case'STRUCT':_0x7d0f3e=_0x2254a1[_0x585ab7]!==''?JSON[_0x48bd78(0x16c)](_0x2254a1[_0x585ab7]):{},_0x2bdaac=VisuMZ[_0x48bd78(0x171)]({},_0x7d0f3e);break;case _0x48bd78(0x13a):_0x5640a8=_0x2254a1[_0x585ab7]!==''?JSON[_0x48bd78(0x16c)](_0x2254a1[_0x585ab7]):[],_0x2bdaac=_0x5640a8[_0x48bd78(0x119)](_0xe944f6=>VisuMZ[_0x48bd78(0x171)]({},JSON[_0x48bd78(0x16c)](_0xe944f6)));break;default:continue;}_0x2a275e[_0x5847ed]=_0x2bdaac;}}return _0x2a275e;},(_0x134ece=>{var _0x50b4fc=_0x5bce1a;const _0x21e50d=_0x134ece[_0x50b4fc(0x169)];for(const _0x3a7fd1 of dependencies){if(!Imported[_0x3a7fd1]){alert(_0x50b4fc(0xe4)['format'](_0x21e50d,_0x3a7fd1)),SceneManager['exit']();break;}}const _0x36784b=_0x134ece[_0x50b4fc(0xc1)];if(_0x36784b['match'](/\[Version[ ](.*?)\]/i)){const _0x3865d8=Number(RegExp['$1']);_0x3865d8!==VisuMZ[label]['version']&&(alert(_0x50b4fc(0x10c)[_0x50b4fc(0x121)](_0x21e50d,_0x3865d8)),SceneManager[_0x50b4fc(0x111)]());}if(_0x36784b[_0x50b4fc(0x129)](/\[Tier[ ](\d+)\]/i)){const _0x2bbc92=Number(RegExp['$1']);_0x2bbc92<tier?(alert(_0x50b4fc(0x128)[_0x50b4fc(0x121)](_0x21e50d,_0x2bbc92,tier)),SceneManager[_0x50b4fc(0x111)]()):tier=Math['max'](_0x2bbc92,tier);}VisuMZ[_0x50b4fc(0x171)](VisuMZ[label][_0x50b4fc(0x132)],_0x134ece[_0x50b4fc(0x130)]);})(pluginData),PluginManager[_0x5bce1a(0xdb)](pluginData['name'],_0x5bce1a(0x162),_0x59e9bc=>{var _0x12a540=_0x5bce1a;VisuMZ[_0x12a540(0x171)](_0x59e9bc,_0x59e9bc);const _0x59f8b7=$gameScreen[_0x12a540(0x164)]();_0x59f8b7['bloomScale']=_0x59e9bc[_0x12a540(0x135)],_0x59f8b7[_0x12a540(0xb7)]=_0x59e9bc['Brightness'],_0x59f8b7[_0x12a540(0xd9)]=_0x59e9bc[_0x12a540(0x107)],_0x59f8b7[_0x12a540(0x108)]=_0x59e9bc[_0x12a540(0x145)],!SceneManager[_0x12a540(0xb6)]()&&($gameMap['_brightEffectsBloomHorzBrightness']=undefined,$gameMap[_0x12a540(0x10e)]=undefined);}),PluginManager[_0x5bce1a(0xdb)](pluginData[_0x5bce1a(0x169)],'BloomReset',_0xe2644a=>{var _0x43f773=_0x5bce1a;VisuMZ[_0x43f773(0x171)](_0xe2644a,_0xe2644a);SceneManager[_0x43f773(0xb6)]()?$gameTroop[_0x43f773(0x154)]():$gameMap[_0x43f773(0x154)]();const _0x42dc28=$gameScreen[_0x43f773(0x164)]();_0x42dc28[_0x43f773(0x108)]=_0xe2644a[_0x43f773(0x145)];}),PluginManager['registerCommand'](pluginData[_0x5bce1a(0x169)],_0x5bce1a(0x146),_0x46e5c8=>{var _0x89f5a0=_0x5bce1a;VisuMZ['ConvertParams'](_0x46e5c8,_0x46e5c8);const _0x334721=$gameScreen[_0x89f5a0(0x12c)]();_0x334721['blur']=_0x46e5c8['Blur'],_0x334721[_0x89f5a0(0x108)]=_0x46e5c8[_0x89f5a0(0x145)];}),PluginManager[_0x5bce1a(0xdb)](pluginData[_0x5bce1a(0x169)],'BlurReset',_0x242602=>{var _0x18d323=_0x5bce1a;VisuMZ[_0x18d323(0x171)](_0x242602,_0x242602);SceneManager[_0x18d323(0xb6)]()?$gameTroop[_0x18d323(0x14f)]():$gameMap[_0x18d323(0x14f)]();const _0x49df14=$gameScreen[_0x18d323(0x12c)]();_0x49df14[_0x18d323(0x108)]=_0x242602['Duration'];}),PluginManager[_0x5bce1a(0xdb)](pluginData[_0x5bce1a(0x169)],_0x5bce1a(0x126),_0xa89c10=>{var _0x428aa9=_0x5bce1a;VisuMZ[_0x428aa9(0x171)](_0xa89c10,_0xa89c10);const _0xb967a2=$gameScreen[_0x428aa9(0x15f)]();_0xb967a2[_0x428aa9(0xed)]=_0xa89c10[_0x428aa9(0x159)],_0xb967a2[_0x428aa9(0xdf)]=_0xa89c10[_0x428aa9(0x16b)],_0xb967a2[_0x428aa9(0xb3)]=_0xa89c10[_0x428aa9(0x140)],_0xb967a2[_0x428aa9(0x157)]=_0xa89c10['Lacunarity'],_0xb967a2[_0x428aa9(0x118)]=_0xa89c10[_0x428aa9(0xbf)],_0xb967a2[_0x428aa9(0x108)]=_0xa89c10[_0x428aa9(0x145)],!SceneManager[_0x428aa9(0xb6)]()&&($gameMap[_0x428aa9(0x161)]=undefined,$gameMap['_brightEffectsGodrayVertSpeed']=undefined);}),PluginManager[_0x5bce1a(0xdb)](pluginData[_0x5bce1a(0x169)],_0x5bce1a(0xb5),_0x3fbbd0=>{var _0xce72f6=_0x5bce1a;VisuMZ[_0xce72f6(0x171)](_0x3fbbd0,_0x3fbbd0);SceneManager[_0xce72f6(0xb6)]()?$gameTroop['setupBrightEffectsGodrayFilter']():$gameMap[_0xce72f6(0x12d)]();const _0x122690=$gameScreen['getBrightEffectsGodraySettings']();_0x122690[_0xce72f6(0x108)]=_0x3fbbd0[_0xce72f6(0x145)];}),PluginManager[_0x5bce1a(0xdb)](pluginData[_0x5bce1a(0x169)],_0x5bce1a(0x11d),_0x37c413=>{var _0x357d80=_0x5bce1a;VisuMZ[_0x357d80(0x171)](_0x37c413,_0x37c413);const _0x1b6ba2=$gameScreen[_0x357d80(0x150)]();_0x1b6ba2['brightness']=_0x37c413[_0x357d80(0x15a)],_0x1b6ba2[_0x357d80(0xf0)]=_0x37c413[_0x357d80(0xe5)],_0x1b6ba2[_0x357d80(0xd6)]=_0x37c413[_0x357d80(0xad)],_0x1b6ba2['duration']=_0x37c413[_0x357d80(0x145)],!SceneManager[_0x357d80(0xb6)]()&&($gameMap[_0x357d80(0xc6)]=undefined,$gameMap[_0x357d80(0xb0)]=undefined);}),PluginManager[_0x5bce1a(0xdb)](pluginData['name'],_0x5bce1a(0xe0),_0x3412ba=>{var _0x461d6d=_0x5bce1a;VisuMZ[_0x461d6d(0x171)](_0x3412ba,_0x3412ba);SceneManager[_0x461d6d(0xb6)]()?$gameTroop[_0x461d6d(0x114)]():$gameMap[_0x461d6d(0x114)]();const _0xcfaae9=$gameScreen[_0x461d6d(0x150)]();_0xcfaae9[_0x461d6d(0x108)]=_0x3412ba[_0x461d6d(0x145)];}),PluginManager[_0x5bce1a(0xdb)](pluginData['name'],_0x5bce1a(0xcb),_0x42aaa4=>{var _0x274950=_0x5bce1a;VisuMZ['ConvertParams'](_0x42aaa4,_0x42aaa4);const _0x30a33c=$gameScreen[_0x274950(0x110)]();_0x30a33c['pixelBlur']=_0x42aaa4[_0x274950(0xef)],_0x30a33c['gradientBlur']=_0x42aaa4[_0x274950(0xec)],_0x30a33c['duration']=_0x42aaa4['Duration'];}),PluginManager[_0x5bce1a(0xdb)](pluginData[_0x5bce1a(0x169)],_0x5bce1a(0xd4),_0x5919c9=>{var _0x2c3242=_0x5bce1a;VisuMZ[_0x2c3242(0x171)](_0x5919c9,_0x5919c9);SceneManager['isSceneBattle']()?$gameTroop[_0x2c3242(0xe9)]():$gameMap[_0x2c3242(0xe9)]();const _0x708644=$gameScreen[_0x2c3242(0x110)]();_0x708644[_0x2c3242(0x108)]=_0x5919c9[_0x2c3242(0x145)];}),SceneManager[_0x5bce1a(0xb6)]=function(){var _0x2e0415=_0x5bce1a;return this['_scene']&&this[_0x2e0415(0x147)][_0x2e0415(0x13c)]===Scene_Battle;},SceneManager['isSceneMap']=function(){var _0x31e927=_0x5bce1a;return this[_0x31e927(0x147)]&&this[_0x31e927(0x147)][_0x31e927(0x13c)]===Scene_Map;},Game_Screen[_0x5bce1a(0x13b)]['setBrightEffectsAdvBloomSettings']=function(_0x1ec751,_0x46b3d1,_0x126f92,_0x116535){var _0x2aaa40=_0x5bce1a;SceneManager[_0x2aaa40(0xb6)]()?this[_0x2aaa40(0x166)]={'bloomScale':_0x1ec751,'brightness':_0x46b3d1,'threshold':_0x126f92,'duration':_0x116535||0x0}:this[_0x2aaa40(0xd8)]={'bloomScale':_0x1ec751,'brightness':_0x46b3d1,'threshold':_0x126f92,'duration':_0x116535||0x0};},Game_Screen['prototype'][_0x5bce1a(0x164)]=function(){var _0x1caa27=_0x5bce1a;return SceneManager[_0x1caa27(0xb6)]()?(this['_BrightEffectsAdvBloomSettingsBattle']===undefined&&$gameTroop['setupBrightEffectsAdvBloomFilter'](),this[_0x1caa27(0x166)]):(this['_BrightEffectsAdvBloomSettingsMap']===undefined&&$gameMap['setupBrightEffectsAdvBloomFilter'](),this[_0x1caa27(0xd8)]);},Game_Screen[_0x5bce1a(0x13b)][_0x5bce1a(0x137)]=function(_0x332150,_0x4db479,_0xfb560d,_0x55be6b,_0x299a27,_0x335a0d){var _0x1166c8=_0x5bce1a;SceneManager[_0x1166c8(0xb6)]()?this[_0x1166c8(0xfa)]={'visible':_0x332150,'speed':_0x4db479,'gain':_0xfb560d,'lacunarity':_0x55be6b,'angle':_0x299a27,'duration':_0x335a0d||0x0}:this[_0x1166c8(0xc3)]={'visible':_0x332150,'speed':_0x4db479,'gain':_0xfb560d,'lacunarity':_0x55be6b,'angle':_0x299a27,'duration':_0x335a0d||0x0};},Game_Screen[_0x5bce1a(0x13b)][_0x5bce1a(0x15f)]=function(){var _0x48fbad=_0x5bce1a;return SceneManager[_0x48fbad(0xb6)]()?(this[_0x48fbad(0xfa)]===undefined&&$gameTroop['setupBrightEffectsGodrayFilter'](),this['_BrightEffectsGodraySettingsBattle']):(this[_0x48fbad(0xc3)]===undefined&&$gameMap[_0x48fbad(0x12d)](),this[_0x48fbad(0xc3)]);},Game_Screen[_0x5bce1a(0x13b)]['setBrightEffectsColorAdjustSettings']=function(_0x304d85,_0x275f63,_0x595ca8,_0x4b7cf7){var _0x350132=_0x5bce1a;SceneManager[_0x350132(0xb6)]()?this[_0x350132(0x10a)]={'brightness':_0x304d85,'contrast':_0x275f63,'saturate':_0x595ca8,'duration':_0x4b7cf7||0x0}:this[_0x350132(0xd0)]={'brightness':_0x304d85,'contrast':_0x275f63,'saturate':_0x595ca8,'duration':_0x4b7cf7||0x0};},Game_Screen[_0x5bce1a(0x13b)][_0x5bce1a(0x150)]=function(){var _0x2fb503=_0x5bce1a;return SceneManager[_0x2fb503(0xb6)]()?(this[_0x2fb503(0x10a)]===undefined&&$gameTroop[_0x2fb503(0x114)](),this['_BrightEffectsColorAdjustSettingsBattle']):(this[_0x2fb503(0xd0)]===undefined&&$gameMap[_0x2fb503(0x114)](),this[_0x2fb503(0xd0)]);},Game_Screen[_0x5bce1a(0x13b)][_0x5bce1a(0xe7)]=function(_0x3f357a,_0x55130d,_0x4026a2){var _0x28f499=_0x5bce1a;SceneManager['isSceneBattle']()?this[_0x28f499(0x167)]={'pixelBlur':_0x3f357a,'gradientBlur':_0x55130d,'duration':_0x4026a2||0x0}:this[_0x28f499(0xf8)]={'pixelBlur':_0x3f357a,'gradientBlur':_0x55130d,'duration':_0x4026a2||0x0};},Game_Screen[_0x5bce1a(0x13b)]['getBrightEffectsTiltShiftSettings']=function(){var _0x1b8d44=_0x5bce1a;return SceneManager[_0x1b8d44(0xb6)]()?(this['_BrightEffectsTiltShiftSettingsBattle']===undefined&&$gameTroop['setupBrightEffectsTiltShiftFilter'](),this['_BrightEffectsTiltShiftSettingsBattle']):(this['_BrightEffectsTiltShiftSettingsMap']===undefined&&$gameMap[_0x1b8d44(0xe9)](),this[_0x1b8d44(0xf8)]);},Game_Screen[_0x5bce1a(0x13b)][_0x5bce1a(0x163)]=function(_0x1942c5,_0x291053){var _0x5670af=_0x5bce1a;SceneManager[_0x5670af(0xb6)]()?this[_0x5670af(0x165)]={'blur':_0x1942c5||0x0,'duration':_0x291053||0x0}:this['_BrightEffectsBlurSettingsMap']={'blur':_0x1942c5||0x0,'duration':_0x291053||0x0};},Game_Screen[_0x5bce1a(0x13b)][_0x5bce1a(0x12c)]=function(){var _0x46738b=_0x5bce1a;return SceneManager[_0x46738b(0xb6)]()?(this[_0x46738b(0x165)]===undefined&&$gameTroop[_0x46738b(0x14f)](),this[_0x46738b(0x165)]):(this[_0x46738b(0xf4)]===undefined&&$gameMap['setupBrightEffectsBlurFilter'](),this[_0x46738b(0xf4)]);},VisuMZ['BrightEffects'][_0x5bce1a(0xbc)]=Scene_Battle[_0x5bce1a(0x13b)][_0x5bce1a(0x11b)],Scene_Battle[_0x5bce1a(0x13b)][_0x5bce1a(0x11b)]=function(){var _0x11835c=_0x5bce1a;VisuMZ['BrightEffects']['Scene_Battle_start'][_0x11835c(0x112)](this),$gameTroop['setupBrightEffectsFilters']();},Game_Troop[_0x5bce1a(0x13b)]['setupBrightEffectsFilters']=function(){var _0x5af668=_0x5bce1a;this[_0x5af668(0x154)](),this[_0x5af668(0x12d)](),this[_0x5af668(0x114)](),this[_0x5af668(0xe9)](),this[_0x5af668(0x14f)]();},Game_Troop[_0x5bce1a(0x13b)][_0x5bce1a(0x154)]=function(){var _0x59ee82=_0x5bce1a;const _0x59708f=VisuMZ['BrightEffects'][_0x59ee82(0x132)]['BattleBloom'];var _0xefb56c=_0x59708f[_0x59ee82(0x135)],_0x1fb44b=_0x59708f[_0x59ee82(0x15a)],_0x5da07b=_0x59708f['Threshold'];if(!!this['troop']()){var _0x437efb=this[_0x59ee82(0x143)]()[_0x59ee82(0x169)];if(_0x437efb[_0x59ee82(0x129)](/<BLOOM SCALE: (.*)>/i))var _0xefb56c=Number(RegExp['$1'])||0x0;if(_0x437efb[_0x59ee82(0x129)](/<BLOOM BRIGHTNESS: (.*)>/i))var _0x1fb44b=Number(RegExp['$1'])||0x0;if(_0x437efb[_0x59ee82(0x129)](/<BLOOM THRESHOLD: (.*)>/i))var _0x5da07b=Number(RegExp['$1'])||0x0;}$gameScreen['setBrightEffectsAdvBloomSettings'](_0xefb56c,_0x1fb44b,_0x5da07b,0x0);},Game_Troop[_0x5bce1a(0x13b)]['setupBrightEffectsGodrayFilter']=function(){var _0x14c234=_0x5bce1a;const _0x47f33e=VisuMZ['BrightEffects'][_0x14c234(0x132)][_0x14c234(0xe1)];var _0x308b2f=_0x47f33e[_0x14c234(0x159)],_0x157314=_0x47f33e[_0x14c234(0x16b)],_0x3331fa=_0x47f33e[_0x14c234(0x140)],_0x23d85a=_0x47f33e[_0x14c234(0x113)],_0xfdaff2=_0x47f33e[_0x14c234(0xbf)];if(!!this[_0x14c234(0x143)]()){var _0x2f44f0=this[_0x14c234(0x143)]()[_0x14c234(0x169)];if(_0x2f44f0[_0x14c234(0x129)](/<GODRAY>/i))_0x308b2f=!![];else _0x2f44f0[_0x14c234(0x129)](/<NO GODRAY>/i)&&(_0x308b2f=![]);_0x2f44f0[_0x14c234(0x129)](/<GODRAY SPEED: (.*)>/i)&&(_0x157314=Number(RegExp['$1'])||0x0),_0x2f44f0[_0x14c234(0x129)](/<GODRAY GAIN: (.*)>/i)&&(_0x3331fa=Number(RegExp['$1'])||0x0),_0x2f44f0[_0x14c234(0x129)](/<GODRAY LACUNARITY: (.*)>/i)&&(_0x23d85a=Number(RegExp['$1'])||0x0),_0x2f44f0[_0x14c234(0x129)](/<GODRAY ANGLE: (.*)>/i)&&(_0xfdaff2=Number(RegExp['$1'])||0x0);}$gameScreen[_0x14c234(0x137)](_0x308b2f,_0x157314,_0x3331fa,_0x23d85a,_0xfdaff2,0x0);},Game_Troop[_0x5bce1a(0x13b)]['setupBrightEffectsColorAdjustFilter']=function(){var _0x1f5218=_0x5bce1a;const _0x4f54c2=VisuMZ[_0x1f5218(0x106)][_0x1f5218(0x132)][_0x1f5218(0x10b)];var _0x3bdf66=_0x4f54c2[_0x1f5218(0x15a)],_0x50add3=_0x4f54c2['Contrast'],_0x2fba1b=_0x4f54c2[_0x1f5218(0xad)];if(!!this[_0x1f5218(0x143)]()){var _0x515ee1=this['troop']()[_0x1f5218(0x169)];if(_0x515ee1[_0x1f5218(0x129)](/<COLOR ADJUST BRIGHTNESS: (.*)>/i))var _0x3bdf66=Number(RegExp['$1'])||0x0;if(_0x515ee1[_0x1f5218(0x129)](/<COLOR ADJUST CONTRAST: (.*)>/i))var _0x50add3=Number(RegExp['$1'])||0x0;if(_0x515ee1['match'](/<COLOR ADJUST SATURATE: (.*)>/i))var _0x2fba1b=Number(RegExp['$1'])||0x0;}$gameScreen[_0x1f5218(0x100)](_0x3bdf66,_0x50add3,_0x2fba1b,0x0);},Game_Troop[_0x5bce1a(0x13b)][_0x5bce1a(0xe9)]=function(){var _0x525153=_0x5bce1a;const _0x39aaeb=VisuMZ[_0x525153(0x106)][_0x525153(0x132)][_0x525153(0xdd)];let _0xfdba6=_0x39aaeb[_0x525153(0xef)],_0x59b4cc=_0x39aaeb[_0x525153(0xec)];if(!!this['troop']()){const _0x2239d8=this[_0x525153(0x143)]()[_0x525153(0x169)];_0x2239d8['match'](/<(?:TILTSHIFT|TILT SHIFT) PIXEL BLUR:[ ](\d+)>/i)&&(_0xfdba6=Number(RegExp['$1'])),_0x2239d8[_0x525153(0x129)](/<(?:TILTSHIFT|TILT SHIFT) (?:GRAD|GRADIENT) BLUR:[ ](\d+)>/i)&&(_0x59b4cc=Number(RegExp['$1']));}$gameScreen[_0x525153(0xe7)](_0xfdba6,_0x59b4cc,0x0);},Game_Troop[_0x5bce1a(0x13b)][_0x5bce1a(0x14f)]=function(){var _0x52a191=_0x5bce1a;let _0xe06af3=0x0;if(!!this['troop']()){const _0x302c6a=this[_0x52a191(0x143)]()[_0x52a191(0x169)];_0x302c6a[_0x52a191(0x129)](/<BLUR:[ ](.*?)>/i)&&(_0xe06af3=Number(RegExp['$1']));}$gameScreen[_0x52a191(0x163)](_0xe06af3,0x0);},VisuMZ[_0x5bce1a(0x106)][_0x5bce1a(0xfb)]=Game_Map[_0x5bce1a(0x13b)][_0x5bce1a(0xc0)],Game_Map['prototype'][_0x5bce1a(0xc0)]=function(_0x239d6e){var _0x3338f6=_0x5bce1a;VisuMZ['BrightEffects']['Game_Map_setup'][_0x3338f6(0x112)](this,_0x239d6e),!!$dataMap&&this[_0x3338f6(0x133)]();},Game_Map[_0x5bce1a(0x13b)]['setupBrightEffectsFilters']=function(){var _0x102c05=_0x5bce1a;this[_0x102c05(0x154)](),this[_0x102c05(0x12d)](),this[_0x102c05(0x114)](),this[_0x102c05(0xe9)](),$gamePlayer[_0x102c05(0xcc)]();},Game_Map[_0x5bce1a(0x13b)][_0x5bce1a(0x154)]=function(){var _0x4a6da3=_0x5bce1a;const _0x217eab=VisuMZ[_0x4a6da3(0x106)][_0x4a6da3(0x132)]['MapBloom'];var _0x40b24b=_0x217eab['Scale'],_0x235768=_0x217eab['Brightness'],_0x3c63ca=_0x217eab[_0x4a6da3(0x107)];this[_0x4a6da3(0x12a)]=undefined,this['_brightEffectsBloomVertScale']=undefined,this[_0x4a6da3(0x124)]=undefined,this[_0x4a6da3(0x10e)]=undefined,this[_0x4a6da3(0xbe)]=undefined,this['_brightEffectsBloomVertThreshold']=undefined;if($dataMap){var _0x171bec=$dataMap[_0x4a6da3(0x11e)]||'';if(_0x171bec[_0x4a6da3(0x129)](/<BLOOM SCALE: (.*)>/i))var _0x40b24b=Number(RegExp['$1'])||0x0;if(_0x171bec['match'](/<BLOOM BRIGHTNESS: (.*)>/i))var _0x235768=Number(RegExp['$1'])||0x0;if(_0x171bec['match'](/<BLOOM THRESHOLD: (.*)>/i))var _0x3c63ca=Number(RegExp['$1'])||0x0;_0x171bec['match'](/<BLOOM (?:HORZ|HORIZONTAL) SCALE: (.*) TO (.*)>/i)&&(this[_0x4a6da3(0x12a)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x4a6da3(0xeb)]=undefined),_0x171bec[_0x4a6da3(0x129)](/<BLOOM (?:VERT|VERTICAL) SCALE: (.*) TO (.*)>/i)&&(this[_0x4a6da3(0x12a)]=undefined,this[_0x4a6da3(0xeb)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x171bec['match'](/<BLOOM (?:HORZ|HORIZONTAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this['_brightEffectsBloomHorzBrightness']=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x4a6da3(0x10e)]=undefined),_0x171bec['match'](/<BLOOM (?:VERT|VERTICAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this[_0x4a6da3(0x124)]=undefined,this[_0x4a6da3(0x10e)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x171bec[_0x4a6da3(0x129)](/<BLOOM (?:HORZ|HORIZONTAL) THRESHOLD: (.*) TO (.*)>/i)&&(this[_0x4a6da3(0xbe)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x4a6da3(0xb4)]=undefined),_0x171bec[_0x4a6da3(0x129)](/<BLOOM (?:VERT|VERTICAL) THRESHOLD: (.*) TO (.*)>/i)&&(this[_0x4a6da3(0xbe)]=undefined,this[_0x4a6da3(0xb4)]=[Number(RegExp['$1']),Number(RegExp['$2'])]);}$gameScreen[_0x4a6da3(0xd1)](_0x40b24b,_0x235768,_0x3c63ca,0x0);},Game_Map[_0x5bce1a(0x13b)][_0x5bce1a(0x12d)]=function(){var _0x211300=_0x5bce1a;const _0x2e7078=VisuMZ[_0x211300(0x106)]['Settings']['MapGodray'];var _0xf42e29=_0x2e7078[_0x211300(0x159)],_0x52d3fc=_0x2e7078[_0x211300(0x16b)],_0x542e5b=_0x2e7078[_0x211300(0x140)],_0x56bcf9=_0x2e7078[_0x211300(0x113)],_0x16eb9d=_0x2e7078[_0x211300(0xbf)];this[_0x211300(0x161)]=undefined,this[_0x211300(0xf9)]=undefined,this[_0x211300(0x109)]=undefined,this['_brightEffectsGodrayVertGain']=undefined,this['_brightEffectsGodrayHorzLacunarity']=undefined,this[_0x211300(0x141)]=undefined,this[_0x211300(0xb8)]=undefined,this[_0x211300(0xe6)]=undefined;if($dataMap){var _0x5e8a65=$dataMap[_0x211300(0x11e)]||'';if(_0x5e8a65[_0x211300(0x129)](/<GODRAY>/i))_0xf42e29=!![];else _0x5e8a65[_0x211300(0x129)](/<NO GODRAY>/i)&&(_0xf42e29=![]);_0x5e8a65[_0x211300(0x129)](/<GODRAY SPEED: (.*)>/i)&&(_0x52d3fc=Number(RegExp['$1'])||0x0),_0x5e8a65['match'](/<GODRAY GAIN: (.*)>/i)&&(_0x542e5b=Number(RegExp['$1'])||0x0),_0x5e8a65[_0x211300(0x129)](/<GODRAY LACUNARITY: (.*)>/i)&&(_0x56bcf9=Number(RegExp['$1'])||0x0),_0x5e8a65[_0x211300(0x129)](/<GODRAY ANGLE: (.*)>/i)&&(_0x16eb9d=Number(RegExp['$1'])||0x0),_0x5e8a65[_0x211300(0x129)](/<GODRAY (?:HORZ|HORIZONTAL) SPEED: (.*) TO (.*)>/i)&&(this[_0x211300(0x161)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x211300(0xf9)]=undefined),_0x5e8a65[_0x211300(0x129)](/<GODRAY (?:VERT|VERTICAL) SPEED: (.*) TO (.*)>/i)&&(this[_0x211300(0x161)]=undefined,this[_0x211300(0xf9)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x5e8a65[_0x211300(0x129)](/<GODRAY (?:HORZ|HORIZONTAL) GAIN: (.*) TO (.*)>/i)&&(this[_0x211300(0x109)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x211300(0x10d)]=undefined),_0x5e8a65[_0x211300(0x129)](/<GODRAY (?:VERT|VERTICAL) GAIN: (.*) TO (.*)>/i)&&(this[_0x211300(0x109)]=undefined,this[_0x211300(0x10d)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x5e8a65[_0x211300(0x129)](/<GODRAY (?:HORZ|HORIZONTAL) LACUNARITY: (.*) TO (.*)>/i)&&(this[_0x211300(0xf2)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this['_brightEffectsGodrayVertLacunarity']=undefined),_0x5e8a65[_0x211300(0x129)](/<GODRAY (?:VERT|VERTICAL) LACUNARITY: (.*) TO (.*)>/i)&&(this[_0x211300(0xf2)]=undefined,this[_0x211300(0x141)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x5e8a65[_0x211300(0x129)](/<GODRAY (?:HORZ|HORIZONTAL) ANGLE: (.*) TO (.*)>/i)&&(this[_0x211300(0xb8)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x211300(0xe6)]=undefined),_0x5e8a65[_0x211300(0x129)](/<GODRAY (?:VERT|VERTICAL) ANGLE: (.*) TO (.*)>/i)&&(this['_brightEffectsGodrayHorzAngle']=undefined,this[_0x211300(0xe6)]=[Number(RegExp['$1']),Number(RegExp['$2'])]);}$gameScreen['setBrightEffectsGodraySettings'](_0xf42e29,_0x52d3fc,_0x542e5b,_0x56bcf9,_0x16eb9d,0x0);},Game_Map['prototype'][_0x5bce1a(0x114)]=function(){var _0x4bf353=_0x5bce1a;const _0x2f1774=VisuMZ[_0x4bf353(0x106)]['Settings'][_0x4bf353(0x115)];var _0x35c102=_0x2f1774[_0x4bf353(0x15a)],_0x53be6d=_0x2f1774['Contrast'],_0x1a4b29=_0x2f1774[_0x4bf353(0xad)];this[_0x4bf353(0x151)]=undefined,this[_0x4bf353(0xf5)]=undefined,this[_0x4bf353(0x102)]=undefined,this[_0x4bf353(0x101)]=undefined,this[_0x4bf353(0xc6)]=undefined,this['_brightEffectsColorAdjustVertSaturate']=undefined;if($dataMap){var _0x523639=$dataMap[_0x4bf353(0x11e)]||'';if(_0x523639[_0x4bf353(0x129)](/<COLOR ADJUST BRIGHTNESS: (.*)>/i))var _0x35c102=Number(RegExp['$1'])||0x0;if(_0x523639[_0x4bf353(0x129)](/<COLOR ADJUST CONTRAST: (.*)>/i))var _0x53be6d=Number(RegExp['$1'])||0x0;if(_0x523639[_0x4bf353(0x129)](/<COLOR ADJUST SATURATE: (.*)>/i))var _0x1a4b29=Number(RegExp['$1'])||0x0;_0x523639[_0x4bf353(0x129)](/<COLOR ADJUST (?:HORZ|HORIZONTAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this['_brightEffectsColorAdjustHorzBrightness']=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x4bf353(0xf5)]=undefined),_0x523639[_0x4bf353(0x129)](/<COLOR ADJUST (?:VERT|VERTICAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this[_0x4bf353(0x151)]=undefined,this[_0x4bf353(0xf5)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x523639[_0x4bf353(0x129)](/<COLOR ADJUST (?:HORZ|HORIZONTAL) CONTRAST: (.*) TO (.*)>/i)&&(this[_0x4bf353(0x102)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x4bf353(0x101)]=undefined),_0x523639[_0x4bf353(0x129)](/<COLOR ADJUST (?:VERT|VERTICAL) CONTRAST: (.*) TO (.*)>/i)&&(this['_brightEffectsColorAdjustHorzContrast']=undefined,this[_0x4bf353(0x101)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x523639[_0x4bf353(0x129)](/<COLOR ADJUST (?:HORZ|HORIZONTAL) SATURATE: (.*) TO (.*)>/i)&&(this[_0x4bf353(0xc6)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x4bf353(0xb0)]=undefined),_0x523639[_0x4bf353(0x129)](/<COLOR ADJUST (?:VERT|VERTICAL) SATURATE: (.*) TO (.*)>/i)&&(this['_brightEffectsColorAdjustHorzSaturate']=undefined,this[_0x4bf353(0xb0)]=[Number(RegExp['$1']),Number(RegExp['$2'])]);}$gameScreen[_0x4bf353(0x100)](_0x35c102,_0x53be6d,_0x1a4b29,0x0);},Game_Map[_0x5bce1a(0x13b)][_0x5bce1a(0xe9)]=function(){var _0x4eea22=_0x5bce1a;const _0x48bd64=VisuMZ[_0x4eea22(0x106)][_0x4eea22(0x132)][_0x4eea22(0xe3)];let _0x574d45=_0x48bd64[_0x4eea22(0xef)],_0x1ccc71=_0x48bd64[_0x4eea22(0xec)];if($dataMap){const _0x2e0901=$dataMap[_0x4eea22(0x11e)]||'';_0x2e0901['match'](/<(?:TILTSHIFT|TILT SHIFT) PIXEL BLUR:[ ](\d+)>/i)&&(_0x574d45=Number(RegExp['$1'])),_0x2e0901[_0x4eea22(0x129)](/<(?:TILTSHIFT|TILT SHIFT) (?:GRAD|GRADIENT) BLUR:[ ](\d+)>/i)&&(_0x1ccc71=Number(RegExp['$1']));}$gameScreen[_0x4eea22(0xe7)](_0x574d45,_0x1ccc71,0x0);},Game_Map[_0x5bce1a(0x13b)]['setupBrightEffectsBlurFilter']=function(){var _0x4c9eda=_0x5bce1a;let _0x313f1d=0x0;if($dataMap){const _0x5307b1=$dataMap[_0x4c9eda(0x11e)]||'';_0x5307b1[_0x4c9eda(0x129)](/<BLUR:[ ](.*?)>/i)&&(_0x313f1d=Number(RegExp['$1']));}$gameScreen['setBrightEffectsBlurSettings'](_0x313f1d,0x0);},VisuMZ['BrightEffects'][_0x5bce1a(0xf3)]=Game_CharacterBase[_0x5bce1a(0x13b)]['locate'],Game_CharacterBase[_0x5bce1a(0x13b)][_0x5bce1a(0xb9)]=function(_0x210f1f,_0x416731){var _0x5e09f7=_0x5bce1a;VisuMZ[_0x5e09f7(0x106)][_0x5e09f7(0xf3)]['call'](this,_0x210f1f,_0x416731),this===$gamePlayer&&this[_0x5e09f7(0xcc)]();},VisuMZ[_0x5bce1a(0x106)][_0x5bce1a(0xc8)]=Game_Player[_0x5bce1a(0x13b)]['update'],Game_Player[_0x5bce1a(0x13b)][_0x5bce1a(0xfe)]=function(_0x2c624f){var _0x536791=_0x5bce1a;VisuMZ[_0x536791(0x106)][_0x536791(0xc8)][_0x536791(0x112)](this,_0x2c624f),this[_0x536791(0xcc)]();},Game_Player[_0x5bce1a(0x13b)]['updateMapBrightEffects']=function(){var _0xd7a4ea=_0x5bce1a;if(ConfigManager[_0xd7a4ea(0x15b)]===![])return;this[_0xd7a4ea(0xe2)](),this[_0xd7a4ea(0x168)](),this[_0xd7a4ea(0x116)]();},Game_Player[_0x5bce1a(0x13b)][_0x5bce1a(0xe2)]=function(){var _0xe2fdef=_0x5bce1a,_0x47c9ff=$gameScreen[_0xe2fdef(0x164)](),_0x223450=_0x47c9ff[_0xe2fdef(0x142)],_0x4929b0=_0x47c9ff['brightness'],_0x592d0d=_0x47c9ff['threshold'];if($gameMap[_0xe2fdef(0x12a)]!==undefined)var _0x3ca5f5=$gameMap['_brightEffectsBloomHorzScale'][0x0],_0x1d4bae=$gameMap[_0xe2fdef(0x12a)][0x1]-_0x3ca5f5,_0x452b8d=$gamePlayer[_0xe2fdef(0x14a)]/$gameMap[_0xe2fdef(0x123)](),_0x223450=_0x3ca5f5+_0x1d4bae*_0x452b8d;else{if($gameMap[_0xe2fdef(0xeb)]!==undefined)var _0x3ca5f5=$gameMap[_0xe2fdef(0xeb)][0x0],_0x1d4bae=$gameMap[_0xe2fdef(0xeb)][0x1]-_0x3ca5f5,_0x452b8d=$gamePlayer[_0xe2fdef(0xba)]/$gameMap[_0xe2fdef(0xc7)](),_0x223450=_0x3ca5f5+_0x1d4bae*_0x452b8d;}if($gameMap[_0xe2fdef(0x124)]!==undefined)var _0x3ca5f5=$gameMap[_0xe2fdef(0x124)][0x0],_0x1d4bae=$gameMap[_0xe2fdef(0x124)][0x1]-_0x3ca5f5,_0x452b8d=$gamePlayer[_0xe2fdef(0x14a)]/$gameMap[_0xe2fdef(0x123)](),_0x4929b0=_0x3ca5f5+_0x1d4bae*_0x452b8d;else{if($gameMap['_brightEffectsBloomVertBrightness']!==undefined)var _0x3ca5f5=$gameMap[_0xe2fdef(0x10e)][0x0],_0x1d4bae=$gameMap[_0xe2fdef(0x10e)][0x1]-_0x3ca5f5,_0x452b8d=$gamePlayer[_0xe2fdef(0xba)]/$gameMap[_0xe2fdef(0xc7)](),_0x4929b0=_0x3ca5f5+_0x1d4bae*_0x452b8d;}if($gameMap['_brightEffectsBloomHorzThreshold']!==undefined)var _0x3ca5f5=$gameMap[_0xe2fdef(0xbe)][0x0],_0x1d4bae=$gameMap[_0xe2fdef(0xbe)][0x1]-_0x3ca5f5,_0x452b8d=$gamePlayer[_0xe2fdef(0x14a)]/$gameMap['width'](),_0x592d0d=_0x3ca5f5+_0x1d4bae*_0x452b8d;else{if($gameMap[_0xe2fdef(0xb4)]!==undefined)var _0x3ca5f5=$gameMap[_0xe2fdef(0xb4)][0x0],_0x1d4bae=$gameMap[_0xe2fdef(0xb4)][0x1]-_0x3ca5f5,_0x452b8d=$gamePlayer[_0xe2fdef(0xba)]/$gameMap['height'](),_0x592d0d=_0x3ca5f5+_0x1d4bae*_0x452b8d;}$gameScreen[_0xe2fdef(0xd1)](_0x223450,_0x4929b0,_0x592d0d,_0x47c9ff[_0xe2fdef(0x108)]);},Game_Player[_0x5bce1a(0x13b)][_0x5bce1a(0x168)]=function(){var _0xfa1975=_0x5bce1a,_0x26ce40=$gameScreen[_0xfa1975(0x15f)](),_0x453d7d=_0x26ce40[_0xfa1975(0xed)],_0xf00237=_0x26ce40[_0xfa1975(0xdf)],_0x4b2d3d=_0x26ce40[_0xfa1975(0xb3)],_0x18696c=_0x26ce40[_0xfa1975(0x157)],_0x52f3e9=_0x26ce40[_0xfa1975(0x118)];if($gameMap[_0xfa1975(0x161)]!==undefined)var _0x268165=$gameMap[_0xfa1975(0x161)][0x0],_0x43b3f9=$gameMap[_0xfa1975(0x161)][0x1]-_0x268165,_0x81227e=$gamePlayer['_realX']/$gameMap['width'](),_0xf00237=_0x268165+_0x43b3f9*_0x81227e;else{if($gameMap[_0xfa1975(0xeb)]!==undefined)var _0x268165=$gameMap[_0xfa1975(0xf9)][0x0],_0x43b3f9=$gameMap[_0xfa1975(0xf9)][0x1]-_0x268165,_0x81227e=$gamePlayer[_0xfa1975(0xba)]/$gameMap['height'](),_0xf00237=_0x268165+_0x43b3f9*_0x81227e;}if($gameMap[_0xfa1975(0x109)]!==undefined)var _0x268165=$gameMap[_0xfa1975(0x109)][0x0],_0x43b3f9=$gameMap[_0xfa1975(0x109)][0x1]-_0x268165,_0x81227e=$gamePlayer[_0xfa1975(0x14a)]/$gameMap[_0xfa1975(0x123)](),_0x4b2d3d=_0x268165+_0x43b3f9*_0x81227e;else{if($gameMap['_brightEffectsGodrayVertGain']!==undefined)var _0x268165=$gameMap[_0xfa1975(0x10d)][0x0],_0x43b3f9=$gameMap[_0xfa1975(0x10d)][0x1]-_0x268165,_0x81227e=$gamePlayer[_0xfa1975(0xba)]/$gameMap['height'](),_0x4b2d3d=_0x268165+_0x43b3f9*_0x81227e;}if($gameMap[_0xfa1975(0xf2)]!==undefined)var _0x268165=$gameMap[_0xfa1975(0xf2)][0x0],_0x43b3f9=$gameMap['_brightEffectsGodrayHorzLacunarity'][0x1]-_0x268165,_0x81227e=$gamePlayer[_0xfa1975(0x14a)]/$gameMap['width'](),_0x18696c=_0x268165+_0x43b3f9*_0x81227e;else{if($gameMap['_brightEffectsGodrayVertLacunarity']!==undefined)var _0x268165=$gameMap[_0xfa1975(0x141)][0x0],_0x43b3f9=$gameMap[_0xfa1975(0x141)][0x1]-_0x268165,_0x81227e=$gamePlayer[_0xfa1975(0xba)]/$gameMap['height'](),_0x18696c=_0x268165+_0x43b3f9*_0x81227e;}if($gameMap[_0xfa1975(0xb8)]!==undefined)var _0x268165=$gameMap[_0xfa1975(0xb8)][0x0],_0x43b3f9=$gameMap[_0xfa1975(0xb8)][0x1]-_0x268165,_0x81227e=$gamePlayer[_0xfa1975(0x14a)]/$gameMap[_0xfa1975(0x123)](),_0x52f3e9=_0x268165+_0x43b3f9*_0x81227e;else{if($gameMap[_0xfa1975(0xe6)]!==undefined)var _0x268165=$gameMap['_brightEffectsGodrayVertAngle'][0x0],_0x43b3f9=$gameMap[_0xfa1975(0xe6)][0x1]-_0x268165,_0x81227e=$gamePlayer[_0xfa1975(0xba)]/$gameMap[_0xfa1975(0xc7)](),_0x52f3e9=_0x268165+_0x43b3f9*_0x81227e;}$gameScreen[_0xfa1975(0x137)](_0x453d7d,_0xf00237,_0x4b2d3d,_0x18696c,_0x52f3e9,_0x26ce40[_0xfa1975(0x108)]);},Game_Player[_0x5bce1a(0x13b)][_0x5bce1a(0x116)]=function(){var _0x1fed93=_0x5bce1a,_0x37c6e3=$gameScreen[_0x1fed93(0x150)](),_0x14968e=_0x37c6e3['brightness'],_0x20642a=_0x37c6e3[_0x1fed93(0xf0)],_0x118472=_0x37c6e3[_0x1fed93(0xd6)];if($gameMap[_0x1fed93(0x151)]!==undefined)var _0x1b09fd=$gameMap[_0x1fed93(0x151)][0x0],_0x3b515a=$gameMap[_0x1fed93(0x151)][0x1]-_0x1b09fd,_0x58cac2=$gamePlayer[_0x1fed93(0x14a)]/$gameMap['width'](),_0x14968e=_0x1b09fd+_0x3b515a*_0x58cac2;else{if($gameMap['_brightEffectsColorAdjustVertBrightness']!==undefined)var _0x1b09fd=$gameMap[_0x1fed93(0xf5)][0x0],_0x3b515a=$gameMap[_0x1fed93(0xf5)][0x1]-_0x1b09fd,_0x58cac2=$gamePlayer['_realY']/$gameMap[_0x1fed93(0xc7)](),_0x14968e=_0x1b09fd+_0x3b515a*_0x58cac2;}if($gameMap[_0x1fed93(0x102)]!==undefined)var _0x1b09fd=$gameMap[_0x1fed93(0x102)][0x0],_0x3b515a=$gameMap['_brightEffectsColorAdjustHorzContrast'][0x1]-_0x1b09fd,_0x58cac2=$gamePlayer[_0x1fed93(0x14a)]/$gameMap['width'](),_0x20642a=_0x1b09fd+_0x3b515a*_0x58cac2;else{if($gameMap[_0x1fed93(0x101)]!==undefined)var _0x1b09fd=$gameMap[_0x1fed93(0x101)][0x0],_0x3b515a=$gameMap[_0x1fed93(0x101)][0x1]-_0x1b09fd,_0x58cac2=$gamePlayer[_0x1fed93(0xba)]/$gameMap['height'](),_0x20642a=_0x1b09fd+_0x3b515a*_0x58cac2;}if($gameMap['_brightEffectsColorAdjustHorzSaturate']!==undefined)var _0x1b09fd=$gameMap['_brightEffectsColorAdjustHorzSaturate'][0x0],_0x3b515a=$gameMap[_0x1fed93(0xc6)][0x1]-_0x1b09fd,_0x58cac2=$gamePlayer[_0x1fed93(0x14a)]/$gameMap['width'](),_0x118472=_0x1b09fd+_0x3b515a*_0x58cac2;else{if($gameMap[_0x1fed93(0xb0)]!==undefined)var _0x1b09fd=$gameMap[_0x1fed93(0xb0)][0x0],_0x3b515a=$gameMap['_brightEffectsColorAdjustVertSaturate'][0x1]-_0x1b09fd,_0x58cac2=$gamePlayer[_0x1fed93(0xba)]/$gameMap[_0x1fed93(0xc7)](),_0x118472=_0x1b09fd+_0x3b515a*_0x58cac2;}$gameScreen['setBrightEffectsColorAdjustSettings'](_0x14968e,_0x20642a,_0x118472,_0x37c6e3[_0x1fed93(0x108)]);},Spriteset_Base['BRIGHT_EFFECTS_BASE_ONLY']=![],Spriteset_Map[_0x5bce1a(0xdc)]=VisuMZ['BrightEffects']['Settings'][_0x5bce1a(0x134)],Spriteset_Battle[_0x5bce1a(0xdc)]=VisuMZ[_0x5bce1a(0x106)][_0x5bce1a(0x132)]['BattleBaseFilter'],Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0x14b)]=function(){var _0x1277b3=_0x5bce1a;return Spriteset_Base[_0x1277b3(0xdc)];},Spriteset_Map[_0x5bce1a(0x13b)][_0x5bce1a(0x14b)]=function(){var _0x26abed=_0x5bce1a;return Spriteset_Map[_0x26abed(0xdc)];},Spriteset_Battle[_0x5bce1a(0x13b)][_0x5bce1a(0x14b)]=function(){var _0x1d2fd8=_0x5bce1a;return Spriteset_Battle[_0x1d2fd8(0xdc)];},VisuMZ['BrightEffects']['Spriteset_Base_createOverallFilters']=Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0xea)],Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0xea)]=function(){var _0x555e87=_0x5bce1a;VisuMZ[_0x555e87(0x106)][_0x555e87(0xfd)][_0x555e87(0x112)](this),this[_0x555e87(0x153)]();},VisuMZ[_0x5bce1a(0x106)][_0x5bce1a(0xfc)]=Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0xfe)],Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0xfe)]=function(){var _0x2288bb=_0x5bce1a;VisuMZ[_0x2288bb(0x106)][_0x2288bb(0xfc)][_0x2288bb(0x112)](this),this[_0x2288bb(0xcd)]();},Spriteset_Map[_0x5bce1a(0x13b)][_0x5bce1a(0xc5)]=function(){var _0x244125=_0x5bce1a;const _0x4d60e1=$gameScreen[_0x244125(0xca)]();let _0x5e387e=0x0;if(Imported[_0x244125(0xda)]&&$gameScreen['mapCameraSettings']()[_0x244125(0xb1)])_0x5e387e=Graphics[_0x244125(0xc7)]/0x2,_0x5e387e-=$gameMap[_0x244125(0x14c)]()*0.5*_0x4d60e1;else{const _0x41657a=Imported[_0x244125(0xda)]?$gameScreen['mapCameraFocusTarget'](!![]):$gamePlayer,_0x120cd5=this['findTargetSprite'](_0x41657a);_0x5e387e=_0x41657a['screenY']()*_0x4d60e1,_0x5e387e-=_0x120cd5[_0x244125(0xc7)]*0.5,_0x5e387e-=_0x41657a[_0x244125(0x155)]()*_0x4d60e1*0.5;}return _0x5e387e;},Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0xc5)]=function(){return Graphics['height']/0x2;},Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0x153)]=function(){var _0x2cbf99=_0x5bce1a;if(ConfigManager[_0x2cbf99(0x15b)]===![])return;this[_0x2cbf99(0x131)]=this['filters']||[],this[_0x2cbf99(0xc4)](),this['createBrightEffectsGodrayFilter'](),this['createBrightEffectsColorAdjustFilter'](),this[_0x2cbf99(0x120)](),this[_0x2cbf99(0x16d)](),this[_0x2cbf99(0xcd)]();},Spriteset_Base['prototype'][_0x5bce1a(0xcd)]=function(){var _0x1a2aa1=_0x5bce1a;this['updateBrightEffectsAdvBloomFilter'](),this[_0x1a2aa1(0x13d)](),this[_0x1a2aa1(0x148)](),this[_0x1a2aa1(0xbb)](),this[_0x1a2aa1(0x15e)]();},Spriteset_Base[_0x5bce1a(0x13b)]['createBrightEffectsAdvBloomFilter']=function(){var _0x51e5ba=_0x5bce1a;if(!PIXI[_0x51e5ba(0x131)][_0x51e5ba(0x13e)])return;this[_0x51e5ba(0x127)]=new PIXI['filters']['AdvancedBloomFilter']();this[_0x51e5ba(0x14b)]()?this[_0x51e5ba(0x13f)]['filters']['push'](this[_0x51e5ba(0x127)]):this[_0x51e5ba(0x131)][_0x51e5ba(0x103)](this['_BrightEffectsAdvBloomFilter']);var _0x48de95=$gameScreen[_0x51e5ba(0x164)]();_0x48de95&&_0x48de95[_0x51e5ba(0x108)]>0x0&&(this['_BrightEffectsAdvBloomFilter']['bloomScale']=_0x48de95[_0x51e5ba(0x142)],this[_0x51e5ba(0x127)][_0x51e5ba(0xb7)]=_0x48de95['brightness'],this[_0x51e5ba(0x127)][_0x51e5ba(0xd9)]=_0x48de95['threshold']);},Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0x149)]=function(){var _0x5af3bb=_0x5bce1a;if(!!this[_0x5af3bb(0x127)]){var _0x36f967=$gameScreen['getBrightEffectsAdvBloomSettings'](),_0x29662=_0x36f967[_0x5af3bb(0x108)];_0x29662<=0x0?(this['_BrightEffectsAdvBloomFilter'][_0x5af3bb(0x142)]=_0x36f967['bloomScale'],this[_0x5af3bb(0x127)][_0x5af3bb(0xb7)]=_0x36f967[_0x5af3bb(0xb7)],this[_0x5af3bb(0x127)][_0x5af3bb(0xd9)]=_0x36f967[_0x5af3bb(0xd9)]):(_0x36f967['duration']--,this[_0x5af3bb(0x127)]['bloomScale']=(this[_0x5af3bb(0x127)][_0x5af3bb(0x142)]*(_0x29662-0x1)+_0x36f967[_0x5af3bb(0x142)])/_0x29662,this[_0x5af3bb(0x127)][_0x5af3bb(0xb7)]=(this[_0x5af3bb(0x127)]['brightness']*(_0x29662-0x1)+_0x36f967[_0x5af3bb(0xb7)])/_0x29662,this[_0x5af3bb(0x127)][_0x5af3bb(0xd9)]=(this[_0x5af3bb(0x127)]['threshold']*(_0x29662-0x1)+_0x36f967[_0x5af3bb(0xd9)])/_0x29662);}},Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0x104)]=function(){var _0x442779=_0x5bce1a;if(!PIXI['filters'][_0x442779(0x15d)])return;this[_0x442779(0x12e)]=new PIXI[(_0x442779(0x131))]['GodrayFilter'](),this[_0x442779(0x12e)][_0x442779(0x156)]=![],this[_0x442779(0x12e)]['time']=0x0;this[_0x442779(0x14b)]()?this[_0x442779(0x13f)][_0x442779(0x131)]['push'](this[_0x442779(0x12e)]):this[_0x442779(0x131)][_0x442779(0x103)](this['_BrightEffectsGodrayFilter']);var _0xdd4850=$gameScreen[_0x442779(0x15f)]();_0xdd4850&&_0xdd4850[_0x442779(0x108)]>0x0&&(this[_0x442779(0x12e)][_0x442779(0xdf)]=_0xdd4850[_0x442779(0xdf)],this['_BrightEffectsGodrayFilter'][_0x442779(0xb3)]=_0xdd4850['gain'],this[_0x442779(0x12e)][_0x442779(0x157)]=_0xdd4850[_0x442779(0x157)],this[_0x442779(0x12e)][_0x442779(0x118)]=_0xdd4850[_0x442779(0x118)]);},Spriteset_Base['prototype']['updateBrightEffectsGodrayFilter']=function(){var _0x35b5e0=_0x5bce1a;if(!!this[_0x35b5e0(0x12e)]){var _0xb8dd4d=$gameScreen['getBrightEffectsGodraySettings'](),_0x19ba87=_0xb8dd4d[_0x35b5e0(0x108)];_0x19ba87<=0x0?(this[_0x35b5e0(0x12e)]['speed']=_0xb8dd4d['speed'],this[_0x35b5e0(0x12e)][_0x35b5e0(0xb3)]=_0xb8dd4d[_0x35b5e0(0xb3)],this[_0x35b5e0(0x12e)][_0x35b5e0(0x157)]=_0xb8dd4d[_0x35b5e0(0x157)],this[_0x35b5e0(0x12e)][_0x35b5e0(0x118)]=_0xb8dd4d[_0x35b5e0(0x118)]):(_0xb8dd4d[_0x35b5e0(0x108)]--,this[_0x35b5e0(0x12e)][_0x35b5e0(0xdf)]=(this['_BrightEffectsGodrayFilter']['speed']*(_0x19ba87-0x1)+_0xb8dd4d[_0x35b5e0(0xdf)])/_0x19ba87,this[_0x35b5e0(0x12e)]['gain']=(this[_0x35b5e0(0x12e)]['gain']*(_0x19ba87-0x1)+_0xb8dd4d[_0x35b5e0(0xb3)])/_0x19ba87,this['_BrightEffectsGodrayFilter']['lacunarity']=(this[_0x35b5e0(0x12e)][_0x35b5e0(0x157)]*(_0x19ba87-0x1)+_0xb8dd4d['lacunarity'])/_0x19ba87,this[_0x35b5e0(0x12e)][_0x35b5e0(0x118)]=(this[_0x35b5e0(0x12e)][_0x35b5e0(0x118)]*(_0x19ba87-0x1)+_0xb8dd4d['angle'])/_0x19ba87),this[_0x35b5e0(0x12e)][_0x35b5e0(0xbd)]+=this['_BrightEffectsGodrayFilter'][_0x35b5e0(0xdf)],this[_0x35b5e0(0x12e)][_0x35b5e0(0x156)]=_0xb8dd4d['visible'];}},Spriteset_Base['prototype'][_0x5bce1a(0xcf)]=function(){var _0x1114e8=_0x5bce1a;if(!PIXI[_0x1114e8(0x131)][_0x1114e8(0xb2)])return;this[_0x1114e8(0x122)]=new PIXI[(_0x1114e8(0x131))]['ColorMatrixFilter']();this[_0x1114e8(0x14b)]()?this[_0x1114e8(0x13f)]['filters']['push'](this['_BrightEffectsColorAdjustFilter']):this[_0x1114e8(0x131)][_0x1114e8(0x103)](this['_BrightEffectsColorAdjustFilter']);var _0x2932fb=$gameScreen['getBrightEffectsColorAdjustSettings']();_0x2932fb&&_0x2932fb[_0x1114e8(0x108)]>0x0&&(this['_BrightEffectsColorAdjustFilter']['currentBrightness']=_0x2932fb[_0x1114e8(0xb7)],this[_0x1114e8(0x122)][_0x1114e8(0x136)]=_0x2932fb['contrast'],this['_BrightEffectsColorAdjustFilter']['currentSaturate']=_0x2932fb['saturate']);},Spriteset_Base['prototype'][_0x5bce1a(0x148)]=function(){var _0x147246=_0x5bce1a;if(!!this['_BrightEffectsColorAdjustFilter']){var _0x229e10=$gameScreen['getBrightEffectsColorAdjustSettings'](),_0x4eb585=_0x229e10[_0x147246(0x108)];_0x4eb585<=0x0?(this['_BrightEffectsColorAdjustFilter'][_0x147246(0xaf)]=_0x229e10[_0x147246(0xb7)],this[_0x147246(0x122)][_0x147246(0x136)]=_0x229e10[_0x147246(0xf0)],this['_BrightEffectsColorAdjustFilter']['currentSaturate']=_0x229e10[_0x147246(0xd6)]):(_0x229e10[_0x147246(0x108)]--,this[_0x147246(0x122)][_0x147246(0xaf)]=(this['_BrightEffectsColorAdjustFilter'][_0x147246(0xaf)]*(_0x4eb585-0x1)+_0x229e10[_0x147246(0xb7)])/_0x4eb585,this['_BrightEffectsColorAdjustFilter'][_0x147246(0x136)]=(this['_BrightEffectsColorAdjustFilter'][_0x147246(0x136)]*(_0x4eb585-0x1)+_0x229e10[_0x147246(0xf0)])/_0x4eb585,this[_0x147246(0x122)]['currentSaturate']=(this[_0x147246(0x122)][_0x147246(0x139)]*(_0x4eb585-0x1)+_0x229e10['saturate'])/_0x4eb585),this[_0x147246(0x122)][_0x147246(0xb7)](this[_0x147246(0x122)]['currentBrightness']),this[_0x147246(0x122)][_0x147246(0xf0)](this[_0x147246(0x122)][_0x147246(0x136)],!![]),this['_BrightEffectsColorAdjustFilter'][_0x147246(0xd6)](this[_0x147246(0x122)]['currentSaturate'],!![]);}},Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0x120)]=function(){var _0x4fcbe3=_0x5bce1a;if(!PIXI[_0x4fcbe3(0x131)][_0x4fcbe3(0xf1)])return;const _0x1ea4a7=new PIXI['filters'][(_0x4fcbe3(0xf1))]();this['_BrightEffectsTiltShiftFilter']=_0x1ea4a7;this['brightEffectsBaseOnly']()?this[_0x4fcbe3(0x13f)][_0x4fcbe3(0x131)][_0x4fcbe3(0x103)](_0x1ea4a7):this['filters']['push'](_0x1ea4a7);var _0x1c0014=$gameScreen['getBrightEffectsTiltShiftSettings']();_0x1c0014&&_0x1c0014[_0x4fcbe3(0x108)]>0x0&&(_0x1ea4a7[_0x4fcbe3(0x138)]=_0x1c0014[_0x4fcbe3(0xae)],_0x1ea4a7[_0x4fcbe3(0x117)]=_0x1c0014[_0x4fcbe3(0x170)]);},Spriteset_Base['prototype'][_0x5bce1a(0xbb)]=function(){var _0x4ff7ab=_0x5bce1a;if(!this[_0x4ff7ab(0x11c)])return;const _0x52234d=this['getMapEnhanceScreenY']()+0.5;this['setMapEnhanceTiltShiftFilterY'](_0x52234d),this['updateBrightEffectsTiltShiftFilterProperties']();},Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0xd7)]=function(_0x55bce4){var _0x7186b1=_0x5bce1a;const _0x53f2e3=0x4;if(this[_0x7186b1(0x11c)][_0x7186b1(0x11b)]['y']>_0x55bce4)this[_0x7186b1(0x11c)][_0x7186b1(0x11b)]={'x':0x0,'y':Math[_0x7186b1(0x11f)](this[_0x7186b1(0x11c)][_0x7186b1(0x11b)]['y']-_0x53f2e3,_0x55bce4)},this[_0x7186b1(0x11c)][_0x7186b1(0x15c)]={'x':0x258,'y':Math[_0x7186b1(0x11f)](this[_0x7186b1(0x11c)]['end']['y']-_0x53f2e3,_0x55bce4)};else this[_0x7186b1(0x11c)][_0x7186b1(0x11b)]['y']<_0x55bce4&&(this['_BrightEffectsTiltShiftFilter'][_0x7186b1(0x11b)]={'x':0x0,'y':Math[_0x7186b1(0xce)](this[_0x7186b1(0x11c)][_0x7186b1(0x11b)]['y']+_0x53f2e3,_0x55bce4)},this[_0x7186b1(0x11c)][_0x7186b1(0x15c)]={'x':0x258,'y':Math[_0x7186b1(0xce)](this['_BrightEffectsTiltShiftFilter'][_0x7186b1(0x15c)]['y']+_0x53f2e3,_0x55bce4)});},Spriteset_Base['prototype']['updateBrightEffectsTiltShiftFilterProperties']=function(){var _0x506808=_0x5bce1a;const _0x2dcd75=this['_BrightEffectsTiltShiftFilter'];var _0x3b4247=$gameScreen[_0x506808(0x110)](),_0x3e2197=_0x3b4247[_0x506808(0x108)];_0x3e2197<=0x0?(_0x2dcd75['currentPixelBlur']=_0x3b4247['pixelBlur'],_0x2dcd75[_0x506808(0x117)]=_0x3b4247[_0x506808(0x170)]):(_0x3b4247['duration']--,_0x2dcd75[_0x506808(0x138)]=(_0x2dcd75['currentPixelBlur']*(_0x3e2197-0x1)+_0x3b4247[_0x506808(0xae)])/_0x3e2197,_0x2dcd75[_0x506808(0x117)]=(_0x2dcd75[_0x506808(0x117)]*(_0x3e2197-0x1)+_0x3b4247['gradientBlur'])/_0x3e2197),_0x2dcd75[_0x506808(0x160)]=_0x2dcd75[_0x506808(0x138)],_0x2dcd75['gradientBlur']=_0x2dcd75[_0x506808(0x117)];},Spriteset_Base[_0x5bce1a(0x13b)][_0x5bce1a(0x16d)]=function(){var _0x3974af=_0x5bce1a;const _0x8aec31=new PIXI['filters'][(_0x3974af(0x12b))]();this[_0x3974af(0xff)]=_0x8aec31;this[_0x3974af(0x14b)]()?this[_0x3974af(0x13f)][_0x3974af(0x131)][_0x3974af(0x103)](_0x8aec31):this[_0x3974af(0x131)][_0x3974af(0x103)](_0x8aec31);var _0x1d9538=$gameScreen[_0x3974af(0x12c)]();_0x1d9538&&_0x1d9538[_0x3974af(0x108)]>0x0&&(_0x8aec31[_0x3974af(0x16f)]=_0x1d9538[_0x3974af(0x160)]);},Spriteset_Base[_0x5bce1a(0x13b)]['updateBrightEffectsBlurFilter']=function(){var _0x4a0a06=_0x5bce1a;if(!!this[_0x4a0a06(0xff)]){var _0x52500e=$gameScreen[_0x4a0a06(0x12c)](),_0x4e220a=_0x52500e[_0x4a0a06(0x108)];_0x4e220a<=0x0?this[_0x4a0a06(0xff)][_0x4a0a06(0x16f)]=_0x52500e[_0x4a0a06(0x160)]:(_0x52500e[_0x4a0a06(0x108)]--,this[_0x4a0a06(0xff)][_0x4a0a06(0x16f)]=(this['_BrightEffectsBlurFilter'][_0x4a0a06(0x16f)]*(_0x4e220a-0x1)+_0x52500e['blur'])/_0x4e220a),this[_0x4a0a06(0xff)]['blur']=this[_0x4a0a06(0xff)]['currentBlur'];}};