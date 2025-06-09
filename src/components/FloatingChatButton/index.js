import styles from './styles.module.css';

export default function FloatingChatButton() {
    const handleChatClick = () => {
        window.open('https://chatgpt.com/g/g-68464343c35c8191a08b1cd8c1d9a976-d-lab-flow-ai-doumi', '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            className={styles.floatingButton}
            onClick={handleChatClick}
            aria-label="ChatGPT로 이동"
            title="ChatGPT로 이동"
        >
            {/* 네모 모양 말풍선 아이콘 */}
            <svg
                width="30"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="2"
                    y="4"
                    width="18"
                    height="12"
                    rx="2"
                    ry="2"
                    fill="currentColor"
                />
                <path
                    d="M8 16L12 20L16 16"
                    fill="currentColor"
                />
                <circle cx="7" cy="10" r="1.5" fill="white" />
                <circle cx="12" cy="10" r="1.5" fill="white" />
                <circle cx="17" cy="10" r="1.5" fill="white" />
            </svg>

            <span className={styles.buttonText}>AI 챗봇</span>
        </button>
    );
}
