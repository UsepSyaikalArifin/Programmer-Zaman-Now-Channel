// 1.
{
    const original = `Usep&Syaikal=Arifin`

    const encoded = btoa(original)
    console.info(encoded)

    const decoded = atob(encoded)
    console.info(decoded)
}