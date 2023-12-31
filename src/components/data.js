const moduleNames = [
  "cpu",
  "date",
  "datetime",
  "debug",
  "disk",
  "error",
  "git",
  "keys",
  "layout",
  "layout-xkb",
  "layout_xkb",
  "load",
  "memory",
  "nic",
  "ping",
  "pulseaudio",
  "pulsectl",
  "redshift",
  "scroll",
  "sensors2",
  "spacer",
  "speedtest",
  "test",
  "time",
  "vault",
  "xrandr",
  "amixer",
  "apt",
  "arandr",
  "arch-update",
  "arch_update",
  "aur-update",
  "battery",
  "battery-upower",
  "battery_upower",
  "bluetooth",
  "bluetooth2",
  "blugon",
  "brightness",
  "caffeine",
  "cmus",
  "cpu2",
  "cpu3",
  "currency",
  "datetimetz",
  "datetz",
  "deadbeef",
  "deezer",
  "dnf",
  "docker_ps",
  "dunst",
  "dunstctl",
  "emerge_status",
  "gcalendar",
  "getcrypto",
  "github",
  "gitlab",
  "gpmdp",
  "hddtemp",
  "hostname",
  "http_status",
  "indicator",
  "kernel",
  "layout-xkbswitch",
  "layout_xkbswitch",
  "libvirtvms",
  "messagereceiver",
  "mocp",
  "mpd",
  "network",
  "network_traffic",
  "notmuch_count",
  "nvidiagpu",
  "octoprint",
  "optman",
  "pacman",
  "pamixer",
  "persian_date",
  "pihole",
  "pipewire",
  "playerctl",
  "pomodoro",
  "portage_status",
  "prime",
  "progress",
  "publicip",
  "rofication",
  "rotation",
  "rss",
  "sensors",
  "shell",
  "shortcut",
  "smartstatus",
  "solaar",
  "spaceapi",
  "spotify",
  "stock",
  "sun",
  "system",
  "taskwarrior",
  "thunderbird",
  "timetz",
  "title",
  "todo",
  "todo_org",
  "todoist",
  "traffic",
  "twmn",
  "uptime",
  "usage",
  "vpn",
  "wakatime",
  "watson",
  "weather",
  "xkcd",
  "yubikey",
  "zpool",
];

