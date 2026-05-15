export async function summarizeText(text: string) {
  try {
    const response = await fetch("/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Failed to summarize");
    }

    const data = await response.json();
    return data.summary;
  } catch (error: any) {
    console.error("Summarization error:", error);
    throw error;
  }
}
