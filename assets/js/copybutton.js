const copyInstallCodeTextButton = document.getElementById('copy-pip-command-button')
copyInstallCodeTextButton.onclick = () => {
    if (copyInstallCodeTextButton.disabled) return;
    const code = copyInstallCodeTextButton.parentElement.innerText.replace(copyInstallCodeTextButton.innerText + '\n', "");
    navigator.clipboard.writeText(code);
    copyInstallCodeTextButton.textContent = 'کپی شد'
    copyInstallCodeTextButton.disabled = true;
    setTimeout(() => {
        copyInstallCodeTextButton.textContent = 'کپی'
        copyInstallCodeTextButton.disabled = false; 
    }, 3000)
}