const modulesData = [
  {
    name: "cpu",
    description: "Displays CPU utilization across all CPUs.",
    tech: ["py", ""],
    requirements: ["psutil", "gnome-system-monitor"],
    parameters: [
      {
        name: "cpu.warning",
        description: "Warning threshold in % of CPU usage (defaults to 70%)",
        defaultChoice: "70%",
        example: "50%, 60%,90%",
      },
      {
        name: "cpu.critical",
        description: "Critical threshold in % of CPU usage (defaults to 80%)",
        defaultChoice: "80%",
        example: "50%, 60%,90%",
      },
      {
        name: "cpu.format",
        description: "Format string (defaults to ‘{:.01f}%’)",
        defaultChoice: "{:.01f}%",
        example: "{:.2f}%, {:.1f}%",
      },
      {
        name: "cpu.percpu",
        description:
          "If set to true, show each individual cpu (defaults to false)",
        defaultChoice: "false",
        example: "true and false",
      },
    ],
  },
  {
    name: "date",
    description: "Displays the current date and time.",
    parameters: [
      {
        name: "date.format",
        description: "strftime( )-compatible formatting string",
        defaultChoice: "%a, %b %d",
        example:
          "( %a, %b %d => Tue, Dec 26 ) , ( %A, %b %d => Tuesday, Dec 26 )",
      },
      {
        name: "date.locale",
        description: "locale to use rather than the system default",
        defaultChoice: "system default",
        example: "en_US, en_GB, en_ES",
      },
    ],
  },
  {
    name: "datetime",
    description: "Displays the current date and time.",
    parameters: [
      {
        name: "datetime.format",
        description: "strftime()-compatible formatting string",
        defaultChoice: "%a, %b %d",
        example:
          "( %a, %b %d => Tue, Dec 26 ) , ( %A, %b %d => Tuesday, Dec 26 )",
      },
      {
        name: "datetime.locale",
        description: "locale to use rather than the system default",
        defaultChoice: "system default",
        example: "en_US, en_GB, en_ES",
      },
    ],
  },
  {
    name: "debug",
    description: "Shows that debug is enabled",
  },
  {
    name: "disk",
    description:
      "Shows free diskspace, total diskspace and the percentage of free disk space.",
    parameters: [
      {
        name: "disk.warning",
        description: "Warning threshold in % of disk space (defaults to 80%)",
        defaultChoice: "80%",
        example: "50%, 60%,90%",
      },
      {
        name: "disk.critical",
        description: "Critical threshold in % of disk space (defaults to 90%)",
        defaultChoice: "90%",
        example: "50%, 60%,90%",
      },
      {
        name: "disk.path",
        description: "Path to calculate disk usage from (defaults to /)",
        defaultChoice: "/",
        example: "/home, /home/documents",
      },
      {
        name: "disk.open",
        description:
          "Which application / file manager to launch (default xdg-open)",
        defaultChoice: "xdg-open",
        example: "nemo thunar",
      },
      {
        name: "disk.format",
        description:
          "Format string, tags {path}, {used}, {left}, {size} and {percent} (defaults to ‘{path} {used}/{size} ({percent:05.02f}%)’)",
        defaultChoice: "{path} {used}/{size} ({percent:05.02f}%)",
        example:
          "{used}/{size} ({percent:05.02f}%) => 10.95GiB/384.18GiB (0.2,85%)",
      },
      {
        name: "disk.system",
        description:
          "Unit system to use - SI (KB, MB, …) or IEC (KiB, MiB, …) (defaults to ‘IEC’)",
        defaultChoice: "IEC",
        example: "SI, EIC",
      },
    ],
  },
  {
    name: "error",
    description: "Shows bumblebee-status errors",
  },
  {
    name: "git",
    description:
      "Print the branch and git status for the currently focused window.",
    tech: ["", "py"],
    requirements: ["xcwd", "pygit2"],
  },
  {
    name: "keys",
    description: "Shows when a key is pressed",
    parameters: [
      {
        name: "keys.keys",
        description: "Comma-separated list of keys to monitor (defaults to “”)",
        defaultChoice: "",
        example: ":",
      },
    ],
  },
  {
    name: "layout",
    description: "Displays the current keyboard layout using libX11",
    tech: ["", "py"],
    requirements: ["libX11.so.6", "xkbgroup"],
    parameters: [
      {
        name: "layout-xkb.showname",
        description:
          "Boolean that indicate whether the full name should be displayed. Defaults to false (only the symbol will be displayed)",
        defaultChoice: "false",
        example: "true or false",
      },
      {
        name: "layout-xkb.show_variant",
        description:
          "Boolean that indecates whether the variant name should be displayed. Defaults to true.",
        defaultChoice: "true",
        example: "true or false",
      },
    ],
  },
  {
    name: "layout-xkb",
    description: "Displays the current keyboard layout using libX11",
    tech: ["", "py"],
    requirements: ["libX11.so.6", "xkbgroup"],
    parameters: [
      {
        name: "layout-xkb.showname",
        description:
          "Boolean that indicate whether the full name should be displayed. Defaults to false (only the symbol will be displayed)",
        defaultChoice: "false",
        example: "true or false",
      },
      {
        name: "layout-xkb.show_variant",
        description:
          "Boolean that indecates whether the variant name should be displayed. Defaults to true.",
        defaultChoice: "true",
        example: "true or false",
      },
    ],
  },
  {
    name: "layout_xkb",
    description: "Displays the current keyboard layout using libX11",
    tech: ["", "py"],
    requirements: ["libX11.so.6", "xkbgroup"],
    parameters: [
      {
        name: "layout-xkb.showname",
        description:
          "Boolean that indicate whether the full name should be displayed. Defaults to false (only the symbol will be displayed)",
        defaultChoice: "false",
        example: "true or false",
      },
      {
        name: "layout-xkb.show_variant",
        description:
          "Boolean that indecates whether the variant name should be displayed. Defaults to true.",
        defaultChoice: "true",
        example: "true or false",
      },
    ],
  },
  {
    name: "load",
    description: "Displays system load.",
    tech: [""],
    requirements: ["gnome-system-monitor"],
    parameters: [
      {
        name: "load.warning",
        description:
          "Warning threshold for the one-minute load average (defaults to 70% of the number of CPUs)",
        defaultChoice: "70%",
        example: "50%, 60%,90%",
      },
      {
        name: "load.critical",
        description:
          "Critical threshold for the one-minute load average (defaults to 80% of the number of CPUs)",
        defaultChoice: "80%",
        example: "50%, 60%,90%",
      },
    ],
  },
  {
    name: "memory",
    description:
      "Displays available RAM, total amount of RAM and percentage available.",
    tech: [""],
    requirements: ["gnome-system-monitor"],
    parameters: [
      {
        name: "memory.warning",
        description: "Warning threshold in % of memory used (defaults to 80%)",
        defaultChoice: "80%",
        example: "50%, 60%,90%",
      },
      {
        name: "memory.critical",
        description: "Critical threshold in % of memory used (defaults to 90%)",
        defaultChoice: "90%",
        example: "50%, 60%,90%",
      },
      {
        name: "memory.format",
        description:
          "Format string (defaults to ‘{used}/{total} ({percent:05.02f}%)’)",
        defaultChoice: "{used}/{total} ({percent:05.02f}%)",
        example: "{used} ({percent:3.0f}%) => 2.83GiB ( 76%)",
      },
      {
        name: "memory.usedonly",
        description:
          "Only show the amount of RAM in use (defaults to False). Same as memory.format=’{used}’",
        defaultChoice: "False",
        example: "True or False",
      },
    ],
  },
  {
    name: "nic",
    description:
      "Displays the name, IP address(es) and status of each available network interface.",
    tech: ["py", "ex", "ex"],
    requirements: ["netifaces", "iw", "iwgetid"],
    parameters: [
      {
        name: "nic.exclude",
        description:
          "Comma-separated list of interface prefixes (supporting regular expressions) to exclude (defaults to ‘lo,virbr,docker,vboxnet,veth,br,.*:avahi’)",
        defaultChoice: "lo,virbr,docker,vboxnet,veth,br,.*:avahi",
        example:
          "lo (exclude loopback interface), .*:avahi(exclusion of avahi interfaces)",
      },
      {
        name: "nic.include",
        description: "Comma-separated list of interfaces to include",
        defaultChoice: "",
        example: "eth0 (include eth0 interface)",
      },
      {
        name: "nic.states",
        description:
          "Comma-separated list of states to show (prefix with ‘^’ to invert - i.e. ^down -> show all devices that are not in state down)",
        defaultChoice: "",
        example: "^up,^down",
      },
      {
        name: "nic.format",
        description:
          "Format string (defaults to ‘{intf} {state} {ip} {ssid} {strength}’)",
        defaultChoice: "{intf} {state} {ip} {ssid} {strength}",
        example: "{intf} {state}",
      },
      {
        name: "nic.strength_warning",
        description:
          "Integer to set the threshold for warning state (defaults to 50)",
        defaultChoice: "50",
        example: "50, 60, 90",
      },
      {
        name: "nic.strength_critical",
        description:
          "Integer to set the threshold for critical state (defaults to 30)",
        defaultChoice: "30",
        example: "50, 60, 90",
      },
    ],
  },
  {
    name: "ping",
    description:
      "Periodically checks the RTT of a configurable host using ICMP echos",
    tech: ["ex"],
    requirements: ["ping"],
    parameters: [
      {
        name: "ping.address",
        description: "IP address to check",
        defaultChoice: "8.8.8.8",
        example: "Any IP address",
      },
      {
        name: "ping.timeout",
        description: "Timeout for waiting for a reply (defaults to 5.0)",
        defaultChoice: "5.0",
        example: "5.0, 10.0",
      },
      {
        name: "ping.probes",
        description: "Number of probes to send (defaults to 5)",
        defaultChoice: "5",
        example: "5, 10",
      },
      {
        name: "ping.warning",
        description:
          "Threshold for warning state, in seconds (defaults to 1.0)",
        defaultChoice: "1.0",
        example: "2.0, 3.0",
      },
      {
        name: "ping.critical",
        description:
          "Threshold for critical state, in seconds (defaults to 2.0)",
        defaultChoice: "2.0",
        example: "3.0, 4.0",
      },
    ],
  },
  {
    name: "pulseaudio **Will be deprecated**",
    description:
      "Displays volume and mute status and controls for PulseAudio devices. Use wheel up and down to change volume, left click mutes, right click opens pavucontrol.",
    tech: ["ex", "ex", "ex"],
    requirements: ["pulseaudio", "pactl", "pavucontrol"],
    parameters: [
      {
        name: "pulseaudio.autostart",
        description:
          "If set to ‘true’ (default is ‘false’), automatically starts the pulseaudio daemon if it is not running",
        defaultChoice: "false",
        example: "false, true",
      },
      {
        name: "pulseaudio.percent_change",
        description:
          "How much to change volume by when scrolling on the module (default is 2%)",
        defaultChoice: "2%",
        example: "5%, 7%",
      },
      {
        name: "pulseaudio.limit",
        description:
          "Upper limit for setting the volume (default is 0%, which means ‘no limit’) Note: If the left and right channels have different volumes, the limit might not be reached exactly.",
        defaultChoice: "0%",
        example: "10%, 20%",
      },
      {
        name: "pulseaudio.showbars",
        description:
          "1 for showing volume bars, requires –markup=pango; 0 for not showing volume bars (default)",
        defaultChoice: "0",
        example: "0, 1",
      },
      {
        name: "pulseaudio.showdevicename",
        description:
          "If set to ‘true’ (default is ‘false’), the currently selected default device is shown. Per default, the sink/source name returned by “pactl list sinks short” is used as display name.",
        defaultChoice: "false",
        example: "false, true",
      },
    ],
  },
  {
    name: "pulsectl",
    description:
      "Displays volume and mute status and controls for PulseAudio devices. Use wheel up and down to change volume, left click mutes, right click opens pavucontrol.",
    tech: ["py"],
    requirements: ["pulsectl"],
    parameters: [
      {
        name: "pulsectl.autostart",
        description:
          "If set to ‘true’ (default is ‘false’), automatically starts the pulsectl daemon if it is not running",
        defaultChoice: "false",
        example: "false, true",
      },
      {
        name: "pulsectl.percent_change",
        description:
          "How much to change volume by when scrolling on the module (default is 2%)",
        defaultChoice: "2%",
        example: "2%, 5%",
      },
      {
        name: "pulsectl.limit",
        description:
          "Upper limit for setting the volume (default is 0%, which means ‘no limit’)",
        defaultChoice: "0%",
        example: "10%, 20%",
      },
      {
        name: "pulsectl.popup-filter",
        description:
          "Comma-separated list of device strings (if the device name contains it) to exclude from the default device popup menu (e.g. Monitor for sources)",
        defaultChoice: "",
        example: "Monitor, Headphones",
      },
      {
        name: "pulsectl.showbars",
        description:
          "‘true’ for showing volume bars, requires –markup=pango; ‘false’ for not showing volume bars (default)",
        defaultChoice: "false",
        example: "false, true",
      },
      {
        name: "pulsectl.showdevicename",
        description:
          "If set to ‘true’ (default is ‘false’), the currently selected default device is shown. Per default, the sink/source name returned by “pactl list sinks short” is used as display name.",
        defaultChoice: "false",
        example: "false, true",
      },
    ],
  },
  {
    name: "redshift",
    description: "Displays the current color temperature of redshift",
    tech: ["ex"],
    requirements: ["redshift"],
    parameters: [
      {
        name: "redshift.location",
        description:
          " location provider, either of ‘auto’ (default), ‘geoclue2’, ‘ipinfo’ or ‘manual’ ‘auto’ uses whatever redshift is configured to do",
        defaultChoice: "auto",
        example: "geoclue2, ipinfo, manual",
      },
      {
        name: "redshift.lat",
        description: "latitude if location is set to ‘manual’",
        defaultChoice: "",
        example: "38.9072° N",
      },
      {
        name: "redshift.lon",
        description: "longitude if location is set to ‘manual’",
        defaultChoice: "",
        example: "77.0369° W",
      },
      {
        name: "redshift.show_transition",
        description:
          "information about the transitions (x% day) defaults to True",
        defaultChoice: "True",
        example: "True, False",
      },
      {
        name: "redshift.adjust",
        description:
          "set this to ‘true’ (defaults to false) to let bumblebee-status adjust color temperature, instead of just showing the current settings",
        defaultChoice: "true",
        example: "true, false",
      },
    ],
  },
  {
    name: "scroll",
    description:
      "Displays two widgets that can be used to scroll the whole status bar",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "scroll.width",
        description: "Width (in number of widgets) to display",
        defaultChoice: "",
        example: "3, 4, 5",
      },
    ],
  },
  {
    name: "sensors2",
    description: "Displays sensor temperature and CPU frequency",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "sensors2.chip",
        description:
          "‘sensors -u’ compatible filter for chip to display (default to empty - show all chips)",
        defaultChoice: "",
        example: "coretemp-isa-0000",
      },
      {
        name: "sensors2.showcpu",
        description: "Enable or disable CPU frequency display (default: true)",
        defaultChoice: "true",
        example: "true, false",
      },
      {
        name: "sensors2.showtemp",
        description: "Enable or disable temperature display (default: true)",
        defaultChoice: "true",
        example: "true, false",
      },
      {
        name: "sensors2.showfan",
        description: "Enable or disable fan display (default: true)",
        defaultChoice: "true",
        example: "true, false",
      },
      {
        name: "sensors2.showother",
        description:
          "Enable or display ‘other’ sensor readings (default: false)",
        defaultChoice: "false",
        example: "true, false",
      },
      {
        name: "sensors2.showname",
        description: "Enable or disable show of sensor name (default: false)",
        defaultChoice: "false",
        example: "true, false",
      },
      {
        name: "sensors2.chip_include",
        description:
          "Comma-separated list of chip to include (defaults to ‘’ will include all by default, example: ‘coretemp,bat’)",
        defaultChoice: "",
        example: "coretemp,bat",
      },
      {
        name: "sensors2.chip_exclude",
        description:
          "Comma separated list of chip to exclude (defaults to ‘’ will exclude none by default)",
        defaultChoice: "",
        example: "coretemp,bat",
      },
      {
        name: "sensors2.field_include",
        description:
          "Comma separated list of chip to include (defaults to ‘’ will include all by default, example: ‘temp,fan’)",
        defaultChoice: "",
        example: "temp,fan",
      },
      {
        name: "sensors2.field_exclude",
        description:
          "Comma separated list of chip to exclude (defaults to ‘’ will exclude none by default)",
        defaultChoice: "",
        example: "temp,fan",
      },
      {
        name: "sensors2.chip_field_exclude",
        description:
          "Comma separated list of chip field to exclude (defaults to ‘’ will exclude none by default, example: ‘coretemp-isa-0000.temp1,coretemp-isa-0000.fan1’)",
        defaultChoice: "",
        example: "coretemp-isa-0000.temp1,coretemp-isa-0000.fan1",
      },
      {
        name: "sensors2.chip_field_include",
        description:
          "Comma-separated list of adaper field to include (defaults to ‘’ will include all by default)",
        defaultChoice: "",
        example: "coretemp-isa-0000.temp1,coretemp-isa-0000.fan1",
      },
    ],
  },
  {
    name: "spacer",
    description: "Draws a widget with configurable text content.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "spacer.text",
        description: "Widget contents (defaults to empty string)",
        defaultChoice: "",
        example: "|, emojis",
      },
    ],
  },
  {
    name: "speedtest",
    description:
      "Performs a speedtest - only updates when the “play” button is clicked",
    tech: ["py"],
    requirements: ["speedtest-cli"],
  },
  {
    name: "test",
    description: "Test module",
    tech: [""],
    requirements: [""],
  },
  {
    name: "time",
    description: "Displays the current date and time.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "time.format",
        description: "strftime()-compatible formatting string",
        defaultChoice: "%X",
        example: "%H:%M, %H : %M : %S",
      },
      {
        name: "time.locale",
        description: "locale to use rather than the system default",
        defaultChoice: "",
        example: "",
      },
    ],
  },
  {
    name: "vault",
    description:
      "Copy passwords from a password store into the clipboard (currently supports only ‘pass’)",
    tech: ["ex"],
    requirements: ["pass (aka password-store)"],
    parameters: [
      {
        name: "vault.duration",
        description:
          "Duration until password is cleared from clipboard (defaults to 30)",
        defaultChoice: "30",
        example: "30, 60",
      },
      {
        name: "vault.location",
        description:
          "Location of the password store (defaults to ~/.password-store)",
        defaultChoice: "~/.password-store",
        example: "",
      },
      {
        name: "vault.offx",
        description: "x-axis offset of popup menu (defaults to 0)",
        defaultChoice: "0",
        example: "10, 20, -10",
      },
      {
        name: "vault.offy",
        description: "y-axis offset of popup menu (defaults to 0)",
        defaultChoice: "0",
        example: "10, 20, -10",
      },
      {
        name: "vault.text",
        description:
          "Text to display on the widget (defaults to <click-for-password>)",
        defaultChoice: "<click-for-password>",
        example: "Metro Boomin",
      },
    ],
  },
  {
    name: "xrandr",
    description:
      "Shows a widget for each connected screen and allows the user to enable/disable screens.",
    tech: ["py", "ex"],
    requirements: ["(optional) i3", "xrandr"],
    parameters: [
      {
        name: "xrandr.overwrite_i3config",
        description:
          "If set to ‘true’, this module assembles a new i3 config every time a screen is enabled or disabled by taking the file ‘~/.config/i3/config.template’ and appending a file ‘~/.config/i3/config.<screen name>’ for every screen.",
        defaultChoice: "false",
        example: "true, false",
      },
      {
        name: "xrandr.autoupdate",
        description:
          "If set to ‘false’, does not invoke xrandr automatically. Instead, the module will only refresh when displays are enabled or disabled (defaults to true)",
        defaultChoice: "true",
        example: "true, false",
      },
      {
        name: "xrandr.exclude",
        description: "Comma-separated list of display name prefixes to exclude",
        defaultChoice: "",
        example: "",
      },
      {
        name: "xrandr.autotoggle",
        description:
          "Boolean flag to automatically enable new displays (defaults to false)",
        defaultChoice: "false",
        example: "true, false",
      },
      {
        name: "xrandr.autotoggle_side",
        description:
          "Which side to put autotoggled displays on (‘right’ or ‘left’, defaults to ‘right’)",
        defaultChoice: "right",
        example: "right, left",
      },
    ],
  },
  {
    name: "amixer",
    description: "get volume level or control it",
    tech: ["ex"],
    requirements: ["amixer"],
    parameters: [
      {
        name: "amixer.card",
        description: "Sound Card to use (default is 0)",
        defaultChoice: "0",
        example: "",
      },
      {
        name: "amixer.device",
        description: "Device to use (default is Master,0)",
        defaultChoice: "0",
        example: "",
      },
      {
        name: "amixer.percent_change",
        description:
          "How much to change volume by when scrolling on the module (default is 4%)",
        defaultChoice: "4%",
        example: "10%, 20%",
      },
    ],
    contrib: [
      { name: "zetxx", link: "https://github.com/zetxx" },
      { name: "ardadem", link: "https://github.com/ardadem" },
      { name: "hugoeustaquio", link: "https://github.com/hugoeustaquio" },
    ],
  },
  {
    name: "apt",
    description:
      "Displays APT package update information (<to upgrade>/<to remove >) ",
    tech: [""],
    requirements: ["aptitude"],
    contrib: [{ name: "qba10", link: "https://github.com/qba10" }],
  },
  {
    name: "arandr",
    description:
      "Enables handy interaction with arandr for display management. Left-clicking will execute arandr for interactive display management. Right-clicking will bring up a context- and state-sensitive menu that will allow you to switch to a saved screen layout as well as toggle on/off individual connected displays.",
    tech: ["py", "ex", "ex"],
    requirements: ["tkinter", "arandr", "xrandr"],
    contrib: [{ name: "zerorust", link: "https://github.com/zerorust" }],
  },
  {
    name: "arch-update",
    description: "Check updates to Arch Linux.",
    tech: ["ex"],
    requirements: ["checkupdates (from pacman-contrib)"],
    contrib: [{ name: "lucassouto", link: "https://github.com/lucassouto" }],
  },
  {
    name: "arch_update",
    description: "Check updates to Arch Linux.",
    tech: ["ex"],
    requirements: ["checkupdates"],
    contrib: [{ name: "lucassouto", link: "https://github.com/lucassouto" }],
  },
  {
    name: "aur-update",
    description: "Check updates for AUR.",
    tech: ["ex"],
    requirements: ["yay (https://github.com/Jguer/yay)"],
    contrib: [
      { name: "ishaanbhimwal ", link: "https://github.com/ishaanbhimwal" },
    ],
  },
  {
    name: "battery",
    description:
      "Displays battery status, remaining percentage and charging information.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "battery.device",
        description:
          "Comma-separated list of battery devices to read information from (defaults to auto for auto-detection)",
        defaultChoice: "auto",
        example: "",
      },
      {
        name: "battery.warning",
        description:
          "Warning threshold in % of remaining charge (defaults to 20)",
        defaultChoice: "20",
        example: "30, 50, 70",
      },
      {
        name: "battery.critical",
        description:
          "Critical threshold in % of remaining charge (defaults to 10)",
        defaultChoice: "10",
        example: "20, 50",
      },
      {
        name: "battery.showdevice",
        description:
          "If set to ‘true’, add the device name to the widget (defaults to False)",
        defaultChoice: "False",
        example: "True, False",
      },
      {
        name: "battery.decorate",
        description:
          "If set to ‘false’, hides additional icons (charging, etc.) (defaults to True)",
        defaultChoice: "True",
        example: "True, False",
      },
      {
        name: "battery.showpowerconsumption",
        description:
          "If set to ‘true’, show current power consumption (defaults to False)",
        defaultChoice: "False",
        example: "True, False",
      },
      {
        name: "battery.compact-devices",
        description:
          "If set to ‘true’, compacts multiple batteries into a single entry (default to False)",
        defaultChoice: "False",
        example: "True, False",
      },
    ],
    contrib: [
      { name: "martindoublem", link: "https://github.com/martindoublem" },
    ],
  },
  {
    name: "battery-upower",
    description:
      "Displays battery status, remaining percentage and charging information.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "battery-upower.warning",
        description:
          "Warning threshold in % of remaining charge (defaults to 20)",
        defaultChoice: "20",
        example: "30, 50, 70",
      },
      {
        name: "battery-upower.critical",
        description:
          "Critical threshold in % of remaining charge (defaults to 10)",
        defaultChoice: "10",
        example: "30, 50 70",
      },
      {
        name: "battery-upower.showremaining",
        description:
          "If set to true (default) shows the remaining time until the batteries are completely discharged",
        defaultChoice: "true",
        example: "true, false",
      },
    ],
    contrib: [
      { name: "martindoublem", link: "https://github.com/martindoublem" },
    ],
  },
  {
    name: "battery_upower",
    description:
      "Displays battery status, remaining percentage and charging information.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "battery-upower.warning",
        description:
          "Warning threshold in % of remaining charge (defaults to 20)",
        defaultChoice: "20",
        example: "30, 50, 70",
      },
      {
        name: "battery-upower.critical",
        description:
          "Critical threshold in % of remaining charge (defaults to 10)",
        defaultChoice: "10",
        example: "30, 50 70",
      },
      {
        name: "battery-upower.showremaining",
        description:
          "If set to true (default) shows the remaining time until the batteries are completely discharged",
        defaultChoice: "true",
        example: "true, false",
      },
    ],
    contrib: [
      { name: "martindoublem", link: "https://github.com/martindoublem" },
    ],
  },
  {
    name: "bluetooth",
    description:
      "Displays bluetooth status (Bluez). Left mouse click launches manager app blueman-manager, right click toggles bluetooth. Needs dbus-send to toggle bluetooth state.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "bluetooth.device",
        description: "the device to read state from (default is hci0)",
        defaultChoice: "hci0",
        example: "hci0, hci1",
      },
      {
        name: "bluetooth.manager",
        description: "application to launch on click (blueman-manager)",
        defaultChoice: "blueman-manager",
        example: "bluez-manager",
      },
      {
        name: "bluetooth.dbus_destination",
        description: "dbus destination (defaults to org.blueman.Mechanism)",
        defaultChoice: "org.blueman.Mechanism",
        example: "org.blueman.Mechanism",
      },
      {
        name: "bluetooth.dbus_destination_path",
        description: "dbus destination path (defaults to /)",
        defaultChoice: "/",
        example: "",
      },
      {
        name: "bluetooth.right_click_popup",
        description: "use popup menu when right-clicked (defaults to True)",
        defaultChoice: "True",
        example: "True, False",
      },
    ],
    contrib: [{ name: "brunosmmm", link: "https://github.com/brunosmmm" }],
  },
  {
    name: "bluetooth2",
    description:
      "Displays bluetooth status. Left mouse click launches manager app blueman-manager, right click toggles bluetooth. Needs dbus-send to toggle bluetooth state and python-dbus to count the number of connections",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "bluetooth.manager",
        description: "application to launch on click (blueman-manager)",
        defaultChoice: "blueman-manager",
        example: "bluez-manager",
      },
    ],
    contrib: [
      { name: "martindoublem", link: "https://github.com/martindoublem" },
    ],
  },
  {
    name: "blugon",
    description:
      "Displays temperature of blugon and Controls it. Use wheel up and down to change temperature, middle click to toggle and right click to reset temperature.",
    tech: ["ex"],
    requirements: ["blugon"],
    parameters: [
      {
        name: "blugon.step",
        description: "The amount of increase/decrease on scroll (default: 200)",
        defaultChoice: "200",
        example: "200, 600",
      },
    ],
    contrib: [{ name: "DTan13", link: "https://github.com/DTan13" }],
  },
  {
    name: "brightness",
    description: "Displays the brightness of a display",
    tech: ["ex", "ex", "ex"],
    requirements: ["brightnessctl", "light", "xbacklight"],
    parameters: [
      {
        name: "brightness.step",
        description:
          "The amount of increase/decrease on scroll in % (defaults to 2)",
        defaultChoice: "2",
        example: "5, 10",
      },
      {
        name: "brightness.device_path",
        description:
          "The device path (defaults to /sys/class/backlight/intel_backlight), can contain wildcards (in this case, the first matching path will be used); This is only used when brightness.use_acpi is set to true",
        defaultChoice: "/sys/class/backlight/intel_backlight",
        example: "/sys/class/backlight/intel_backlight",
      },
      {
        name: "brightness.use_acpi",
        description:
          "If set to true, read brightness directly from the sys ACPI interface, using the device specified in brightness.device_path (defaults to false)",
        defaultChoice: "false",
        example: "false, true",
      },
    ],
    contrib: [
      { name: "TheEdgeOfRage", link: "https://github.com/TheEdgeOfRage" },
    ],
  },
  {
    name: "caffeine",
    description: "Enable/disable automatic screen locking.",
    tech: ["ex", "ex", "ex", "ex"],
    requirements: [
      "xdg-screensaver",
      "xdotool",
      "xprop (as dependency for xdotool)",
      "notify-send",
    ],
    contrib: [
      { name: "TheEdgeOfRage", link: "https://github.com/TheEdgeOfRage" },
    ],
  },
  {
    name: "cmus",
    description: "Displays information about the current song in cmus.",
    tech: ["ex"],
    requirements: ["cmus-remote"],
    parameters: [
      {
        name: "cmus.format",
        description:
          "Format string for the song information. Tag values can be put in curly brackets (i.e. {artist})",
        defaultChoice: "",
        example:
          "{file} - full song file name, {file1} - song file name without path prefix if {file} = ‘/foo/bar.baz’, then {file1} = ‘bar.baz’",
      },
      {
        name: "cmus.layout",
        description:
          "Space-separated list of widgets to add. Possible widgets are the buttons/toggles cmus.prev, cmus.next, cmus.shuffle and cmus.repeat, and the main display with play/pause function cmus.main.",
        defaultChoice: "",
        example: "",
      },
      {
        name: "cmus.server",
        description:
          "The address of the cmus server, either a UNIX socket or host[:port]. Connects to the local instance by default.",
        defaultChoice: "",
        example: "",
      },
      {
        name: "cmus.passwd",
        description: "The password to use for the TCP/IP connection.",
        defaultChoice: "",
        example: "",
      },
    ],
    contrib: [
      { name: "TheEdgeOfRage", link: "https://github.com/TheEdgeOfRage" },
    ],
  },
  {
    name: "cpu2",
    description: "Multiwidget CPU module",
    tech: ["ex", "ex"],
    requirements: ["psutil", "sensors executable"],
    parameters: [
      {
        name: "cpu2.layout",
        description:
          "Space-separated list of widgets to add. Possible widgets are: cpu2.maxfreq, cpu2.cpuload, cpu2.coresload, cpu2.temp, cpu2.fanspeed",
        defaultChoice: "",
        example: "",
      },
      {
        name: "cpu2.colored",
        description: "1 for colored per core load graph, 0 for mono (default)",
        defaultChoice: "0",
        example: "0, 1",
      },
      {
        name: "cpu2.temp_pattern",
        description:
          "pattern to look for in the output of ‘sensors -u’; required if cpu2.temp widget is used",
        defaultChoice: "",
        example: "",
      },
      {
        name: "cpu2.fan_pattern",
        description:
          "pattern to look for in the output of ‘sensors -u’; required if cpu2.fanspeed widget is used",
        defaultChoice: "",
        example: "",
      },
    ],
    contrib: [{ name: "somospocos", link: "https://github.com/somospocos" }],
  },
  {
    name: "cpu3",
    description: "Multiwidget CPU module",
    tech: ["ex", "ex"],
    requirements: ["psutil", "sensors executable"],
    parameters: [
      {
        name: "cpu3.layout",
        description:
          "Space-separated list of widgets to add. Possible widgets are: cpu3.maxfreq, cpu3.cpuload, cpu3.coresload, cpu3.temp, cpu3.fanspeed",
        defaultChoice: "",
        example: "",
      },
      {
        name: "cpu3.colored",
        description: "1 for colored per core load graph, 0 for mono (default)",
        defaultChoice: "0",
        example: "0, 1",
      },
      {
        name: "cpu3.temp_json",
        description:
          "json path to look for in the output of ‘sensors -j’; required if cpu3.temp widget is used",
        defaultChoice: "",
        example: "coretemp-isa-0000.Package id 0.temp1_input",
      },
      {
        name: "cpu3.fan_json",
        description:
          "json path to look for in the output of ‘sensors -j’; required if cpu3.fanspeed widget is used",
        defaultChoice: "",
        example: "thinkpad-isa-0000.fan1.fan1_input",
      },
    ],
    contrib: [
      { name: "SuperQ", link: "https://github.com/SuperQ" },
      { name: "somospocos", link: "https://github.com/somospocos" },
    ],
  },
  {
    name: "currency",
    description:
      "Displays currency exchange rates. Currently, displays currency between GBP and USD/EUR only.Note: source and destination names right now must correspond to the names used by the API of https://markets.ft.com",
    tech: ["py"],
    requirements: ["requests"],
    parameters: [
      {
        name: "currency.interval",
        description: "Interval in minutes between updates, default is 1.",
        defaultChoice: "1",
        example: "1 - 60",
      },
      {
        name: "currency.source",
        description:
          "Source currency (ex. ‘GBP’, ‘EUR’). Defaults to ‘auto’, which infers the local one from IP address.",
        defaultChoice: "auto",
        example: "GBP, EUR",
      },
      {
        name: "currency.destination",
        description:
          "Comma-separated list of destination currencies (defaults to ‘USD,EUR’)",
        defaultChoice: "USD,EUR",
        example: "INR,EUR",
      },
      {
        name: "currency.sourceformat",
        description:
          "String format for source formatting; Defaults to ‘{}: {}’ and has two variables, the base symbol and the rate list",
        defaultChoice: "{}: {}",
        example: "",
      },
      {
        name: "currency.destinationdelimiter",
        description:
          "Delimiter used for separating individual rates (defaults to ‘|’)",
        defaultChoice: "|",
        example: "| || emojis",
      },
    ],
    contrib: [{ name: "AntouanK", link: "https://github.com/AntouanK" }],
  },
  {
    name: "datetimetz",
    description: "Displays the current date and time with timezone options.",
    tech: ["py", "py"],
    requirements: ["tzlocal", "pytz"],
    parameters: [
      {
        name: "datetimetz.format",
        description: "strftime()-compatible formatting string",
        defaultChoice: "%x %X %Z",
        example: "%H:%M, %H : %M : %S",
      },
      {
        name: "datetimetz.timezone",
        description: "IANA timezone name",
        defaultChoice: "",
        example: "America/New_York",
      },
      {
        name: "datetz.format",
        description: "alias for datetimetz.format",
        defaultChoice: "%x %Z",
        example: "%x %Z",
      },
      {
        name: "timetz.format",
        description: "alias for datetimetz.format",
        defaultChoice: "%X %Z",
        example: "%X %Z",
      },
      {
        name: "timetz.timezone",
        description: "alias for datetimetz.timezone",
        defaultChoice: "",
        example: "America/New_York",
      },
      {
        name: "datetimetz.locale",
        description: "locale to use rather than the system default",
        defaultChoice: "",
        example: "",
      },
      {
        name: "datetz.locale",
        description: "alias for datetimetz.locale",
        defaultChoice: "",
        example: "",
      },
      {
        name: "timetz.locale",
        description: "alias for datetimetz.locale",
        defaultChoice: "",
        example: "",
      },
      {
        name: "timetz.timezone",
        description: "alias for datetimetz.timezone",
        defaultChoice: "",
        example: "",
      },
    ],
    contrib: [{ name: "frankzhao", link: "https://github.com/frankzhao" }],
  },
  {
    name: "datetz",
    description: "Displays the current date and time.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "date.format",
        description: "strftime()-compatible formatting string",
        defaultChoice: "%x %Z",
        example: "%H:%M, %H : %M : %S",
      },
      {
        name: "date.locale",
        description: " locale to use rather than the system default",
        defaultChoice: "",
        example: "",
      },
    ],
  },
  {
    name: "deadbeef",
    description:
      "Displays the current song being played in DeaDBeeF and provides some media control bindings. Left click toggles pause, scroll up skips the current song, scroll down returns to the previous song.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "deadbeef.format",
        description:
          " Format string (defaults to ‘{artist} - {title}’) Available values are: {artist}, {title}, {album}, {length}, {trackno}, {year}, {comment}, {copyright}, {time} This is deprecated, but much simpler.",
        defaultChoice: "{artist} - {title}",
        example: "{title} - {length}",
      },
      {
        name: "deadbeef.tf_format",
        description:
          "A foobar2000 title formatting-style format string. These can be much more sophisticated than the standard format strings. This is off by default, but specifying any tf_format will enable it. If both deadbeef.format and deadbeef.tf_format are specified, deadbeef.tf_format takes priority.",
        defaultChoice: "",
        example: "%artist% - %title%",
      },
      {
        name: "deadbeef.tf_format_if_stopped",
        description:
          "Controls whether or not the tf_format format string should be displayed even if no song is paused or playing. This could be useful if you want to implement your own stop strings with the built in logic. Any non- null value will enable this (by default the module will hide itself when the player is stopped).",
        defaultChoice: "",
        example: "",
      },
      {
        name: "deadbeef.previous",
        description:
          " Change binding for previous song (default is left click)",
        defaultChoice: "LEFT_CLICK",
        example:
          "LEFT_CLICK, RIGHT_CLICK, MIDDLE_CLICK, SCROLL_UP, SCROLL_DOWN",
      },
      {
        name: "deadbeef.next",
        description: " Change binding for next song (default is right click)",
        defaultChoice: "RIGHT_CLICK",
        example:
          "LEFT_CLICK, RIGHT_CLICK, MIDDLE_CLICK, SCROLL_UP, SCROLL_DOWN",
      },
      {
        name: "deadbeef.pause",
        description:
          "Change binding for toggling pause (default is middle click)",
        defaultChoice: "MIDDLE_CLICK",
        example:
          "LEFT_CLICK, RIGHT_CLICK, MIDDLE_CLICK, SCROLL_UP, SCROLL_DOWN",
      },
    ],
    contrib: [{ name: "joshbarrass ", link: "https://github.com/joshbarrass" }],
  },
  {
    name: "deezer",
    description: "Displays the current song being played",
    tech: ["py"],
    requirements: ["python-dbus"],
    parameters: [
      {
        name: "deadbeef.format",
        description:
          "Format string (defaults to ‘{artist} - {title}’) Available values are: {album}, {title}, {artist}, {trackNumber}, {playbackStatus}",
        defaultChoice: "{artist} - {title}",
        example: "{title} - {album}",
      },
      {
        name: "deezer.previous",
        description: "Change binding for previous song (default is left click)",
        defaultChoice: "LEFT_CLICK",
        example:
          "LEFT_CLICK, RIGHT_CLICK, MIDDLE_CLICK, SCROLL_UP, SCROLL_DOWN",
      },
      {
        name: "deezer.next",
        description: "Change binding for next song (default is right click)",
        defaultChoice: "RIGHT_CLICK",
        example:
          "LEFT_CLICK, RIGHT_CLICK, MIDDLE_CLICK, SCROLL_UP, SCROLL_DOWN",
      },
      {
        name: "deezer.pause",
        description:
          "Change binding for toggling pause (default is middle click)",
        defaultChoice: "MIDDLE_CLICK",
        example:
          "LEFT_CLICK, RIGHT_CLICK, MIDDLE_CLICK, SCROLL_UP, SCROLL_DOWN",
      },
    ],
    contrib: [{ name: "wwmoraes ", link: "https://github.com/wwmoraes" }],
  },
  {
    name: "dnf",
    description:
      "Displays DNF package update information (<security>/<bugfixes>/<enhancements>/<other>)",
    tech: ["ex"],
    requirements: ["dnf"],
  },
  {
    name: "docker_ps",
    description: "Displays the number of docker containers running",
    tech: ["py"],
    requirements: ["docker"],
    contrib: [{ name: "jlopezzarza ", link: "https://github.com/jlopezzarza" }],
  },
  {
    name: "dunst",
    description: "Toggle dunst notifications.",
    tech: [""],
    requirements: [""],
    contrib: [{ name: "eknoes ", link: "https://github.com/eknoes" }],
  },
  {
    name: "dunstctl",
    description:
      "Toggle dunst notifications using dunstctl. When notifications are paused using this module dunst doesn’t get killed and you’ll keep getting notifications on the background that will be displayed when unpausing. This is specially useful if you’re using dunst’s scripting (https://wiki.archlinux.org/index.php/Dunst#Scripting), which requires dunst to be running. Scripts will be executed when dunst gets unpaused.",
    tech: [""],
    requirements: ["dunst v1.5.0+"],
    parameters: [
      {
        name: "dunstctl.disabled(Boolean)",
        description: "dunst state on start",
        defaultChoice: "False",
        example: "True, False",
      },
    ],
    contrib: [
      { name: "cristianmiranda ", link: "https://github.com/cristianmiranda" },
      { name: "joachimmathes ", link: "https://github.com/joachimmathes" },
    ],
  },
  {
    name: "emerge_status",
    description:
      "Display information about the currently running emerge process.",
    tech: ["ex"],
    requirements: ["emerge"],
    parameters: [
      {
        name: "emerge_status.format",
        description:
          "Format string (defaults to ‘{current}/{total} {action} {category}/{pkg}’)",
        defaultChoice: "{current}/{total} {action} {category}/{pkg}",
        example: "{current}/{total}",
      },
    ],
    contrib: [
      {
        name: "based on emerge_status module created by AnwariasEu ",
        link: "https://github.com/ultrabug/py3status/blob/master/py3status/modules/emerge_status.py",
      },
    ],
  },
  {
    name: "gcalendar",
    description:
      "Displays first upcoming event in google calendar.Events that are set as ‘all-day’ will not be shown.Requires credentials.json from a google api application where the google calendar api is installed. On first time run the browser will open and google will ask for permission for this app to access the google calendar and then save a .gcalendar_token.json file to the credentials_path directory which stores this permission.A refresh is done every 15 minutes.",
    tech: ["py", "py", "py"],
    requirements: [
      "google-api-python-client",
      "google-auth-httplib2",
      "google-auth-oauthlib",
    ],
  },
  {
    name: "getcrypto",
    description: "Displays the price of a cryptocurrency.",
    tech: ["py"],
    requirements: ["requests"],
    parameters: [
      {
        name: "getcrypto.interval",
        description:
          "Interval in seconds for updating the price, default is 120, less than that will probably get your IP banned.",
        defaultChoice: "120",
        example: "60, 120, 360",
      },
      {
        name: "getcrypto.getbtc",
        description:
          "0 for not getting price of BTC, 1 for getting it (default).",
        defaultChoice: "1",
        example: "0, 1",
      },
      {
        name: "getcrypto.geteth",
        description:
          "0 for not getting price of ETH, 1 for getting it (default).",
        defaultChoice: "1",
        example: "0, 1",
      },
      {
        name: "getcrypto.getltc",
        description:
          "0 for not getting price of LTC, 1 for getting it (default).",
        defaultChoice: "1",
        example: "0, 1",
      },
      {
        name: "getcrypto.getcur",
        description:
          "Set the currency to display the price in, usd is the default.",
        defaultChoice: "usd",
        example: "inr, eur",
      },
    ],
    contrib: [
      {
        name: "Ryunaq",
        link: "https://github.com/Ryunaq",
      },
    ],
  },
  {
    name: "github",
    description:
      "Displays the unread GitHub notifications count for a GitHub user using the following reasons: https://developer.github.com/v3/activity/notifications/#notification-reasons",
    tech: ["py"],
    requirements: ["requests"],
    parameters: [
      {
        name: "github.token",
        description:
          " GitHub user access token, the token needs to have the ‘notifications’ scope.",
        defaultChoice: "",
        example: "ghp_dummytoken1234567890",
      },
      {
        name: "github.interval",
        description: "Interval in minutes between updates, default is 5.",
        defaultChoice: "5",
        example: "10, 15",
      },
      {
        name: "github.reasons",
        description:
          "Comma separated reasons to be parsed (e.g.: github.reasons=mention,team_mention,review_requested)",
        defaultChoice: "",
        example: "mention,team_mention,review_requested",
      },
    ],
    contrib: [
      {
        name: "yvesh",
        link: "https://github.com/yvesh",
      },
      {
        name: "cristianmiranda",
        link: "https://github.com/cristianmiranda",
      },
    ],
  },
  {
    name: "gitlab",
    description:
      "Displays the GitLab todo count: https://docs.gitlab.com/ee/user/todos.html , https://docs.gitlab.com/ee/api/todos.html. Uses xdg-open or x-www-browser to open web-pages. if the GitLab todo query failed, the shown value is n/a",
    tech: ["py"],
    requirements: ["requests"],
    parameters: [
      {
        name: "gitlab.token",
        description:
          "GitLab personal access token, the token needs to have the “read_api” scope.",
        defaultChoice: "",
        example: "gitlab_dummytoken9876543210",
      },
      {
        name: "gitlab.host",
        description: "Host of the GitLab instance, default is “gitlab.com”.",
        defaultChoice: "gitlab.com",
        example: "gitlab.com, gitlab.example.com",
      },
      {
        name: "gitlab.actions",
        description:
          "Comma separated actions to be parsed (e.g.: gitlab.actions=assigned,approval_required)",
        defaultChoice: "",
        example: "assigned,approval_required",
      },
    ],
  },
  {
    name: "gpmdp",
    description:
      "Displays information about the current song in Google Play music player.",
    tech: ["ex"],
    requirements: ["gpmdp-remote"],
    contrib: [
      {
        name: "TheEdgeOfRage",
        link: "https://github.com/TheEdgeOfRage",
      },
    ],
  },
  {
    name: "hddtemp",
    description:
      "Fetch hard drive temperature data from a hddtemp daemon that runs on localhost and default port (7634)",
    tech: [""],
    requirements: [""],
    contrib: [
      {
        name: "somospocos",
        link: "https://github.com/somospocos",
      },
    ],
  },
  {
    name: "hostname",
    description: "Displays the system hostname.",
    tech: [""],
    requirements: [""],
    contrib: [
      {
        name: "varkokonyi",
        link: "https://github.com/varkokonyi",
      },
    ],
  },
  {
    name: "http_status",
    description: "Display HTTP status code",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "http__status.label",
        description: "Prefix label (optional)",
        defaultChoice: "",
        example: "",
      },
      {
        name: "http__status.target",
        description: "Target to retrieve the HTTP status from",
        defaultChoice: "",
        example: "https://www.google.com",
      },
      {
        name: "http__status.expect",
        description: "Expected HTTP status",
        defaultChoice: "",
        example: "200",
      },
    ],
    contrib: [
      {
        name: "valkheim",
        link: "https://github.com/valkheim",
      },
    ],
  },
  {
    name: "indicator",
    description:
      "Displays the indicator status, for numlock, scrolllock and capslock",
    tech: ["ex"],
    requirements: ["xset"],
    parameters: [
      {
        name: "indicator.include",
        description:
          "Comma-separated list of interface prefixes to include (defaults to ‘numlock,capslock’)",
        defaultChoice: "numlock,capslock",
        example: "numlock,capslock,scrolllock",
      },
      {
        name: "indicator.signalstype",
        description:
          "If you want the signali type color to be ‘critical’ or ‘warning’ (defaults to ‘warning’)",
        defaultChoice: "warning",
        example: "critical, warning",
      },
    ],
    contrib: [
      {
        name: "freed00m",
        link: "https://github.com/freed00m",
      },
    ],
  },
  {
    name: "kernel",
    description: "Shows Linux kernel version information",
    tech: [""],
    requirements: [""],
    contrib: [
      {
        name: "pierre87",
        link: "https://github.com/pierre87",
      },
    ],
  },
  {
    name: "layout-xkbswitch",
    description: "Displays and changes the current keyboard layout",
    tech: ["ex"],
    requirements: ["xkb-switch"],
    contrib: [
      {
        name: "somospocos",
        link: "https://github.com/somospocos",
      },
    ],
  },
  {
    name: "layout_xkbswitch",
    description: "Displays and changes the current keyboard layout",
    tech: ["ex"],
    requirements: ["xkb-switch"],
    contrib: [
      {
        name: "somospocos",
        link: "https://github.com/somospocos",
      },
    ],
  },
  {
    name: "libvirtvms",
    description: "Displays count of running libvirt VMs.",
    tech: ["py"],
    requirements: ["libvirt"],
    contrib: [
      {
        name: "maxpivo",
        link: "https://github.com/maxpivo",
      },
    ],
  },
  {
    name: "messagereceiver",
    description: "Displays the message that’s received via unix socket.",
    tech: ["ex"],
    requirements: ["xset"],
    parameters: [
      {
        name: "messagereceiver",
        description:
          "Unix socket address (e.g: /tmp/bumblebee_messagereceiver.sock)",
        defaultChoice: "",
        example: "/tmp/bumblebee_messagereceiver.sock",
      },
    ],
    contrib: [
      {
        name: "bbernhard",
        link: "https://github.com/bbernhard",
      },
    ],
  },
  {
    name: "mocp",
    description:
      "Displays information about the current song in mocp. Left click toggles play/pause. Right click toggles shuffle.",
    tech: ["ex"],
    requirements: ["mocp"],
    parameters: [
      {
        name: "mocp.format",
        description:
          "Format string for the song information. Replace string sequences with the actual information.",
        defaultChoice: "%state %artist - %song | %ct/%tt",
        example:
          "%state State, %file File, %title Title, includes track, artist, song title and album, %artist Artist, %song SongTitle and many more.",
      },
    ],
    contrib: [
      {
        name: "chrugi",
        link: "https://github.com/chrugi",
      },
    ],
  },
  {
    name: "mpd",
    description: "Displays information about the current song in mpd.",
    tech: ["ex"],
    requirements: ["mpc"],
    parameters: [
      {
        name: "mpd.format",
        description: "Format string for the song information.",
        defaultChoice: "{artist} - {title} {position}/{duration}",
        example:
          "{name}, {artist}, {album}, {albumartist}, {genre}, {performer} and many more",
      },
      {
        name: "mpd.host",
        description: "MPD host to connect to. (mpc behaviour by default)",
        defaultChoice: "",
        example: "",
      },
      {
        name: "mpd.port",
        description: "MPD port to connect to. (mpc behaviour by default)",
        defaultChoice: "",
        example: "",
      },
      {
        name: "mpd.layout",
        description:
          "Space-separated list of widgets to add. Possible widgets are the buttons/toggles mpd.prev, mpd.next, mpd.shuffle and mpd.repeat, and the main display with play/pause function mpd.main.",
        defaultChoice: "mpd.prev mpd.main mpd.next mpd.shuffle mpd.repeat",
        example: " mpd.repeat mpd.prev mpd.main mpd.next",
      },
    ],
    contrib: [
      {
        name: "alrayyes",
        link: "https://github.com/alrayyes",
      },
    ],
  },
  {
    name: "network",
    description:
      "A module to show the currently active network connection (ethernet or wifi) and connection strength if the connection is wireless.",
    tech: ["py", "py"],
    requirements: ["netifaces", "iw"],
  },
  {
    name: "network_traffic",
    description: "Displays network traffic, No extra configuration needed",
    tech: [""],
    requirements: [""],
    contrib: [
      {
        name: "izn",
        link: "https://github.com/izn",
      },
    ],
  },
  {
    name: "notmuch_count",
    description:
      "Displays the result of a notmuch count query default : unread emails which path do not contained ‘Trash’ (notmuch count ‘tag:unread AND NOT path:/.*Trash.*/’)",
    tech: [""],
    requirements: ["notmuch (https://notmuchmail.org/)"],
    parameters: [
      {
        name: "notmuch_count.query",
        description: "notmuch count query to show result",
        defaultChoice: "tag:unread AND NOT path:/.*Trash.*/",
        example: "",
      },
    ],
    contrib: [
      {
        name: "abdoulayeYATERA",
        link: "https://github.com/abdoulayeYATERA",
      },
    ],
  },
  {
    name: "nvidiagpu",
    description:
      "Displays GPU name, temperature and memory usage. Note: mem_io_pct is (from man nvidia-smi): > Percent of time over the past sample period during which global (device) > memory was being read or written.",
    tech: [""],
    requirements: ["nvidia-smi"],
    parameters: [
      {
        name: "nvidiagpu.format",
        description:
          "Format string (defaults to ‘{name}: {temp}°C %{usedmem}/{totalmem} MiB’) Available values are: {name} {temp} {mem_used} {mem_total} {fanspeed} {clock_gpu} {clock_mem} {gpu_usage_pct} {mem_usage_pct} {mem_io_pct}",
        defaultChoice: "‘{name}: {temp}°C %{usedmem}/{totalmem} MiB",
        example: "{name} : {temp}% {mem_used} {mem_total}",
      },
    ],
    contrib: [
      {
        name: "RileyRedpath",
        link: "https://github.com/RileyRedpath",
      },
    ],
  },
  {
    name: "octoprint",
    description:
      "Displays the Octorrint status and the printer’s bed/tools temperature in the status bar.Left click opens a popup which shows the bed & tools temperatures and additionally a livestream of the webcam (if enabled).",
    tech: ["py"],
    requirements: ["python-tk or python3-tk"],
    parameters: [
      {
        name: "octoprint.address",
        description: "Octoprint address (e.q: http://192.168.1.3)",
        defaultChoice: "",
        example: "http://192.168.1.3",
      },
      {
        name: "octoprint.apitoken",
        description:
          "Octorpint API Token (can be obtained from the Octoprint Webinterface)",
        defaultChoice: "",
        example: "1234567890ABCDEF1234567890ABCDEF",
      },
      {
        name: "octoprint.webcam",
        description: "Set to True if a webcam is connected (default: False)",
        defaultChoice: "False",
        example: "True, False",
      },
    ],
    contrib: [
      {
        name: "bbernhard",
        link: "https://github.com/bbernhard",
      },
    ],
  },
  {
    name: "optman",
    description: "Displays currently active gpu by optimus-manager.",
    tech: [""],
    requirements: ["optimus-manager"],
  },
  {
    name: "pacman",
    description: "Displays update information per repository for pacman.",
    tech: ["ex", "ex"],
    requirements: ["fakeroot", "pacman"],
    parameters: [
      {
        name: "pacman.sum",
        description:
          "If you prefer displaying updates with a single digit (defaults to ‘False’)",
        defaultChoice: "False",
        example: "False, True",
      },
    ],
    contrib: [
      {
        name: "Pseudonick47",
        link: "https://github.com/Pseudonick47",
      },
    ],
  },
  {
    name: "pamixer",
    description: "get volume level or control it",
    tech: ["ex"],
    requirements: ["pamixer"],
    parameters: [
      {
        name: "pamixer.percent_change",
        description:
          "How much to change volume by when scrolling on the module (default is 4%)",
        defaultChoice: "4%",
        example: "6%, 10%",
      },
    ],
  },
  {
    name: "persian_date",
    description:
      "Displays the current date and time in Persian(Jalali) Calendar.",
    tech: ["py"],
    requirements: ["jdatetime"],
    parameters: [
      {
        name: "datetime.format",
        description:
          "strftime()-compatible formatting string. default: “%A %d %B” e.g., “جمعه ۱۳ اسفند”",
        defaultChoice: "%A %d %B",
        example: "%A %B",
      },
      {
        name: "datetime.locale",
        description: "locale to use. default: “fa_IR”",
        defaultChoice: "fa_IR",
        example: "fa_IR",
      },
    ],
  },
  {
    name: "pihole",
    description:
      "Displays the pi-hole status (up/down) together with the number of ads that were blocked today",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "pihole.address",
        description: "pi-hole address (e.q: http://192.168.1.3)",
        defaultChoice: "",
        example: "http://192.168.1.3",
      },
      {
        name: "pihole.apitoken",
        description:
          "pi-hole API token (can be obtained in the pi-hole webinterface (Settings -> API)",
        defaultChoice: "",
        example: "",
      },
    ],
    contrib: [
      {
        name: "bbernhard",
        link: "https://github.com/bbernhard",
      },
    ],
  },
  {
    name: "pipewire",
    description: "get volume level or control it",
    tech: ["ex"],
    requirements: ["wpctl"],
    parameters: [
      {
        name: "wpctl.percent_change",
        description:
          "How much to change volume by when scrolling on the module (default is 4%)",
        defaultChoice: "4%",
        example: "5%, 10%",
      },
    ],
  },
  {
    name: "playerctl",
    description:
      "Displays information about the current song in vlc, audacious, bmp, xmms2, spotify and others",
    tech: ["ex"],
    requirements: ["playerctl"],
    parameters: [
      {
        name: "playerctl.format",
        description:
          "Format string (defaults to ‘{{artist}} - {{title}} {{duration(position)}}/{{duration(mpris:length)}}’). The format string is passed to ‘playerctl -f’ as an argument. Read the README(https://github.com/altdesktop/playerctl#printing-properties-and-metadata) for more information.",
        defaultChoice:
          "‘{{artist}} - {{title}} {{duration(position)}}/{{duration(mpris:length)}}",
        example:
          "{artist} - {title} {duration(position)}/{duration(mpris:length)}",
      },
      {
        name: "playerctl.layout",
        description:
          "Comma-separated list to change order of widgets (defaults to song, previous, pause, next) Widget names are: playerctl.song, playerctl.prev, playerctl.pause, playerctl.next",
        defaultChoice: "song, previous, pause, next",
        example: "previous, pause, next",
      },
      {
        name: "playerctl.args",
        description:
          "The arguments added to playerctl. You can check ‘playerctl –help’ or its README(https://github.com/altdesktop/playerctl#using-the-cli). For example, it could be ‘-p vlc,%any’.",
        defaultChoice: "",
        example: "-p vlc,%any",
      },
      {
        name: "playerctl.hide",
        description:
          "Hide the widgets when no players are found. Defaults to “false”.",
        defaultChoice: "false",
        example: "false, true",
      },
    ],
    contrib: [
      {
        name: "smitajit",
        link: "https://github.com/smitajit",
      },
    ],
  },
  {
    name: "pomodoro",
    description:
      "Display and run a Pomodoro timer. Left click to start timer, left click again to pause. Right click will cancel the timer.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "pomodoro.work",
        description: "The work duration of timer in minutes (defaults to 25)",
        defaultChoice: "25",
        example: "25, 60, 90",
      },
      {
        name: "pomodoro.break",
        description: "The break duration of timer in minutes (defaults to 5)",
        defaultChoice: "5",
        example: "5, 10, 15",
      },
      {
        name: "pomodoro.format",
        description:
          "Timer display format with ‘%m’ and ‘%s’ for minutes and seconds (defaults to ‘%m:%s’) Examples: ‘%m min %s sec’, ‘%mm’, ‘’, ‘timer’",
        defaultChoice: "%m:%s",
        example: "%m min %s sec",
      },
      {
        name: "pomodoro.notify",
        description:
          "Notification command to run when timer ends/starts (defaults to nothing) Example: ‘notify-send ‘Time up!’’. If you want to chain multiple commands, please use an external wrapper script and invoke that. The module itself does not support command chaining (see https://github.com/tobi-wan-kenobi/bumblebee-status/issues/532 for a detailed explanation)",
        defaultChoice: "notify-send ‘Time up!’",
        example: "",
      },
    ],
    contrib: [
      {
        name: "martindoublem",
        link: "https://github.com/martindoublem",
      },
    ],
  },
  {
    name: "portage_status",
    description: "Displays the status of Gentoo portage operations.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "portage_status.logfile",
        description: "logfile for portage (default is /var/log/emerge.log)",
        defaultChoice: "/var/log/emerge.log",
        example: "",
      },
    ],
    contrib: [
      {
        name: "andrewreisner",
        link: "https://github.com/andrewreisner",
      },
    ],
  },
  {
    name: "prime",
    description: "Displays and changes the current selected prime video card",
    tech: ["ex", "ex"],
    requirements: ["sudo", "prime-select"],
    parameters: [
      {
        name: "prime.nvidiastring",
        description:
          "String to use when nvidia is selected (defaults to ‘intel’)",
        defaultChoice: "nv",
        example: "nvidia, lorem ipsum",
      },
      {
        name: "prime.intelstring",
        description:
          "String to use when intel is selected (defaults to ‘intel’)",
        defaultChoice: "it",
        example: "intel, lorem ipsum",
      },
    ],
    contrib: [
      {
        name: "jeffeb3",
        link: "https://github.com/jeffeb3",
      },
    ],
  },
  {
    name: "progress",
    description: "Show progress for cp, mv, dd, …",
    tech: ["ex"],
    requirements: ["progress"],
    parameters: [
      {
        name: "progress.placeholder",
        description:
          "Text to display while no process is running (defaults to ‘n/a’)",
        defaultChoice: "n/a",
        example: "none",
      },
      {
        name: "progress.barwidth",
        description: "Width of the progressbar if it is used (defaults to 8)",
        defaultChoice: "8",
        example: "10, 20",
      },
      {
        name: "progress.format",
        description:
          "Format string (defaults to ‘{bar} {cmd} {arg}’) Available values are: {bar} {pid} {cmd} {arg} {percentage} {quantity} {speed} {time}",
        defaultChoice: "{bar} {cmd} {arg}",
        example:
          "{bar} {pid} {cmd} {arg} {percentage} {quantity} {speed} {time}",
      },
      {
        name: "progress.barfilledchar",
        description:
          " Character used to draw the filled part of the bar (defaults to ‘#’), notice that it can be a string",
        defaultChoice: "#",
        example: "~, =",
      },
      {
        name: "progress.baremptychar",
        description:
          "Character used to draw the empty part of the bar (defaults to ‘-‘), notice that it can be a string",
        defaultChoice: "-",
        example: "<empty>, ^",
      },
    ],
    contrib: [
      {
        name: "remi-dupre",
        link: "https://github.com/remi-dupre",
      },
    ],
  },
  {
    name: "publicip",
    description:
      "Displays information about the public IP address associated with the default route: Public IP address, Country Name, Country Code, City Name, Geographic Coordinates",
    tech: [""],
    requirements: ["netifaces"],
    parameters: [
      {
        name: "publicip.format",
        description: "Format string (defaults to ‘{ip} ({country_code})’)",
        defaultChoice: "{ip} ({country_code})",
        example:
          "Available format strings - ip, country_name, country_code, city_name, coordinates",
      },
    ],
    contrib: [
      {
        name: "tfwiii",
        link: "https://github.com/tfwiii",
      },
    ],
  },
  {
    name: "rofication",
    description:
      "Rofication indicator https://github.com/DaveDavenport/Rofication simple module to show an icon + the number of notifications stored in rofication module will have normal highlighting if there are zero notifications",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "rofication.regolith",
        description:
          "Switch to regolith fork of rofication, see <https://github.com/regolith-linux/regolith-rofication>.",
        defaultChoice: "",
        example: "",
      },
    ],
  },
  {
    name: "rotation",
    description:
      "Shows a widget for each connected screen and allows the user to loop through different orientations.",
    tech: ["ex"],
    requirements: ["xrandr"],
  },
  {
    name: "rss",
    description:
      "RSS news ticker Fetches rss news items and shows these as a news ticker. Left-clicking will open the full story in a browser. New stories are highlighted.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "rss.feeds",
        description: "Space-separated list of RSS URLs",
        defaultChoice: "https://www.espn.com/espn/rss/news",
        example: "",
      },
      {
        name: "rss.length",
        description: "Maximum length of the module, default is 60",
        defaultChoice: "60",
        example: "120, 140",
      },
    ],
    contrib: [
      {
        name: "lonesomebyte537",
        link: "https://github.com/lonesomebyte537",
      },
    ],
  },
  {
    name: "sensors",
    description: "Displays sensor temperature",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "sensors.use_sensors",
        description: "whether to use the sensors command",
        defaultChoice: "",
        example: "True, False",
      },
      {
        name: "sensors.path",
        description:
          "path to temperature file (default /sys/class/thermal/thermal_zone0/temp).",
        defaultChoice: "/sys/class/thermal/thermal_zone0/temp",
        example: "",
      },
      {
        name: "sensors.json",
        description:
          "if set to ‘true’, interpret sensors.path as JSON ‘path’ in the output of ‘sensors -j’ (i.e. <key1>/<key2>/…/<value>), for example, path could be: ‘coretemp-isa-00000/Core 0/temp1_input’ (defaults to ‘false’)",
        defaultChoice: "false",
        example: "false, true",
      },
      {
        name: "sensors.match",
        description:
          "(fallback) Line to match against output of ‘sensors -u’ (default: temp1_input)",
        defaultChoice: "temp1_input",
        example: "",
      },
      {
        name: "sensors.match_pattern",
        description:
          "(fallback) Line to match against before temperature is read (no default)",
        defaultChoice: "",
        example: "",
      },
      {
        name: "sensors.match_number",
        description:
          "(fallback) which of the matches you want (default -1: last match).",
        defaultChoice: "-1 (last match)",
        example: "1, 2, -2",
      },
      {
        name: "sensors.show_freq",
        description: "whether to show CPU frequency. (default: true)",
        defaultChoice: "true",
        example: "true, false",
      },
    ],
    contrib: [
      {
        name: "mijoharas",
        link: "https://github.com/mijoharas",
      },
    ],
  },
  {
    name: "shell",
    description:
      "Execute command in shell and print result Few command examples: ‘ping -c 1 1.1.1.1 | grep -Po ‘(?<=time=)d+(.d+)? ms’’ ‘echo ‘BTC=$(curl -s rate.sx/1BTC | grep -Po '^d+')USD’’ ‘curl -s https://wttr.in/London?format=%l+%t+%h+%w’ ‘pip3 freeze | wc -l’ ‘any_custom_script.sh | grep arguments’",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "shell.command",
        description:
          "Command to execute Use single parentheses if evaluating anything inside (sh-style) For example shell.command=’echo $(date +’%H:%M:%S’)’ But NOT shell.command=’echo $(date +’%H:%M:%S’)’ Second one will be evaluated only once at startup",
        defaultChoice: "echo 'no command configured'",
        example: "echo $(date +’%H:%M:%S’)",
      },
      {
        name: "shell.interval",
        description:
          "Update interval in seconds (defaults to 1s == every bumblebee-status update)",
        defaultChoice: "1s",
        example: "2s, 4s",
      },
      {
        name: "shell.async",
        description:
          "Run update in async mode. Won’t run next thread if previous one didn’t finished yet. Useful for long running scripts to avoid bumblebee-status freezes (defaults to False)",
        defaultChoice: "False",
        example: "False, True",
      },
    ],
    contrib: [
      {
        name: "rrhuffy",
        link: "https://github.com/rrhuffy",
      },
    ],
  },
  {
    name: "shortcut",
    description:
      "Shows a widget per user-defined shortcut and allows to define the behaviour when clicking on it. For more than one shortcut, the commands and labels are strings separated by a delimiter (; semicolon by default).For example in order to create two shortcuts labeled A and B with commands cmdA and cmdB you could do: ./bumblebee-status -m shortcut -p shortcut.cmd=’firefox https://www.google.com;google-chrome https://google.com’ shortcut.label=’Google (Firefox);Google (Chrome)’",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "shortcut.cmds",
        description: "List of commands to execute",
        defaultChoice: "firefox https://www.google.com",
        example: "geany ~/.config/i3/config",
      },
      {
        name: "shortcut.labels",
        description: "List of widgets’ labels (text)",
        defaultChoice: "",
        example: "Open i3 Config using Geany",
      },
      {
        name: "shortcut.delim",
        description: "Commands and labels delimiter (; semicolon by default)",
        defaultChoice: ";",
        example: "|, ||",
      },
    ],
    contrib: [
      {
        name: "cacyss0807",
        link: "https://github.com/cacyss0807",
      },
    ],
  },
  {
    name: "smartstatus",
    description: "Displays HDD smart status of different drives or all drives",
    tech: ["ex", "ex"],
    requirements: ["sudo", "smartctl"],
    parameters: [
      {
        name: "smartstatus.display",
        description:
          " how to display (defaults to ‘combined’, other choices: ‘combined_singles’, ‘separate’ or ‘singles’)",
        defaultChoice: "combined",
        example: "combined_singles, separate or singles",
      },
      {
        name: "smartstatus.drives",
        description:
          "in the case of singles which drives to display, separated comma list value, multiple accepted (defaults to ‘sda’, example:’sda,sdc’)",
        defaultChoice: "sda",
        example: "sda,sdc",
      },
      {
        name: "smartstatus.show_names",
        description:
          " boolean in the form of “True” or “False” to show the name of the drives in the form of sda, sbd, combined or none at all.",
        defaultChoice: "True",
        example: "True, False",
      },
    ],
  },
  {
    name: "solaar",
    description:
      "Shows status and load percentage of logitech’s unifying device",
    tech: ["ex"],
    requirements: ["solaar (from community)"],
    contrib: [
      {
        name: "cambid",
        link: "https://github.com/cambid",
      },
    ],
  },
  {
    name: "spaceapi",
    description:
      "Displays the state of a Space API endpoint Space API is an API for hackspaces based on JSON. See spaceapi.io for an example.",
    tech: [""],
    requirements: ["requests"],
    parameters: [
      {
        name: "spaceapi.url",
        description: "String representation of the api endpoint",
        defaultChoice: "http://club.entropia.de/spaceapi",
        example: "",
      },
      {
        name: "spaceapi.format",
        description: "Format string for the output",
        defaultChoice: " %%space%%: %%state.open%Open%Closed%%",
        example: " %%space%%: %%state.open%Open%Closed%%",
      },
    ],
    contrib: [
      {
        name: "rad4day",
        link: "https://github.com/rad4day",
      },
    ],
  },
  {
    name: "spotify",
    description:
      "Displays the current song being played and allows pausing, skipping ahead, and skipping back.",
    tech: ["py"],
    requirements: ["python-dbus"],
    parameters: [
      {
        name: "spotify.format",
        description:
          "Format string (defaults to ‘{artist} - {title}’) Available values are: {album}, {title}, {artist}, {trackNumber}",
        defaultChoice: "{artist} - {title}",
        example: "{title} - {trackNumber}",
      },
      {
        name: "spotify.layout",
        description:
          "Comma-separated list to change order of widgets (defaults to song, previous, pause, next) Widget names are: spotify.song, spotify.prev, spotify.pause, spotify.next",
        defaultChoice: "song, previous, pause, next",
        example: "previous, pause, next",
      },
      {
        name: "spotify.concise_controls",
        description:
          "When enabled, allows spotify to be controlled from just the spotify.song widget. Concise controls are: Left Click: Toggle Pause; Wheel Up: Next; Wheel Down; Previous.",
        defaultChoice: "false",
        example: "false, true",
      },
      {
        name: "spotify.bus_name",
        description:
          "String (defaults to spotify) Available values: spotify, spotifyd",
        defaultChoice: "spotify",
        example: "spotify, spotifyd",
      },
    ],
    contrib: [
      {
        name: "yvesh",
        link: "https://github.com/yvesh",
      },
      {
        name: "LtPeriwinkle",
        link: "https://github.com/LtPeriwinkle",
      },
      {
        name: "gkeep",
        link: "https://github.com/gkeep",
      },
    ],
  },
  {
    name: "stock",
    description: "Display a stock quote from finance.yahoo.com",
    tech: ["py"],
    requirements: ["python-dbus"],
    parameters: [
      {
        name: "stock.symbols",
        description: "Comma-separated list of symbols to fetch",
        defaultChoice: "",
        example: "AAPL, GOOG, MSFT",
      },
      {
        name: "stock.apikey",
        description: "API key created on https://alphavantage.co",
        defaultChoice: "",
        example: "1234567890",
      },
      {
        name: "stock.url",
        description:
          "URL to use, defaults to “https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={apikey}”",
        defaultChoice:
          "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={apikey}",
        example: "",
      },
      {
        name: "stock.fields",
        description:
          "Fields from the response to show, defaults to “01. symbol,05. price,10. change percent”",
        defaultChoice: "01. symbol,05. price,10. change percent",
        example: "",
      },
    ],
    contrib: [
      {
        name: "msoulier",
        link: "https://github.com/msoulier",
      },
    ],
  },
  {
    name: "sun",
    description:
      "Displays sunrise and sunset times. if lat and long are not set then , location is determined automatically via location APIs.",
    tech: ["py", "py", "py"],
    requirements: ["requests", "suntime", "python-dateutil"],
    parameters: [
      {
        name: "sun.lat",
        description: "Latitude of your location",
        defaultChoice: "",
        example: "48.8584",
      },
      {
        name: "sun.lon",
        description: "Longitude of your location",
        defaultChoice: "",
        example: "2.2945",
      },
    ],
    contrib: [
      {
        name: "lonesomebyte537",
        link: "https://github.com/lonesomebyte537",
      },
    ],
  },
  {
    name: "system",
    description:
      "system moduleadds the possibility to shutdown reboot the system.",
    tech: ["py"],
    requirements: ["python3-tk"],
    parameters: [
      {
        name: "system.confirm",
        description:
          "show confirmation dialog before performing any action (default: true)",
        defaultChoice: "true",
        example: "true, false",
      },
      {
        name: "system.reboot",
        description: "specify a reboot command (defaults to ‘reboot’)",
        defaultChoice: "reboot",
        example: "",
      },
      {
        name: "system.shutdown",
        description:
          "specify a shutdown command (defaults to ‘shutdown -h now’)",
        defaultChoice: "shutdown -h now",
        example: "shutdown +1",
      },
      {
        name: "system.logout",
        description: "specify a logout command (defaults to ‘i3exit logout’)",
        defaultChoice: "i3exit logout",
        example: "",
      },
      {
        name: "system.switch_user",
        description:
          "specify a command for switching the user (defaults to ‘i3exit switch_user’)",
        defaultChoice: "i3exit switch_user",
        example: "",
      },
      {
        name: "system.lock",
        description:
          "specify a command for locking the screen (defaults to ‘i3exit lock’)",
        defaultChoice: "i3exit lock",
        example: "",
      },
      {
        name: "system.suspend",
        description:
          "specify a command for suspending (defaults to ‘i3exit suspend’)",
        defaultChoice: "i3exit suspend",
        example: "",
      },
      {
        name: "system.hibernate",
        description:
          "specify a command for hibernating (defaults to ‘i3exit hibernate’)",
        defaultChoice: "i3exit hibernate",
        example: "",
      },
    ],
    contrib: [
      {
        name: "bbernhard",
        link: "https://github.com/bbernhard",
      },
    ],
  },
  {
    name: "taskwarrior",
    description: "Displays the number of pending tasks in TaskWarrior.",
    tech: ["py"],
    requirements: ["taskw"],
    parameters: [
      {
        name: "taskwarrior.taskrc",
        description: "path to the taskrc file (defaults to ~/.taskrc)",
        defaultChoice: "~/.taskrc",
        example: "~/Documents/taskrc",
      },
      {
        name: "taskwarrior.show_active",
        description:
          "true/false(default) to show the active task ID and description when one is active, otherwise show the total number pending.",
        defaultChoice: "false",
        example: "false, true",
      },
    ],
    contrib: [
      {
        name: "chdorb",
        link: "https://github.com/chdorb",
      },
    ],
  },
  {
    name: "thunderbird",
    description:
      "Displays the unread emails count for one or more Thunderbird inboxes",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "thunderbird.home",
        description:
          "Absolute path of your .thunderbird directory (e.g.: /home/pi/.thunderbird)",
        defaultChoice: "",
        example: "~/.taskrc",
      },
      {
        name: "thunderbird.inboxes",
        description:
          "Comma separated values for all MSF inboxes and their parent directory (account) (e.g.: imap.gmail.com/INBOX.msf,outlook.office365.com/Work.msf)",
        defaultChoice: "",
        example: "imap.gmail.com/INBOX.msf,outlook.office365.com/Work.msf)",
      },
    ],
    contrib: [
      {
        name: "cristianmiranda",
        link: "https://github.com/cristianmiranda",
      },
    ],
  },
  {
    name: "timetz",
    description: "Displays the current date and time.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "time.format",
        description: "strftime()-compatible formatting string",
        defaultChoice: "%X %Z",
        example: "",
      },
      {
        name: "time.locale",
        description: "locale to use rather than the system default",
        defaultChoice: "",
        example: "",
      },
    ],
  },
  {
    name: "title",
    description: "Displays focused i3 window title.",
    tech: ["py"],
    requirements: ["i3ipc"],
    parameters: [
      {
        name: "title.max",
        description:
          "Maximum character length for title before truncating. Defaults to 64.",
        defaultChoice: "64",
        example: "128, 256",
      },
      {
        name: "title.placeholder",
        description:
          "Placeholder text to be placed if title was truncated. Defaults to ‘…’",
        defaultChoice: "…",
        example: "..., ---",
      },
      {
        name: "title.scroll",
        description: "Boolean flag for scrolling title. Defaults to False",
        defaultChoice: "False",
        example: "False, True",
      },
      {
        name: "title.short",
        description: "Boolean flag for short title. Defaults to False",
        defaultChoice: "False",
        example: "False, True",
      },
    ],
    contrib: [
      {
        name: "UltimatePancake",
        link: "https://github.com/UltimatePancake",
      },
    ],
  },
  {
    name: "todo",
    description: "Displays the number of todo items from a text file.",
    tech: ["py"],
    requirements: ["i3ipc"],
    parameters: [
      {
        name: "todo.file",
        description:
          "File to read TODOs from (defaults to ~/Documents/todo.txt)",
        defaultChoice: "~/Documents/todo.txt",
        example: "~/.todo.txt",
      },
    ],
    contrib: [
      {
        name: "codingo",
        link: "https://github.com/codingo",
      },
    ],
  },
  {
    name: "todo_org",
    description:
      "Displays the number of todo items from an org-mode file Parameters",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "todo_org.file",
        description: "File to read TODOs from (defaults to ~/org/todo.org)",
        defaultChoice: "~/org/todo.org",
        example: "~/.todo.org",
      },
      {
        name: "todo_org.remaining",
        description:
          "False by default. When true, will output the number of remaining todos instead of the number completed (i.e. 1/4 means 1 of 4 todos remaining, rather than 1 of 4 todos completed)",
        defaultChoice: "False",
        example: "False, True",
      },
    ],
    contrib: [
      {
        name: "codingo",
        link: "https://github.com/codingo",
      },
    ],
  },
  {
    name: "todoist",
    description:
      "Displays the nº of Todoist tasks that are due: https://developer.todoist.com/rest/v2/#get-active-tasks Uses xdg-open or x-www-browser to open web-pages.",
    tech: [""],
    requirements: ["requests"],
    parameters: [
      {
        name: "todoist.token",
        description:
          "Todoist api token, you can get it in https://todoist.com/app/settings/integrations/developer.",
        defaultChoice: "",
        example: "1234567890ABCDEF1234567890ABCDEF",
      },
      {
        name: "todoist.filter",
        description:
          "a filter statement defined by Todoist (https://todoist.com/help/articles/introduction-to-filters), eg: “!assigned to: others & (Overdue | due: today)”",
        defaultChoice: "",
        example: "!assigned to: others & (Overdue | due: today)",
      },
    ],
  },
  {
    name: "traffic",
    description: "Displays network IO for interfaces.",
    tech: [""],
    requirements: [""],
    parameters: [
      {
        name: "traffic.exclude",
        description:
          "Comma-separated list of interface prefixes to exclude (defaults to ‘lo,virbr,docker,vboxnet,veth’)",
        defaultChoice: "lo,virbr,docker,vboxnet,veth",
        example: "",
      },
      {
        name: "traffic.states",
        description:
          "Comma-separated list of states to show (prefix with ‘^’ to invert - i.e. ^down -> show all devices that are not in state down)",
        defaultChoice: "",
        example: "lo,virbr,docker,vboxnet,veth",
      },
      {
        name: "traffic.showname",
        description:
          "If set to False, hide network interface name (defaults to True)",
        defaultChoice: "True",
        example: "True, False",
      },
      {
        name: "traffic.format",
        description:
          "Format string for download/upload speeds. Defaults to ‘{:.2f}’",
        defaultChoice: "{:.2f}",
        example: "",
      },
      {
        name: "traffic.graphlen",
        description:
          "Graph length in seconds. Positive even integer. Each char shows 2 seconds. If set, enables up/down traffic graphs",
        defaultChoice: "0",
        example: "2, 5",
      },
    ],
    contrib: [
      {
        name: "meain",
        link: "https://github.com/meain",
      },
    ],
  },
  {
    name: "twmn",
    description: "Toggle twmn notifications.",
    tech: ["ex"],
    requirements: ["systemctl"],
    contrib: [
      {
        name: "Pseudonick47",
        link: "https://github.com/Pseudonick47",
      },
    ],
  },
  {
    name: "uptime",
    description: "Displays the system uptime.",
    tech: [""],
    requirements: [""],
    contrib: [
      {
        name: "ccoors",
        link: "https://github.com/ccoors",
      },
    ],
  },
  {
    name: "usage",
    description:
      "Module for ActivityWatch (https://activitywatch.net/) Displays the amount of time the system was used actively.",
    tech: ["py", ""],
    requirements: ["sqlite3", "ActivityWatch"],
    parameters: [
      {
        name: "usage.database",
        description: "path to your database file",
        defaultChoice:
          "~/.local/share/activitywatch/aw-server/peewee-sqlite.v2.db",
        example: "~/.local/share/activitywatch/aw-server/peewee-sqlite.v2.db",
      },
      {
        name: "usage.format",
        description: "Specify what gets printed to the bar",
        defaultChoice: "HHh, MMmin",
        example:
          "use ‘HH’, ‘MM’ or ‘SS’, they will get replaced by the number of hours, minutes and seconds, respectively",
      },
    ],
    contrib: [
      {
        name: "lasnikr",
        link: "https://github.com/lasnikr",
      },
    ],
  },
  {
    name: "vpn",
    description:
      "Displays the VPN profile that is currently in use. Left click opens a popup menu that lists all available VPN profiles and allows to establish a VPN connection using that profile.",
    tech: ["py", "py", ""],
    requirements: ["python-tk", "python3-tk", "nmcli"],
    contrib: [
      {
        name: "bbernhard",
        link: "https://github.com/bbernhard",
      },
    ],
  },
  {
    name: "wakatime",
    description:
      "Displays the WakaTime daily/weekly/monthly times: https://wakatime.com/developers#stats Uses xdg-open or x-www-browser to open web-pages.",
    tech: [""],
    requirements: ["requests"],
    parameters: [
      {
        name: "wakatime.token",
        description:
          "Wakatime secret api key, you can get it in https://wakatime.com/settings/account.",
        defaultChoice: "",
        example: "1234567890ABCDEF1234567890ABCDEF",
      },
      {
        name: "wakatime.range",
        description:
          "Range of the output, default is “Today”. Can be one of “Today”, “Yesterday”, “Last 7 Days”, “Last 7 Days from Yesterday”, “Last 14 Days”, “Last 30 Days”, “This Week”, “Last Week”, “This Month”, or “Last Month”.",
        defaultChoice: "Today",
        example:
          "Today, Yesterday, Last 7 Days, Last 7 Days from Yesterday, Last 14 Days, Last 30 Days, This Week, Last Week, This Month, Last Month",
      },
      {
        name: "wakatime.format",
        description:
          "Format of the output, default is “digital” Valid inputs are: “decimal” -> 1.37 “digital” -> 1:22 “seconds” -> 4931.29 “text” -> 1 hr 22 mins",
        defaultChoice: "digital",
        example: "decimal, digital, seconds, text",
      },
    ],
  },
  {
    name: "watson",
    description: "Displays the status of watson (time-tracking tool)",
    tech: ["ex"],
    requirements: ["watson"],
    parameters: [
      {
        name: "watson.format",
        description:
          "Output format, defaults to “{project} [{tags}]” Supported fields are: {project}, {tags}, {relative_start}, {absolute_start}",
        defaultChoice: "{project} [{tags}]",
        example: "{project} : {relative_start}",
      },
    ],
    contrib: [
      {
        name: "bendardenne",
        link: "https://github.com/bendardenne",
      },
    ],
  },
  {
    name: "weather",
    description:
      "Displays the temperature on the current location based on the ip",
    tech: ["py"],
    requirements: ["requests"],
    parameters: [
      {
        name: "weather.location",
        description:
          "Set location, defaults to ‘auto’ for getting location automatically from a web service If set to a comma-separated list, left-click and right-click can be used to rotate the locations. Locations should be city names or city ids.",
        defaultChoice: "auto",
        example: "auto, 1234567, London, Paris",
      },
      {
        name: "weather.unit",
        description: "metric (default), kelvin, imperial",
        defaultChoice: "metric",
        example: "metric, kelvin, imperial",
      },
      {
        name: "weather.showcity",
        description:
          "If set to true, show location information, otherwise hide it (defaults to true)",
        defaultChoice: "true",
        example: "false, true",
      },
      {
        name: "weather.showminmax",
        description:
          "If set to true, show the minimum and maximum temperature, otherwise hide it (defaults to false)",
        defaultChoice: "false",
        example: "false, true",
      },
      {
        name: "weather.apikey",
        description: "API key from https://api.openweathermap.org",
        defaultChoice: "",
        example: "1234567890ABCDEF1234567890ABCDEF",
      },
    ],
    contrib: [
      {
        name: "TheEdgeOfRage",
        link: "https://github.com/TheEdgeOfRage",
      },
    ],
  },
  {
    name: "xkcd",
    description: "Opens a random xkcd comic in the browser.",
    tech: [""],
    requirements: [""],
    contrib: [
      {
        name: "whzup",
        link: "https://github.com/whzup",
      },
    ],
  },
  {
    name: "yubikey",
    description:
      "Shows yubikey information Requires: https://github.com/Yubico/python-yubico The output indicates that a YubiKey is not connected or it displays the corresponding serial number.",
    tech: [""],
    requirements: [""],
    contrib: [
      {
        name: "EmmaTinten",
        link: "https://github.com/EmmaTinten",
      },
    ],
  },
  {
    name: "zpool",
    description:
      "Displays info about zpools present on the system. Option zpool.sudo is intended for Linux users using zfsonlinux older than 0.7.0: In pre-0.7.0 releases of zfsonlinux regular users couldn’t invoke even informative commands such as zpool list. If this option is true, command zpool list is invoked with sudo. If this option is used, the following (or ekvivalent) must be added to the sudoers(5): ` <username/ALL> ALL = (root) NOPASSWD: /usr/bin/zpool list ` Be aware of security implications of doing this!",
    tech: [""],
    requirements: ["sudo (if zpool.sudo is explicitly set to true)"],
    parameters: [
      {
        name: "zpool.list",
        description:
          "Comma-separated list of zpools to display info for. If empty, info for all zpools is displayed. (Default: ‘’)",
        defaultChoice: "",
        example: "",
      },
      {
        name: "zpool.format:",
        description:
          "Format string, tags {name}, {used}, {left}, {size}, {percentfree}, {percentuse}, {status}, {shortstatus}, {fragpercent}, {deduppercent} are supported. (Default: ‘{name} {used}/{size} ({percentfree}%)’)",
        defaultChoice: "{name} {used}/{size} ({percentfree}%)",
        example: "{name} {used} ({percentfree}%)",
      },
      {
        name: "zpool.showio",
        description:
          "Show also widgets detailing current read and write I/O (Default: true)",
        defaultChoice: "true",
        example: "false, true",
      },
      {
        name: "zpool.ioformat",
        description:
          "Format string for I/O widget, tags {ops} (operations per seconds) and {band} (bandwidth) are supported. (Default: ‘{band}’)",
        defaultChoice: "{band}",
        example: "{ops} {band}",
      },
      {
        name: "zpool.warnfree",
        description:
          "Warn if free space is below this percentage (Default: 10)",
        defaultChoice: "10",
        example: "5, 15",
      },
      {
        name: "zpool.sudo",
        description: "Use sudo when calling the zpool binary. (Default: false)",
        defaultChoice: "false",
        example: "false, true",
      },
    ],
    contrib: [
      {
        name: "adam-dej",
        link: "https://github.com/adam-dej",
      },
    ],
  },
];

