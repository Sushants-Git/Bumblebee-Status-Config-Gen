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
        example: "38.9072",
      },
    ],
  },
];

export { moduleNames, modulesData };
