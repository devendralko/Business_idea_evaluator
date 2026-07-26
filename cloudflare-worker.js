const PAGE_B64 = "PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSI+PHRpdGxlPkJ1c2luZXNzIElkZWEgRXZhbHVhdG9yPC90aXRsZT4KPHN0eWxlPjpyb290e2NvbG9yLXNjaGVtZTpsaWdodH0qe2JveC1zaXppbmc6Ym9yZGVyLWJveH1ib2R5e21hcmdpbjowO2JhY2tncm91bmQ6I2Y0ZjZmYjtjb2xvcjojMWMyMjMwO2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sIlNlZ29lIFVJIixSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxLjV9Lnd7bWF4LXdpZHRoOjgyMHB4O21hcmdpbjowIGF1dG87cGFkZGluZzoyOHB4IDIwcHggNjBweH1oMXtmb250LXNpemU6MjVweDttYXJnaW46MCAwIDJweDtjb2xvcjojMWYzODY0fS5zdWJ7Y29sb3I6IzY2NzA4NTtmb250LXNpemU6MTRweDttYXJnaW46MCAwIDIwcHh9LmNhcmR7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2U0ZThmMDtib3JkZXItcmFkaXVzOjE0cHg7cGFkZGluZzoxOHB4O2JveC1zaGFkb3c6MCAxcHggMnB4IHJnYmEoMTYsMjQsNDAsLjA0KX10ZXh0YXJlYXt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6OTJweDtyZXNpemU6dmVydGljYWw7cGFkZGluZzoxMnB4IDE0cHg7Ym9yZGVyOjFweCBzb2xpZCAjZDVkYmU2O2JvcmRlci1yYWRpdXM6MTBweDtmb250OmluaGVyaXQ7YmFja2dyb3VuZDojZmJmY2ZlfXRleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZTtib3JkZXItY29sb3I6IzFmMzg2NDtiYWNrZ3JvdW5kOiNmZmZ9LnJvd3tkaXNwbGF5OmZsZXg7Z2FwOjEycHg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi10b3A6MTJweDtmbGV4LXdyYXA6d3JhcH1idXR0b257YmFja2dyb3VuZDojMWYzODY0O2NvbG9yOiNmZmY7Ym9yZGVyOjA7cGFkZGluZzoxMXB4IDIwcHg7Ym9yZGVyLXJhZGl1czoxMHB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtjdXJzb3I6cG9pbnRlcn1idXR0b246aG92ZXJ7YmFja2dyb3VuZDojMmE0YTgwfWJ1dHRvbjpkaXNhYmxlZHtiYWNrZ3JvdW5kOiM5YWE2YmR9LmhpbnR7Y29sb3I6IzhhOTNhNjtmb250LXNpemU6MTIuNXB4fS5iYWRnZXtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjVweCAxNHB4O2JvcmRlci1yYWRpdXM6OTk5cHg7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxNHB4fS5HT3tiYWNrZ3JvdW5kOiNlNWY0ZWE7Y29sb3I6IzFhN2YzN30uUkVXT1JLe2JhY2tncm91bmQ6I2ZkZjNlMjtjb2xvcjojYTE1YzA3fS5LSUxMe2JhY2tncm91bmQ6I2ZkZWNlYjtjb2xvcjojYjQyMzE4fS5yZXN7bWFyZ2luLXRvcDoyMHB4fS5pZGVhe2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjYwMDttYXJnaW46MCAwIDRweH0uYXNzdW17Y29sb3I6IzY2NzA4NTtmb250LXNpemU6MTNweDttYXJnaW46MCAwIDE0cHh9LnZse2Rpc3BsYXk6ZmxleDtnYXA6MTRweDthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC13cmFwOndyYXA7bWFyZ2luLWJvdHRvbTo4cHh9LmNvbXAgYntmb250LXNpemU6MjJweDtjb2xvcjojMWYzODY0fS5jb252e2JhY2tncm91bmQ6I2Y2ZjhmYztib3JkZXItbGVmdDozcHggc29saWQgIzFmMzg2NDtwYWRkaW5nOjEwcHggMTRweDtib3JkZXItcmFkaXVzOjZweDtmb250LXNpemU6MTMuNXB4O21hcmdpbjoxMnB4IDB9dGFibGV7d2lkdGg6MTAwJTtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7bWFyZ2luOjE0cHggMDtmb250LXNpemU6MTRweH10aCx0ZHt0ZXh0LWFsaWduOmxlZnQ7cGFkZGluZzo5cHggMTJweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVmMWY2fXRoe2JhY2tncm91bmQ6IzFmMzg2NDtjb2xvcjojZmZmfXRoOm50aC1jaGlsZCgyKSx0ZDpudGgtY2hpbGQoMil7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NzBweH0ucGlsbHtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6MjhweDtwYWRkaW5nOjJweCA4cHg7Ym9yZGVyLXJhZGl1czo2cHg7Zm9udC13ZWlnaHQ6NzAwfS5yb2xle2JvcmRlcjoxcHggc29saWQgI2U3ZWJmMztib3JkZXItcmFkaXVzOjEwcHg7cGFkZGluZzoxM3B4IDE1cHg7bWFyZ2luLXRvcDoxMHB4fS5yaHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1ib3R0b206NXB4fS5yaCBie2NvbG9yOiMxZjM4NjR9LnJvbGUgcHttYXJnaW46NXB4IDAgMDtmb250LXNpemU6MTMuNHB4O2NvbG9yOiMyYjM0NDZ9LnJ2e21hcmdpbi10b3A6N3B4O2ZvbnQtc2l6ZToxMi44cHg7Zm9udC1zdHlsZTppdGFsaWM7Y29sb3I6IzU1NjA3YX0ucmVjcyBsaXttYXJnaW46NXB4IDA7Zm9udC1zaXplOjEzLjZweH0uZXJye2NvbG9yOiNiNDIzMTg7YmFja2dyb3VuZDojZmRlY2ViO2JvcmRlcjoxcHggc29saWQgI2VlYjFhYztwYWRkaW5nOjEycHggMTRweDtib3JkZXItcmFkaXVzOjEwcHg7Zm9udC1zaXplOjEzLjVweH0uZm9vdHtjb2xvcjojOWFhNmJkO2ZvbnQtc2l6ZToxMnB4O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi10b3A6MjhweH0uc3Bpbnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2JvcmRlcjozcHggc29saWQgI2Q5ZTBlZTtib3JkZXItdG9wLWNvbG9yOiMxZjM4NjQ7Ym9yZGVyLXJhZGl1czo1MCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7YW5pbWF0aW9uOnMgMXMgbGluZWFyIGluZmluaXRlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW4tcmlnaHQ6OHB4fUBrZXlmcmFtZXMgc3t0b3t0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fTwvc3R5bGU+PC9oZWFkPgo8Ym9keT48ZGl2IGNsYXNzPSJ3Ij48aDE+QnVzaW5lc3MgSWRlYSBFdmFsdWF0b3I8L2gxPjxwIGNsYXNzPSJzdWIiPlBhc3RlIGEgYnVzaW5lc3MgaWRlYS4gQSBmb3VyLXJvbGUgcGFuZWwgc2NvcmVzIGl0IE1hcmtldCwgUHJpY2luZywgUG9zaXRpb25pbmcsIFJldmVudWUgYW5kIGNhbGxzIEdPIC8gUkVXT1JLIC8gS0lMTC48L3A+CjxkaXYgY2xhc3M9ImNhcmQiPjx0ZXh0YXJlYSBpZD0iaSIgcGxhY2Vob2xkZXI9ImUuZy4gQSBzdWJzY3JpcHRpb24gYm94IGRlbGl2ZXJpbmcgbG9jYWxseS1yb2FzdGVkIGNvZmZlZSB0byBvZmZpY2VzIHdpdGggYSBtYW5hZ2VyIGRhc2hib2FyZC4iPjwvdGV4dGFyZWE+PGRpdiBjbGFzcz0icm93Ij48YnV0dG9uIGlkPSJnIj5FdmFsdWF0ZSBpZGVhPC9idXR0b24+PHNwYW4gY2xhc3M9ImhpbnQiPkN0cmwvQ21kK0VudGVyIHRvIHJ1bi48L3NwYW4+PC9kaXY+PC9kaXY+CjxkaXYgaWQ9Im8iPjwvZGl2Pgo8ZGl2IGNsYXNzPSJmb290Ij44LTEwIHN0cm9uZzsgNS03IHdvcmthYmxlIHdpdGggY2F2ZWF0czsgMS00IHdlYWsuIFVzZXMgYSBmYXN0IEFJIG1vZGVsLCBubyBsaXZlIHdlYiBzZWFyY2guPC9kaXY+PC9kaXY+CjxzY3JpcHQ+CnZhciBvPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJvIiksZWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImkiKSxnPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJnIik7CmZ1bmN0aW9uIGUocyl7cmV0dXJuIFN0cmluZyhzPT1udWxsPyIiOnMpLnJlcGxhY2UoL1smPD4iXS9nLGZ1bmN0aW9uKGMpe3JldHVybnsiJiI6IiZhbXA7IiwiPCI6IiZsdDsiLCI+IjoiJmd0OyIsJyInOiImcXVvdDsifVtjXX0pfQpmdW5jdGlvbiBjb2wobil7bj1OdW1iZXIobil8fDA7aWYobj49OClyZXR1cm5bIiNlNWY0ZWEiLCIjMWE3ZjM3Il07aWYobj49NSlyZXR1cm5bIiNmZGYzZTIiLCIjYTE1YzA3Il07cmV0dXJuWyIjZmRlY2ViIiwiI2I0MjMxOCJdfQpmdW5jdGlvbiByZW5kZXIodil7dmFyIGNhbGw9KHYuY2FsbHx8IlJFV09SSyIpLnRvVXBwZXJDYXNlKCk7dmFyIHJzPXYucm9sZXN8fFtdOwp2YXIgcm93cz1ycy5tYXAoZnVuY3Rpb24ocil7dmFyIGM9Y29sKHIuc2NvcmUpO3JldHVybiAiPHRyPjx0ZD4iK2Uoci5uYW1lKSsiPC90ZD48dGQ+PHNwYW4gY2xhc3M9cGlsbCBzdHlsZT0nYmFja2dyb3VuZDoiK2NbMF0rIjtjb2xvcjoiK2NbMV0rIic+IitlKHIuc2NvcmUpKyI8L3NwYW4+PC90ZD48dGQ+IitlKHIudmVyZGljdCkrIjwvdGQ+PC90cj4ifSkuam9pbigiIik7CnZhciBjYXJkcz1ycy5tYXAoZnVuY3Rpb24ocil7dmFyIGM9Y29sKHIuc2NvcmUpO3JldHVybiAiPGRpdiBjbGFzcz1yb2xlPjxkaXYgY2xhc3M9cmg+PGI+IitlKHIubmFtZSkrIjwvYj48c3BhbiBjbGFzcz1waWxsIHN0eWxlPSdiYWNrZ3JvdW5kOiIrY1swXSsiO2NvbG9yOiIrY1sxXSsiJz4iK2Uoci5zY29yZSkrIi8xMDwvc3Bhbj48L2Rpdj48cD4iK2Uoci5hbmFseXNpcykrIjwvcD48ZGl2IGNsYXNzPXJ2PiIrZShyLnZlcmRpY3QpKyI8L2Rpdj48L2Rpdj4ifSkuam9pbigiIik7CnZhciByZWNzPSh2LnJlY29tbWVuZGF0aW9ufHxbXSkubWFwKGZ1bmN0aW9uKHgpe3JldHVybiAiPGxpPiIrZSh4KSsiPC9saT4ifSkuam9pbigiIik7Cm8uaW5uZXJIVE1MPSI8ZGl2IGNsYXNzPSdjYXJkIHJlcyc+PHAgY2xhc3M9aWRlYT4iK2Uodi5pZGVhKSsiPC9wPiIrKHYuYXNzdW1wdGlvbnM/IjxwIGNsYXNzPWFzc3VtPkFzc3VtcHRpb25zOiAiK2Uodi5hc3N1bXB0aW9ucykrIjwvcD4iOiIiKSsiPGRpdiBjbGFzcz12bD48c3BhbiBjbGFzcz0nYmFkZ2UgIitjYWxsKyInPiIrY2FsbCsiPC9zcGFuPjxzcGFuIGNsYXNzPWNvbXA+Q29tcG9zaXRlIDxiPiIrZSh2LmNvbXBvc2l0ZSkrIjwvYj4gLyAxMDwvc3Bhbj48L2Rpdj48cD4iK2Uodi5yZWFzb25pbmcpKyI8L3A+Iisodi5jb252ZXJnZW5jZT8iPGRpdiBjbGFzcz1jb252PjxiPkNvbnZlcmdlbmNlOjwvYj4gIitlKHYuY29udmVyZ2VuY2UpKyI8L2Rpdj4iOiIiKSsiPHRhYmxlPjx0aGVhZD48dHI+PHRoPkRpbWVuc2lvbjwvdGg+PHRoPlNjb3JlPC90aD48dGg+VmVyZGljdDwvdGg+PC90cj48L3RoZWFkPjx0Ym9keT4iK3Jvd3MrIjwvdGJvZHk+PC90YWJsZT4iK2NhcmRzKyhyZWNzPyI8aDM+UmVjb21tZW5kYXRpb248L2gzPjx1bCBjbGFzcz1yZWNzPiIrcmVjcysiPC91bD4iOiIiKSsiPC9kaXY+IjsKby5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6InNtb290aCIsYmxvY2s6InN0YXJ0In0pfQpmdW5jdGlvbiBydW4oKXt2YXIgaWRlYT1lbC52YWx1ZS50cmltKCk7aWYoIWlkZWEpe2VsLmZvY3VzKCk7cmV0dXJufWcuZGlzYWJsZWQ9dHJ1ZTtnLnRleHRDb250ZW50PSJFdmFsdWF0aW5nLi4uIjtvLmlubmVySFRNTD0iPGRpdiBjbGFzcz0nY2FyZCcgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiM2NjcwODUnPjxzcGFuIGNsYXNzPXNwaW4+PC9zcGFuPlJ1bm5pbmcgdGhlIGZvdXItcm9sZSBwYW5lbC4uLjwvZGl2PiI7CmZldGNoKCIiLHttZXRob2Q6IlBPU1QiLGhlYWRlcnM6eyJjb250ZW50LXR5cGUiOiJhcHBsaWNhdGlvbi9qc29uIn0sYm9keTpKU09OLnN0cmluZ2lmeSh7aWRlYTppZGVhfSl9KS50aGVuKGZ1bmN0aW9uKHIpe3JldHVybiByLmpzb24oKS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybntvazpyLm9rLGQ6ZH19KX0pLnRoZW4oZnVuY3Rpb24oeCl7aWYoIXgub2t8fHguZC5lcnJvcil0aHJvdyBuZXcgRXJyb3IoeC5kLmVycm9yfHwiZXJyb3IiKTtpZigheC5kLnJvbGVzKXRocm93IG5ldyBFcnJvcigiYmFkIHJlc3BvbnNlIik7eC5kLmlkZWE9eC5kLmlkZWF8fGlkZWE7cmVuZGVyKHguZCl9KS5jYXRjaChmdW5jdGlvbihlcnIpe28uaW5uZXJIVE1MPSI8ZGl2IGNsYXNzPSdjYXJkJz48ZGl2IGNsYXNzPWVycj5Tb3JyeSwgdGhlIGV2YWx1YXRpb24gY291bGQgbm90IGJlIGdlbmVyYXRlZCAoIitlKGVyci5tZXNzYWdlKSsiKS4gVHJ5IGFnYWluIHNob3J0bHkuPC9kaXY+PC9kaXY+In0pLnRoZW4oZnVuY3Rpb24oKXtnLmRpc2FibGVkPWZhbHNlO2cudGV4dENvbnRlbnQ9IkV2YWx1YXRlIGlkZWEifSl9Cmcub25jbGljaz1ydW47ZWwuYWRkRXZlbnRMaXN0ZW5lcigia2V5ZG93biIsZnVuY3Rpb24oZXYpe2lmKChldi5tZXRhS2V5fHxldi5jdHJsS2V5KSYmZXYua2V5PT09IkVudGVyIilydW4oKX0pOwo8L3NjcmlwdD48L2JvZHk+PC9odG1sPgo=";