const themesData = [
  {
    name: "Gruvbox Powerline",
    themeTag: "gruvbox-powerline",
    contrib: [
      {
        name: "TheEdgeOfRage",
        link: "https://github.com/TheEdgeOfRage",
      },
    ],
  },
  {
    name: "Gruvbox Powerline Light",
    themeTag: "gruvbox-powerline-light",
    contrib: [
      {
        name: "freed00m",
        link: "https://github.com/freed00m",
      },
    ],
  },
  {
    name: "Solarized Powerline",
    themeTag: "solarized-powerline",
  },
  {
    name: "Gruvbox",
    themeTag: "gruvbox",
  },
  {
    name: "Gruvbox Light",
    themeTag: "gruvbox-light",
    contrib: [
      {
        name: "freed00m",
        link: "https://github.com/freed00m",
      },
    ],
  },
  {
    name: "Solarized",
    themeTag: "solarized",
  },
  {
    name: "Powerline",
    themeTag: "powerline",
  },
  {
    name: "Greyish Powerline",
    themeTag: "greyish-powerline",
    contrib: [
      {
        name: "oshua Bark",
      },
    ],
  },
  {
    name: "Iceberg",
    themeTag: "iceberg",
    contrib: [
      {
        name: "whzup",
        link: "https://github.com/whzup",
      },
    ],
  },
  {
    name: "Iceberg Powerline",
    themeTag: "iceberg-powerline",
    contrib: [
      {
        name: "whzup",
        link: "https://github.com/whzup",
      },
    ],
  },
  {
    name: "Iceberg Dark Powerline",
    themeTag: "iceberg-dark-powerline",
    contrib: [
      {
        name: "gkeep",
        link: "https://github.com/gkeep",
      },
    ],
  },
  {
    name: "Iceberg Rainbow",
    themeTag: "iceberg-rainbow",
    contrib: [
      {
        name: "gkeep",
        link: "https://github.com/whzup",
      },
    ],
  },
  {
    name: "Iceberg Contrast",
    themeTag: "iceberg-contrast",
    contrib: [
      {
        name: "martindoublem",
        link: "https://github.com/martindoublem",
      },
    ],
  },
  {
    name: "One Dark Powerline",
    themeTag: "onedark-powerline",
    contrib: [
      {
        name: "dillasyx",
        link: "https://github.com/dillasyx",
      },
    ],
  },
  {
    name: "Dracula Powerline",
    themeTag: "dracula-powerline",
    contrib: [
      {
        name: "xsteadfastx",
        link: "https://github.com/xsteadfastx",
      },
    ],
  },
  {
    name: "Nord Powerline",
    themeTag: "nord-powerline",
    contrib: [
      {
        name: "uselessthird",
        link: "https://github.com/uselessthird",
      },
    ],
  },
  {
    name: "Night Powerline",
    themeTag: "night-powerline",
    contrib: [
      {
        name: "LtPeriwinkle",
        link: "https://github.com/LtPeriwinkle",
      },
    ],
  },
  {
    name: "Default",
    themeTag: "default",
  },
  {
    name: "Moonlight Powerline",
    themeTag: "moonlight-powerline",
    contrib: [
      {
        name: "ramonsaraiva",
        link: "https://github.com/ramonsaraiva",
      },
    ],
  },
];

export { moduleNames, modulesData, themesData };
