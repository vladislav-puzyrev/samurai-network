export const required = (value: string) => {
  if (!value) return 'Поле обязательное'
}

export const maxLength = (length: number) => (value: string) => {
  if (value.length > length) return `Максимальная длина - ${length}`
}