const MODEL = "claude-haiku-4-5-20251001";

const PROMPT_HEAD =
  "You are the Orchestrator of a business-idea evaluation panel. Evaluate the idea below through four specialist roles, each judging ONLY its own dimension and giving an integer score 1-10:\n" +
  "- Market: demand (real/recurring vs fad), competition, timing, size.\n" +
  "- Pricing: price the market bears, sensitivity, a concrete tier idea, margin room.\n" +
  "- Positioning: differentiation vs incumbents, moat/switching cost, sharpest wedge, biggest risk.\n" +
  "- Revenue: revenue-model shape, unit economics, the cost line that decides profitability, path to first revenue, churn.\n" +
  "Then synthesize: composite = average of the four (one decimal), a call of GO, REWORK, or KILL with one-line reasoning, a convergence point (a shared risk/lever multiple roles flagged), and if REWORK/KILL a short list of specific changes that move it toward GO.\n" +
  "Be specific, quantitative, and honest, not a cheerleader. Infer obvious context and state brief assumptions.\n" +
  "Return ONLY valid minified JSON, no markdown, with this exact shape:\n" +
  '{"idea":"<one-sentence restatement>","assumptions":"<short>","composite":<number>,"call":"GO|REWORK|KILL","reasoning":"<one line>","convergence":"<one line>","roles":[{"name":"Market","score":<int>,"analysis":"<2-3 sentences with numbers>","verdict":"<one line>"},{"name":"Pricing","score":<int>,"analysis":"...","verdict":"..."},{"name":"Positioning","score":<int>,"analysis":"...","verdict":"..."},{"name":"Revenue","score":<int>,"analysis":"...","verdict":"..."}],"recommendation":["<change 1>","<change 2>"]}\n';

