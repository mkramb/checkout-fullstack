export default function withServerApi(path: string) {
  return `${process.env.SERVER_API}${path}`;
}
