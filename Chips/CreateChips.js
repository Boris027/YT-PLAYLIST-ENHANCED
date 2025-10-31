async function createYoutubeNewChip(){
    // Create a single yt-chip-cloud-chip-renderer element
    const chip = document.createElement('div');
    chip.id="reverse-chip";
    chip.textContent="Reverse";
    chip.style.backgroundColor="rgba(255, 255, 255, 0.09)";
    chip.style.padding="10px";
    chip.style.borderRadius="16px";
    chip.style.cursor="pointer";
    chip.style.color="White";
    chip.style.fontWeight="bold";
    chip.style.textAlign="center";
    chip.style.borderRadius="20px";
    chip.style.padding="12px"
    chip.style.fontSize="14px";
    chip.style.margin="3px"
    chip.style.marginTop="0px"
    chip.style.backdropFilter="blur(10px)";

    chip.addEventListener('click', () => {
        whenclickedchip();
    })

    return chip;
}