function decodePage() {
  const bin = atob(PAGE_B64);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function extractJSON(raw) {
  let s = (raw || "").trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  const a = s.indexOf("{"), b = s.lastIndexOf("}");
  if (a >= 0 && b > a) s = s.slice(a, b + 1);
  return JSON.parse(s);
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "GET") {
      return new Response(decodePage(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
    if (request.method === "POST") {
      try {
        const { idea } = await request.json();
        if (!idea || typeof idea !== "string" || idea.trim().length < 3) {
          return json({ error: "Please enter a business idea." }, 400);
        }
        const key = env.ANTHROPIC_API_KEY;
        if (!key) return json({ error: "Server not configured: add the ANTHROPIC_API_KEY secret." }, 500);
        const prompt = PROMPT_HEAD + "IDEA: " + idea.slice(0, 2000);
        const resp = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "x-api-key": key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            model: MODEL,
            max_tokens: 1600,
            messages: [{ role: "user", content: prompt }],
          }),
        });
        if (!resp.ok) {
          const t = await resp.text();
          return json({ error: "Model API error (" + resp.status + "): " + t.slice(0, 300) }, 502);
        }
        const data = await resp.json();
        const text = (data && data.content && data.content[0] && data.content[0].text) || "";
        let ev;
        try { ev = extractJSON(text); } catch (_) { return json({ error: "Could not parse the evaluation. Try again." }, 502); }
        return json(ev, 200);
      } catch (e) {
        return json({ error: "Unexpected error: " + ((e && e.message) || String(e)) }, 500);
      }
    }
    return new Response("Method not allowed", { status: 405 });
  },
};
