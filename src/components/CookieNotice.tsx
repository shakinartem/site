import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const storageKey = 'devpair-cookie-consent';

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(storageKey);
    setVisible(accepted !== 'accepted');
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(storageKey, 'accepted');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.28 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl"
        >
          <div className="glass-panel flex flex-col gap-4 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-200">Мы используем cookies для корректной работы сайта</p>
            <button type="button" onClick={handleAccept} className="btn-primary shrink-0">
              Понятно
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

