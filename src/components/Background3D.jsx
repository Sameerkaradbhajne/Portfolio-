export default function Background3D() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden'
        }}>
            <iframe
                src='https://my.spline.design/nexbotrobotcharacterconcept-c0vbxJgqAvUfKHekG3NWTz6D/'
                frameBorder='0'
                width='100%'
                height='100%'
                style={{
                    border: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'calc(100% + 100px)', // Push logo off screen
                }}
                title="Spline 3D Background"
            ></iframe>
        </div>
    );
}
