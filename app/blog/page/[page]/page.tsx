import { redirect } from 'next/navigation'

// No longer generating static params since pagination is removed
export const generateStaticParams = async () => {
  return []
}

// Redirect any pagination requests to the main blog page
export default async function Page() {
  redirect('/blog')
}
