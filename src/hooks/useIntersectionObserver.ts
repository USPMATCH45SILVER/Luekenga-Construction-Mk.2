import { useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  onIntersect?: (entries: IntersectionObserverEntry[]) => void;
}

export const useIntersectionObserver = ({
  threshold = 0.15,
  rootMargin = '50px',
  onIntersect
}: UseIntersectionObserverOptions) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<Element>>(new Set());

  const observe = useCallback((element: Element) => {
    if (observerRef.current && element) {
      observerRef.current.observe(element);
      elementsRef.current.add(element);
    }
  }, []);

  const unobserve = useCallback((element: Element) => {
    if (observerRef.current && element) {
      observerRef.current.unobserve(element);
      elementsRef.current.delete(element);
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      onIntersect || (() => {}),
      { threshold, rootMargin }
    );

    return () => {
      observerRef.current?.disconnect();
      elementsRef.current.clear();
    };
  }, [threshold, rootMargin, onIntersect]);

  return { observe, unobserve };
};