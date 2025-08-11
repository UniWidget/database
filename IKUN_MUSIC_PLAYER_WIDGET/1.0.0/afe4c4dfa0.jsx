/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

const types = {
    isInvisibleWidget: false,
    type: "IKUN_MUSIC_PLAYER_WIDGET",
    icon: "https://static.codemao.cn/coco/player/unstable/rJZhYkL32.image/jpeg?hash=FucXTDVfBJdoSStUZvqy24ILwabo", // Replace with your icon URL
    title: "iKun Music Player",
    version: "1.0.0",
    isGlobalWidget: false,
    properties: [],
    methods: [],
    events: [],
};

class IKunMusicPlayerWidget extends VisibleWidget {
    constructor(props) {
        super(props);
        this.audioUrl = "https://api.bokexia.com/api/ikun";
        this.sound = new Howl({
            src: [this.audioUrl],
            format: ['mp3'],
            preload: true,
        });

        this.state = {
            isPlaying: false,
        };
    }

    handlePlayClick = () => {
        this.sound.play();
        this.setState({ isPlaying: true });
    };

    handlePauseClick = () => {
        this.sound.pause();
        this.setState({ isPlaying: false });
    };

    render() {
        const { isPlaying } = this.state;

        return (
            <div className="music-player">
                <h2>iKun Music Player</h2>
                <button onClick={this.handlePlayClick} disabled={isPlaying}>
                    Play
                </button>
                <button onClick={this.handlePauseClick} disabled={!isPlaying}>
                    Pause
                </button>
                <style>
                    {`
                        .music-player {
                            padding: 20px;
                            background-color: #f0f0f0;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                        }

                        button {
                            font-size: 16px;
                            padding: 10px 20px;
                            margin-right: 10px;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                            background-color: #5891ff;
                            color: white;
                        }

                        button:disabled {
                            background-color: #ccc;
                            cursor: not-allowed;
                        }
                    `}
                </style>
            </div>
        );
    }
}

exports.types = types;
exports.widget = IKunMusicPlayerWidget;
