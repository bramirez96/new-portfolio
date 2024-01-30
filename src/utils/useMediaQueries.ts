// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { useEffect, useMemo, useState } from 'react';
import { MediaQueryMap } from '../components/lib';

const _MED = '525px';
const _LARGE = '675px';
const _XLARGE = '850px';
const _2XLARGE = '1000px';

export default function useMediaQueries({
    log = false,
}: { log?: boolean } = {}) {
    const [_isMedQuery, _isLargeQuery, _isXLargeQuery, _is2XLargeQuery] =
        useMemo(
            () => [
                window.matchMedia(`(min-width: ${_MED})`),
                window.matchMedia(`(min-width: ${_LARGE})`),
                window.matchMedia(`(min-width: ${_XLARGE})`),
                window.matchMedia(`(min-width: ${_2XLARGE})`),
            ],
            []
        );

    const [isSmall, setIsSmall] = useState(!_isMedQuery.matches);
    const [isMed, setIsMed] = useState(_isMedQuery.matches);
    const [isLarge, setIsLarge] = useState(_isLargeQuery.matches);
    const [isXLarge, setIsXLarge] = useState(_isXLargeQuery.matches);
    const [is2XLarge, setIs2XLarge] = useState(_is2XLargeQuery.matches);

    useEffect(() => {
        function _MedQueryHandler(event: MediaQueryListEvent) {
            setIsSmall(!event.matches);
            setIsMed(event.matches);
            setIsLarge(false);
            setIsXLarge(false);
            setIs2XLarge(false);
        }
        function _LargeQueryHandler(event: MediaQueryListEvent) {
            setIsSmall(false);
            setIsMed(!event.matches);
            setIsLarge(event.matches);
            setIsXLarge(false);
            setIs2XLarge(false);
        }
        function _XLargeQueryHandler(event: MediaQueryListEvent) {
            setIsSmall(false);
            setIsMed(false);
            setIsLarge(!event.matches);
            setIsXLarge(event.matches);
            setIs2XLarge(false);
        }
        function _2XLargeQueryHandler(event: MediaQueryListEvent) {
            setIsSmall(false);
            setIsMed(false);
            setIsLarge(false);
            setIsXLarge(!event.matches);
            setIs2XLarge(event.matches);
        }

        _isMedQuery.addEventListener('change', _MedQueryHandler);
        _isLargeQuery.addEventListener('change', _LargeQueryHandler);
        _isXLargeQuery.addEventListener('change', _XLargeQueryHandler);
        _is2XLargeQuery.addEventListener('change', _2XLargeQueryHandler);
        return () => {
            _isMedQuery.removeEventListener('change', _MedQueryHandler);
            _isLargeQuery.removeEventListener('change', _LargeQueryHandler);
            _isXLargeQuery.removeEventListener('change', _XLargeQueryHandler);
            _is2XLargeQuery.removeEventListener('change', _2XLargeQueryHandler);
        };
    }, [
        setIsSmall,
        setIsMed,
        setIsLarge,
        setIsXLarge,
        setIs2XLarge,
        _isMedQuery,
        _isLargeQuery,
        _isXLargeQuery,
        _is2XLargeQuery,
    ]);

    useEffect(() => {
        if (log) {
            console.log({ isSmall, isMed, isLarge, isXLarge, is2XLarge });
        }
    }, [isSmall, isMed, isLarge, isXLarge, is2XLarge, log]);

    function getMappedValue<ValueType = unknown>(
        mediaQueryMap: MediaQueryMap<ValueType>
    ): ValueType | undefined {
        const { small, medium, large, xLarge, xxLarge } = mediaQueryMap;
        if (isSmall) return small ?? medium ?? large ?? xLarge ?? xxLarge;
        if (isMed) return medium ?? small ?? large ?? xLarge ?? xxLarge;
        if (isLarge) return large ?? medium ?? small ?? xLarge ?? xxLarge;
        if (isXLarge) return xLarge ?? large ?? medium ?? small ?? xxLarge;
        if (is2XLarge) return xxLarge ?? xLarge ?? large ?? medium ?? small;
    }

    return {
        isSmall,
        isMed,
        isLarge,
        isXLarge,
        is2XLarge,
        getMappedValue,
    };
}
