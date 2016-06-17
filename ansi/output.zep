namespace Ansi;

class Output {

    // background color types
    const BG_BLACK_TYPE = 1;
    const BG_RED_TYPE = 2;
    const BG_GREEN_TYPE = 3;
    const BG_YELLOW_TYPE = 4;
    const BG_BLUE_TYPE = 5;
    const BG_MAGENTA_TYPE = 6;
    const BG_CYAN_TYPE = 7;
    const BG_LIGHT_GRAY_TYPE = 8;

    // foreground color types
    const FG_BLACK_TYPE = 11;
    const FG_DARK_GREY_TYPE = 12;
    const FG_BLUE_TYPE = 13;
    const FG_LIGHT_BLUE_TYPE = 14;
    const FG_GREEN_TYPE = 15;
    const FG_LIGHT_GREEN_TYPE = 16;
    const FG_CYAN_TYPE = "CYAN";
    const FG_LIGHT_CYAN_TYPE = 17;
    const FG_RED_TYPE = "RED";
    const FG_LIGHT_RED_TYPE = 18;
    const FG_PURPLE_TYPE = 19;
    const FG_LIGHT_PURPLE_TYPE = 20;
    const FG_BROWN_TYPE = 21;
    const FG_YELLOW_TYPE = 22;
    const FG_LIGHT_GREY_TYPE = 23;
    const FG_WHITE_TYPE = 24;

    // background colors
    const BG_BLACK = "\033[40m";
    const BG_RED = "\033[41m";
    const BG_GREEN = "\033[42m";
    const BG_YELLOW = "\033[43m";
    const BG_BLUE = "\033[44m";
    const BG_MAGENTA = "\033[45m";
    const BG_CYAN = "\033[46m";
    const BG_LIGHT_GRAY = "\033[47m";

    // foreground colors
    const FG_BLACK = "\033[0;30m";
    const FG_DARK_GREY = "\033[1;30m";
    const FG_BLUE = "\033[0;34m";
    const FG_LIGHT_BLUE = "\033[1;34m";
    const FG_GREEN = "\033[0;32m";
    const FG_LIGHT_GREEN = "\033[1;32m";
    const FG_CYAN = "\033[0;36m";
    const FG_LIGHT_CYAN = "\033[1;36m";
    const FG_RED = "\033[0;31m";
    const FG_LIGHT_RED = "\033[1;31m";
    const FG_PURPLE = "\033[0;35m";
    const FG_LIGHT_PURPLE = "\033[1;35m";
    const FG_BROWN = "\033[0;33m";
    const FG_YELLOW = "\033[1;33m";
    const FG_LIGHT_GREY = "\033[0;37m";
    const FG_WHITE = "\033[1;37m";

    // other ansi properties
    const ANSI_END = "\033[0m";
    const ANSI_BOLD = "\033[1m";
    const ANSI_ITALIC = "\033[3m";
    const ANSI_UNDERLINE = "\033[4m";
    const ANSI_BLINK = "\033[5m";
    const ANSI_INVERSE = "\033[7m";
    const ANSI_HIDDEN = "\033[8m";

    // console output cannot use "." as string operator
    // arrays connot be initialized
    protected prefix = [];
    protected suffix = [];

    // cannot figure out the type "int" ?
	public function __construct(var fg = null, var bg = null, boolean underline = false, boolean bold = false, boolean italic = false, boolean blink = false) 
    {
        let this->prefix[] = Output::ANSI_END;
        this->setFg(fg);
        this->setBg(bg);
    	if bold {
            let this->prefix[] = Output::ANSI_BOLD;
        }
        if italic {
            let this->prefix[] = Output::ANSI_ITALIC;
        }
        if underline {
            let this->prefix[] = Output::ANSI_UNDERLINE;
        }
        if blink {
            let this->prefix[] = Output::ANSI_BLINK;
        }
        let this->suffix[] = Output::ANSI_END;
    }

    protected function log(var str) -> void 
    {
        // echo (string)str . "\n";
    }

    protected function setFg(var fg) -> void
    {
        switch fg {
            // support only int
            case Output::FG_WHITE_TYPE:
                let this->prefix[] = Output::FG_WHITE;
                break;
            case Output::FG_YELLOW_TYPE:
                let this->prefix[] = Output::FG_YELLOW;
                break;
            case Output::FG_BROWN_TYPE:
                let this->prefix[] = Output::FG_BROWN;
                break;
            case Output::FG_PURPLE_TYPE:
                let this->prefix[] = Output::FG_PURPLE;
                break;
            case Output::FG_RED_TYPE:
                let this->prefix[] = Output::FG_RED;
                break;
            case Output::FG_CYAN_TYPE:
                let this->prefix[] = Output::FG_CYAN;
                break;
            case Output::FG_GREEN_TYPE:
                let this->prefix[] = Output::FG_GREEN;
                break;
            case Output::FG_BLUE_TYPE:
                let this->prefix[] = Output::FG_BLUE;
                break;
            case Output::FG_BLACK_TYPE:
                let this->prefix[] = Output::FG_BLACK;
                break;
            case Output::FG_LIGHT_GREY_TYPE:
                let this->prefix[] = Output::FG_LIGHT_GREY;
                break;
            case Output::FG_LIGHT_PURPLE_TYPE:
                let this->prefix[] = Output::FG_LIGHT_PURPLE;
                break;
            case Output::FG_LIGHT_RED_TYPE:
                let this->prefix[] = Output::FG_LIGHT_RED;
                break;
            case Output::FG_LIGHT_CYAN_TYPE:
                let this->prefix[] = Output::FG_LIGHT_CYAN;
                break;
            case Output::FG_LIGHT_GREEN_TYPE:
                let this->prefix[] = Output::FG_LIGHT_GREEN;
                break;
            case Output::FG_LIGHT_BLUE_TYPE:
                let this->prefix[] = Output::FG_LIGHT_BLUE;
                break;
            case Output::FG_DARK_GREY_TYPE:
                let this->prefix[] = Output::FG_DARK_GREY;
                break;
            default:
                break;
        }
    }

    protected function setBg(var bg) -> void
    {
        switch bg {
            case Output::BG_CYAN_TYPE:
                let this->prefix[] = Output::BG_CYAN;
                break;
            case Output::BG_MAGENTA_TYPE:
                let this->prefix[] = Output::BG_MAGENTA;
                break;
            case Output::BG_BLUE_TYPE:
                let this->prefix[] = Output::BG_BLUE;
                break;
            case Output::BG_YELLOW_TYPE:
                let this->prefix[] = Output::BG_YELLOW;
                break;
            case Output::BG_GREEN_TYPE:
                let this->prefix[] = Output::BG_GREEN;
                break;
            case Output::BG_RED_TYPE:
                let this->prefix[] = Output::BG_RED;
                break;
            case Output::BG_BLACK_TYPE:
                let this->prefix[] = Output::BG_BLACK;
                break;
            case Output::BG_LIGHT_GRAY_TYPE:
                let this->prefix[] = Output::BG_LIGHT_GRAY;
                break;
            default:
                break;
        }
    }

    public function out(string! str) -> void 
    {
        // when use "for in" block, declare variable first
        // cannot figure out if there is "foreach" block
        var pre;
    	for pre in this->prefix {
            echo pre;
        }
        echo str;
        var suf;
        for suf in this->suffix {
            echo suf;
        }
    }

}