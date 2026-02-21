import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "cookie-consent";

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem(CONSENT_KEY);
    setVisible(!existing);
  }, []);

  const handleChoice = (value: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="container-custom pb-6">
        <div className="bg-card border border-border rounded-2xl p-5 shadow-lg flex flex-col md:flex-row md:items-center gap-4">
          <div className="text-sm text-muted-foreground">
            We use cookies for analytics and to support optional advertising. You can accept or
            decline. Learn more in our{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:ml-auto">
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => handleChoice("declined")}
            >
              Decline
            </Button>
            <Button
              className="btn-primary rounded-full"
              onClick={() => handleChoice("accepted")}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
